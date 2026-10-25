import React, { useState } from "react";
import API from "../../Services/api";


function AddMedicine(){


const [medicine,setMedicine] = useState({

    name:"",
    price:"",
    quantity:""

});



const handleChange = (e)=>{

    setMedicine({

        ...medicine,

        [e.target.name]: e.target.value

    });

};



const saveMedicine = async(e)=>{

    e.preventDefault();


    try{


        await API.post("/medicine/save", medicine);


        alert("Medicine Added Successfully");


        setMedicine({

            name:"",
            price:"",
            quantity:""

        });


    }
    catch(error){

        console.log(error);

        alert("Error while adding medicine");

    }

};




return(

<div>


<h1>Add Medicine</h1>


<form onSubmit={saveMedicine}>


<input

type="text"

name="name"

placeholder="Medicine Name"

value={medicine.name}

onChange={handleChange}

/>


<br/><br/>


<input

type="number"

name="price"

placeholder="Price"

value={medicine.price}

onChange={handleChange}

/>


<br/><br/>


<input

type="number"

name="quantity"

placeholder="Quantity"

value={medicine.quantity}

onChange={handleChange}

/>


<br/><br/>


<button type="submit">

Save Medicine

</button>



</form>


</div>

)


}


export default AddMedicine;