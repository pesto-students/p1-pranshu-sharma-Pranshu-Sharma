## The browser's main functionality

A browser is an application program for locating, retrieving and displaying content on the WWW, including web pages, images, videos, and other files. As a client/server model, the browser is a client running on a computer that contacts the web server and requests information which is sent to the web browser by the web server which displays the result on the computer or other devices (Internet-enabled) that support a browser.


## What happens when typing the URL in the web browser?

When you type any URL in the web browser, to load the page, it first has to find the IP address of the web server. It asks the Operating System (OS) to check the server name in the local cache. If it is there in the cache, then Rendering Engine renders the web page.

1. **Check browser cache:** To load the page, browsers first have to find the IP address of the web server. They maintain a cache of DNS records for some fixed duration. This is the first place where the DNS queries are resolved. It checks the local cache, if the requested object is in the cache and is fresh, then you can skip to Step 9.
2. **Check OS cache:** If the browser doesn’t contain the records in its cache, it makes a system call to the underlying Operating System to fetch the server’s IP address as OS maintains a cache of the recent DNS queries.
3. **Router Cache:** If the above steps fail to get a DNS record, the search continues to your router which has its cache.
4. **ISP cache:** In case everything fails, the search moves on to your ISP. First, it tries in its cache. If it is not found — ISP’s DNS ***recursive search*** comes into the picture. DNS lookup is again a complex process that finds the appropriate IP address from a list of websites. 
5. After finding an appropriate IP address, the browser **initiates a TCP connection** with the server.
6. The browser **sends an HTTP *GET* request** to the server according to the specification of the HTTP(Hypertext Transfer Protocol) protocol through a TCP connection.
7. The browser **receives an HTTP response** and may close the TCP connection, or reuse it for another request.
8. Once the browser gets the requested file, it has two things to do: 
    * Interpret and render the HTML page
    * Obtain the remaining objects (images, flash files, JS files, CSS files, audios, videos, etc.), interpret and display them.


9. There will be **immediate** interpretation and rendition of the HTML file by some browsers. They will request the **objects in parallel**, filling in the objects as they are received. Others will wait to receive all the objects and then render and display the HTML file.

10. **HTML content is rendered in phases**. Firstly, the bare-bone HTML structure is rendered by the browser. Secondly, multiple GET requests are sent to fetch other hyperlinked stuff e.g. If you get an image as an HTML response in the form of an img tag such as "<img src=”/assets/img/set.png” />", the browser will send an HTTP GET request to the server to fetch the image following all the steps that have been covered till now. Static files like **images, JS files, CSS files** are all cached by the browser so that in the future, it doesn’t have to fetch them again.

That’s it. The browser will then wait for the user to request another file to begin everything again.

While this is the process that happens when we type a URL in the browser, let’s dive in a little deeper and understand how a browser works behind the scenes by understanding its architecture.

A browser is a group of structured codes that perform a series of tasks to display a web page on the screen. According to their tasks, they are made as different components.


## High-level architecture of browser

The image shown below displays the main components of a web browser:

![](browser-components.png)

1. **The User Interface:** The user interface is the space where a user interacts with the browser. It includes address bar, back and next buttons, home button, refresh and stop, bookmark option, etc. Every other part comes under it, except the window where the requested web page is displayed.
2. **The Browser Engine:** It works as a bridge between user interface and rendering engine. It queries and manipulates the rendering engine, according to the inputs from various user interfaces.
3. **The Rendering Engine:** It is responsible for rendering the requested web page on the browser screen. It interprets HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the user interface. However, usage of plugins or extensions can display other types of data as well. Different rendering engines are used by different browsers. 
    *   Internet Explorer: Trident
    *   Firefox & other Mozilla browsers: Gecko
    *   Chrome & Opera 15+: Blink
    *   Chrome (iPhone) & Safari: WebKit


4. **Networking:** A component of the browser that retrieves URLs using the common internet protocols of HTTP or FTP. It handles all aspects of Internet security and communication. It may implement a cache of retrieved documents to reduce network traffic.
5. **Javascript Interpreter:** The browser component that interprets and executes the Javascript code embedded in a website. The interpreted results are sent for display to the rendering engine. The browser executes the scripts in the order it finds them. If the script is external, then the resource is fetched first from the network. The parser remains inactive until the script is executed.
6. **UI Backend:** It is used to draw basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform-specific. It uses operating system user interface methods.
7. **Data Persistence and Storage:** This is a persistence layer. The browsers support storage mechanisms such as WebSQL, localStorage, FileSystem, and IndexedDB. It is a database that is created on the local drive of the computer where the browser is installed. It manages user data such as caches, cookies, bookmarks, and preferences.

An important thing to note here is that in web browsers like Google Chrome, each tab runs in a separate process (multiple instances of the rendering engine).


### Rendering engine

The networking layer will start sending the contents of the requested documents to the rendering engine in chunks of 8KB.

![](rendering-engine.png)

The rendering engine parses the chunks of HTML documents and converts the elements to DOM nodes in a tree called the "**content tree**" or the "**DOM tree**". It also parses external CSS files and style elements. 

HTML parsing is divided into further steps that need to be performed to create the DOM tree. These steps include converting received HTML bytes into tokens, creating nodes using these tokens, and then connecting these nodes to create a DOM Tree. 

![](parsing.png)

While parsing HTML, if the browser encounters any style tag or link tag referencing a stylesheet, it starts fetching (in the case of external CSS), parsing, and converting them into a **CSS Object model** which contains all the information about the page styles.

The CSSOM(**CSS Object Model**) creation process is similar to DOM creation.
- CSS bytes are converted into characters.
- Characters are converted into tokens.
- After that, the nodes are created.
- Finally, link the nodes to get CSSOM.

While the DOM tree is being constructed, the browser constructs another tree, the **render tree**. Render tree is the visual representation of the document. Its purpose is to enable the painting of the contents in their correct order. Firefox calls the elements in the render tree "frames." WebKit uses the term “renderer” or “render object.”

After the construction of the render tree, it goes through a “**layout process**”. The renderer does not have a position and size when it is created and added to the tree. The process of calculating these values is called layout or reflow. Each node is given the exact coordinates it should appear on the screen. The position of the root renderer is 0,0. All renderers have a "layout" or "reflow" method. Each renderer invokes the layout method of its children that need a layout.

**Painting** is the next stage. In the painting stage, the render tree is traversed and the renderer’s "paint()" method is called to display content on the screen. The painting uses the UI backend layer.

The rendering engine always tries to display the contents on the screen as soon as possible for a better user experience. It does not wait for the HTML parsing to be completed before starting to build and layout the render tree. It parses and displays the content it has received from the network, while the rest of the content still keeps coming from the network. The order in which component files are parsed

When browsers send requests to servers for HTML files, those HTML files often contain elements referencing external CSS and any element.

- As the browser parses HTML file, it sends requests back to the server for any CSS file found in elements, JavaScript file from <script> elements. Then, it parses the CSS and JavaScript.
- The browser generates an in-memory DOM tree from the parsed HTML, CSSOM structure from the parsed CSS, and compiles and executes the parsed JavaScript.
- As the browser builds the DOM tree, applies the styles from the CSSOM tree and executes the JavaScript, a visual representation of the page is painted on the screen, and the user sees the page content and can begin to interact with it.
