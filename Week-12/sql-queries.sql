select itemno, description, min(weight) weight, cost
from items
order by weight

select * 
from warehouses
where location = "Pune"

select i.itemno, i.description, i.weight, i.cost
from items i
join ordered_quantity oq
using (itemno)
join orders o
using (ono)
join customer c
using (cno)
where cname = 'Mr. Patil'
group by i.itemno

select w.wid, wname, w.location, w.extra, COUNT(wid) as 'total stores'
from warehouses w
join stores s
using (wid)
group by wid
order by 5 desc
limit 1

select i.itemno, i.description, i.weight, i.cost, COUNT(i.itemno) as "total orders"
from orders o
join ordered_quantity oq
using (ono)
right join items i
using (itemno)
group by itemno
order by 5 asc
limit 1

select c.cno, c.cname, oq.ono, c.addr, c.cu_city, o.odate, i.itemno, i.description, i.weight, i.cost 
from customer c
join orders o
using (cno)
join ordered_quantity oq
using (ono)
join items i
using (itemno)
order by cname