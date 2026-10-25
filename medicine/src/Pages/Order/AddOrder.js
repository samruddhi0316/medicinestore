import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../../Services/api";


function AddOrder(){


const navigate = useNavigate();



const [order,setOrder] = useState({

    customerName:"",
    mobileNo:"",
    quantity:"",
    totalPrice:"",
    orderDate:"",
    status:"Pending"

});





const handleChange=(e)=>{


    setOrder({

        ...order,

        [e.target.name]:e.target.value

    });


};






const saveOrder = async(e)=>{


    e.preventDefault();


    try{


        await API.post(
            "/order/save",
            order
        );


        alert("Order Saved Successfully");


        navigate("/orders");


    }
    catch(error){


        console.log(error);


        alert("Order Save Failed");


    }


};







return(

<div>


<h1>
Add Order
</h1>



<form onSubmit={saveOrder}>


<input

type="text"

name="customerName"

placeholder="Customer Name"

value={order.customerName}

onChange={handleChange}

/>


<br/><br/>



<input

type="text"

name="mobileNo"

placeholder="Mobile Number"

value={order.mobileNo}

onChange={handleChange}

/>


<br/><br/>




<input

type="number"

name="quantity"

placeholder="Quantity"

value={order.quantity}

onChange={handleChange}

/>


<br/><br/>




<input

type="number"

name="totalPrice"

placeholder="Total Price"

value={order.totalPrice}

onChange={handleChange}

/>


<br/><br/>




<input

type="date"

name="orderDate"

value={order.orderDate}

onChange={handleChange}

/>


<br/><br/>



<select

name="status"

value={order.status}

onChange={handleChange}

>


<option value="Pending">
Pending
</option>


<option value="Completed">
Completed
</option>


<option value="Cancelled">
Cancelled
</option>


</select>



<br/><br/>




<button type="submit">

Save Order

</button>



</form>


</div>

)

}


export default AddOrder;