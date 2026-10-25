import React,{useEffect,useState} from "react";
import API from "../../Services/api";


function MedicineList(){


const [medicines,setMedicines]=useState([]);



useEffect(()=>{

getMedicines();

},[]);



const getMedicines=async()=>{


try{


const response =
await API.get("/medicine/getAll");


console.log(response.data);


setMedicines(response.data);


}
catch(error){

console.log(error);

}


};



return(

<div>

<h1>
Medicine List
</h1>


{

medicines.map((m)=>(

<div key={m.id}>

<h3>{m.name}</h3>

<p>
Price : {m.price}
</p>

<p>
Quantity : {m.quantity}
</p>


</div>

))

}


</div>


)


}


export default MedicineList;