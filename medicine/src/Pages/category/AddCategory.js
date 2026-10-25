import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../../Services/api";


function AddCategory(){


const navigate = useNavigate();



const [category,setCategory]=useState({

name:"",
description:""

});





const handleChange=(e)=>{


setCategory({

...category,

[e.target.name]:e.target.value

});


};





const saveCategory=async(e)=>{


e.preventDefault();


try{


await API.post(
"/category/save",
category
);



alert("Category Saved Successfully");


navigate("/categories");


}
catch(error){

console.log(error);

}


};







return(

<div>


<h1>
Add Category
</h1>




<form onSubmit={saveCategory}>


<input

name="category"

placeholder="Category Name"

value={category.category}

onChange={handleChange}

/>


<br/><br/>




<textarea

name="description"

placeholder="Description"

value={category.description}

onChange={handleChange}

/>


<br/><br/>




<button type="submit">

Save Category

</button>



</form>



</div>

)


}


export default AddCategory;