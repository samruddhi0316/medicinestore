import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import API from "../../Services/api";


function CategoryList(){


const [categories,setCategories] = useState([]);




useEffect(()=>{

    getCategories();

},[]);





const getCategories = async()=>{


try{


const response = await API.get(
"/category/getAll"
);


setCategories(response.data);


}
catch(error){

console.log(error);

}


};






const deleteCategory = async(id)=>{


try{


await API.delete(
`/category/delete/${id}`
);


alert("Category Deleted Successfully");


getCategories();


}
catch(error){

console.log(error);

}


};






return(

<div>


<h1>
Category List
</h1>



<Link to="/add-category">

<button>
+ Add Category
</button>

</Link>




<table>


<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Description</th>

<th>Action</th>

</tr>

</thead>




<tbody>


{

categories.map((category)=>(


<tr key={category.id}>


<td>
{category.id}
</td>


<td>
{category.name}
</td>


<td>
{category.description}
</td>



<td>


<Link 
to={`/update-category/${category.id}`}
>

<button>
Edit
</button>

</Link>




<button
onClick={()=>deleteCategory(category.id)}
>

Delete

</button>



</td>


</tr>


))


}


</tbody>


</table>


</div>

)


}


export default CategoryList;