import React,{useEffect,useState} from "react";
import API from "../Services/api";


function Dashboard(){


const [medicineCount,setMedicineCount] = useState(0);

const [categoryCount,setCategoryCount] = useState(0);

const [orderCount,setOrderCount] = useState(0);





useEffect(()=>{


    getCounts();


},[]);






const getCounts = async()=>{


try{


// Medicine Count

const medicineResponse =
await API.get("/medicine/getAll");


setMedicineCount(
    medicineResponse.data.length
);





// Category Count

const categoryResponse =
await API.get("/category/getAll");


setCategoryCount(
    categoryResponse.data.length
);





// Order Count

const orderResponse =
await API.get("/order/all");


setOrderCount(
    orderResponse.data.length
);




}
catch(error){

console.log(error);

}


};






return(


<div>


<h1>
Medicine Store Dashboard
</h1>





<div className="dashboard-container">



<div className="card">

<h2>
{medicineCount}
</h2>

<p>
Total Medicines
</p>

</div>





<div className="card">

<h2>
{categoryCount}
</h2>

<p>
Total Categories
</p>

</div>






<div className="card">

<h2>
{orderCount}
</h2>

<p>
Total Orders
</p>

</div>





</div>



</div>


)


}


export default Dashboard;