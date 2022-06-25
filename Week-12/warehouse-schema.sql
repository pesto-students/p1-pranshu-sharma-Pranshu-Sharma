drop database if exists warehouse;
create database warehouse;
use warehouse;

create table CITIES(
    CITY char(20) primary key,
    STATE char(20)
);

insert into CITIES values('Bengaluru', 'Karnataka');
insert into CITIES values('Bhopal', 'Madhya Pradesh');
insert into CITIES values('Bhubaneswar', 'Odisha');
insert into CITIES values('Hyderabad', 'Andhra Pradesh');
insert into CITIES values('Jaipur', 'Rajasthan');
insert into CITIES values('Pune', 'Maharashtra');

create table WAREHOUSES(
    WID integer primary key,
    WNAME char(30),
    LOCATION char(20),
    EXTRA json,
    foreign key (LOCATION) references cities(CITY)
);

insert into WAREHOUSES values(1, 'ware1', 'Pune', '{"1": "json data 1"}' );
insert into WAREHOUSES values(2, 'ware2', 'Bhubaneswar', '{"2": "json data 2"}' );
insert into WAREHOUSES values(3, 'ware3', 'Jaipur', '{"3": "json data 3"}' );
insert into WAREHOUSES values(4, 'ware4', 'Hyderabad', '{"4": "json data 4"}' );
insert into WAREHOUSES values(5, 'ware5', 'Pune', '{"5": "json data 5"}' );
insert into WAREHOUSES values(6, 'ware6', 'Bhopal', '{"6": "json data 6"}' );

create table STORES(
	STOREID integer primary key,
    STORE_NAME char(20), 
    LOCATION_CITY char(20), 
    WID integer, 
    foreign key(WID) references WAREHOUSES(WID)
);

insert into STORES values(1, 'store1', 'Station Square', 2 );
insert into STORES values(2, 'store2', 'Aravali Bazaar', 3 );
insert into STORES values(3, 'store3', 'Hong Kong Lane', 5 );
insert into STORES values(4, 'store4', 'Fashion Street',  1 );
insert into STORES values(5, 'store5', 'City Walk',  6 );
insert into STORES values(6, 'store6', 'Esplanade One Mall', 2 );

create table CUSTOMER(
	CNO integer primary key, 
    CNAME char(50),
    ADDR varchar(50),
    CU_CITY char(20)
);

insert into CUSTOMER values(1, 'Mahima','81/4', 'Pune');
insert into CUSTOMER values(2, 'Mr. Patil','E-72', 'Jaipur');
insert into CUSTOMER values(3, 'Ruhan','104-F', 'Hyderabad');
insert into CUSTOMER values(4, 'Shreya','50/3', 'Bhubaneswar' );
insert into CUSTOMER values(5, 'Sunny','103', 'Bhopal' );
insert into CUSTOMER values(6, 'Ankush', '2003','Bengaluru');

 create table ORDERS(
	ONO integer primary key,
    ODATE date,
    CNO integer,
    foreign key (CNO) references customer(CNO)
);

insert into ORDERS values(1, '2021-11-29',2);
insert into ORDERS values(2, '2021-08-02', 3);
insert into ORDERS values(3, '2021-12-20', 2);
insert into ORDERS values(4, '2022-05-19', 1);
insert into ORDERS values(5, '2021-12-22', 1);
insert into ORDERS values(6, '2022-03-05',6);

create table ITEMS(
    ITEMNO integer primary key,
    DESCRIPTION text,
    WEIGHT decimal(5,2),
    COST decimal(5,2) 
);

insert into ITEMS values(1, 'Avocado',120.00, 150.00);
insert into ITEMS values(2, 'Shampoo', 300.00,  300.00);
insert into ITEMS values(3, 'Cologne', 30.10,  500.00);
insert into ITEMS values(4, 'Scrunchy', 10.00,  10.00);
insert into ITEMS values(5, 'Potatoes', 200.00,  40.00);
insert into ITEMS values(6, 'Cake', 250.50,  600.00);

create table ORDERED_QUANTITY(
	ITEMNO integer, 
	ONO integer, 
    foreign key (ONO) references ORDERS(ONO),
    foreign key (ITEMNO) references ITEMS(ITEMNO)
);

insert into ORDERED_QUANTITY values (1,2);
insert into ORDERED_QUANTITY values (1,4);
insert into ORDERED_QUANTITY values (1,6);
insert into ORDERED_QUANTITY values (2,3);
insert into ORDERED_QUANTITY values (5,3);
insert into ORDERED_QUANTITY values (2,1);
insert into ORDERED_QUANTITY values (2,6);
insert into ORDERED_QUANTITY values (2,2);

create table QUANTITY(
	STOREID INTEGER, 
	ITEMNO INTEGER,
    foreign key (STOREID) references STORES(STOREID),    
    foreign key (ITEMNO) references ITEMS(ITEMNO)
);

insert into QUANTITY values (1,4);
insert into QUANTITY values (1,6);
insert into QUANTITY values (3,3);
insert into QUANTITY values (4,1);
insert into QUANTITY values (2,6);
insert into QUANTITY values (2,1);