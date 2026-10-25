import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../Services/api";


function UpdateMedicine(){


    const { id } = useParams();

    const navigate = useNavigate();



    const [medicine, setMedicine] = useState({

        name:"",
        price:"",
        quantity:""

    });



    const getMedicine = useCallback(async()=>{


        try{


            const response = await API.get(
                `/medicine/get/${id}`
            );


            setMedicine(response.data);


        }
        catch(error){

            console.log(error);

        }


    },[id]);




    useEffect(()=>{


        getMedicine();


    },[getMedicine]);






    const handleChange = (e)=>{


        setMedicine({

            ...medicine,

            [e.target.name]: e.target.value

        });


    };







    const updateMedicine = async(e)=>{


        e.preventDefault();



        try{


            await API.put(

                "/medicine/update",

                medicine

            );



            alert("Medicine Updated Successfully");



            navigate("/medicines");



        }
        catch(error){


            console.log(error);


            alert("Update Failed");


        }



    };







    return(


        <div>


            <h1>Update Medicine</h1>




            <form onSubmit={updateMedicine}>


                <label>
                    Medicine Name
                </label>

                <br/>


                <input

                    type="text"

                    name="name"

                    value={medicine.name}

                    onChange={handleChange}

                />



                <br/><br/>





                <label>
                    Price
                </label>

                <br/>


                <input

                    type="number"

                    name="price"

                    value={medicine.price}

                    onChange={handleChange}

                />



                <br/><br/>






                <label>
                    Quantity
                </label>

                <br/>


                <input

                    type="number"

                    name="quantity"

                    value={medicine.quantity}

                    onChange={handleChange}

                />



                <br/><br/>






                <button type="submit">

                    Update Medicine

                </button>




            </form>



        </div>


    )


}



export default UpdateMedicine;