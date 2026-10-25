import React, {useEffect, useState, useCallback} from "react";
import {useParams, useNavigate} from "react-router-dom";
import API from "../../Services/api";


function UpdateOrder(){


const {id} = useParams();

const navigate = useNavigate();



const [order,setOrder] = useState({

    customerName:"",
    mobileNo:"",
    quantity:"",
    totalPrice:"",
    orderDate:"",
    status:""

});





const getOrder = useCallback(async()=>{


    try{


        const response = await API.get(
            `/order/${id}`
        );


        setOrder(response.data);


    }
    catch(error){

        console.log(error);

    }


},[id]);






useEffect(()=>{


    getOrder();


},[getOrder]);








const handleChange=(e)=>{


    setOrder({

        ...order,

        [e.target.name]:e.target.value

    });


};







const updateOrder = async(e)=>{


    e.preventDefault();



    try{


        await API.put(

            "/order/update",

            order

        );



        alert("Order Updated Successfully");


        navigate("/orders");



    }
    catch(error){

        console.log(error);

        alert("Update Failed");

    }


};







return(

<div>


<h1>
Update Order
</h1>




<form onSubmit={updateOrder}>


<input

type="text"

name="customerName"

placeholder="Customer Name"

value={order.customerName || ""}

onChange={handleChange}

/>


<br/><br/>




<input

type="text"

name="mobileNo"

placeholder="Mobile Number"

value={order.mobileNo || ""}

onChange={handleChange}

/>


<br/><br/>




<input

type="number"

name="quantity"

placeholder="Quantity"

value={order.quantity || ""}

onChange={handleChange}

/>


<br/><br/>




<input

type="number"

name="totalPrice"

placeholder="Total Price"

value={order.totalPrice || ""}

onChange={handleChange}

/>


<br/><br/>




<input

type="date"

name="orderDate"

value={order.orderDate || ""}

onChange={handleChange}

/>


<br/><br/>




<select

name="status"

value={order.status || ""}

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

Update Order

</button>



</form>


</div>

)


}


export default UpdateOrder;