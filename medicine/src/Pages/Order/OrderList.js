import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import API from "../../Services/api";


function OrderList(){


const [orders,setOrders] = useState([]);



useEffect(()=>{

    getOrders();

},[]);




const getOrders = async()=>{


try{


const response = await API.get("/order/all");


console.log(response.data);


setOrders(response.data);


}
catch(error){

console.log(error);

}


};





return(

<div>


<h1>
Order List
</h1>


<Link to="/add-order">

<button>
Add Order
</button>

</Link>



<table>


<thead>

<tr>

<th>ID</th>
<th>Customer Name</th>
<th>Mobile</th>
<th>Quantity</th>
<th>Total Price</th>
<th>Date</th>
<th>Status</th>
<th>Action</th>


</tr>

</thead>




<tbody>


{

orders.map((order)=>(


<tr key={order.id}>


<td>
{order.id}
</td>



<td>
{order.customerName}
</td>


<td>
{order.mobileNo}
</td>


<td>
{order.quantity}
</td>


<td>
₹ {order.totalPrice}
</td>


<td>
{order.orderDate}
</td>


<td>
{order.status}
</td>



<td>


<Link to={`/update-order/${order.id}`}>

<button>
Update
</button>

</Link>



</td>


</tr>


))


}



</tbody>


</table>



</div>


)


}


export default OrderList;