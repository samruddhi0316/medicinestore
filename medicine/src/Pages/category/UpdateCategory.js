import React,{useEffect,useState,useCallback} from "react";
import {useParams,useNavigate} from "react-router-dom";
import API from "../../Services/api";


function UpdateCategory(){


const {id}=useParams();

const navigate=useNavigate();



const [category,setCategory]=useState({

name:"",
description:""

});





const getCategory = useCallback(async()=>{


try{


const response =
await API.get(`/category/get/${id}`);


setCategory(response.data);


}
catch(error){

console.log(error);

}


},[id]);






useEffect(()=>{


getCategory();


},[getCategory]);







const handleChange=(e)=>{


setCategory({

...category,

[e.target.name]:e.target.value

});


};







const updateCategory=async(e)=>{


e.preventDefault();


try{


await API.put(

"/category/update",

category

);



alert("Category Updated Successfully");


navigate("/categories");



}
catch(error){

console.log(error);

}


};







return(

<div>


<h1>
Update Category
</h1>




<form onSubmit={updateCategory}>


<input

name="name"

value={category.name || ""}

onChange={handleChange}

/>


<br/><br/>




<textarea

name="description"

value={category.description || ""}

onChange={handleChange}

/>


<br/><br/>




<button>

Update Category

</button>



</form>



</div>

)


}


export default UpdateCategory;