import React, { useState } from 'react'
import './reservation.css'
import { toast,ToastContainer } from "react-toastify";


const Reservation = () => {
    const [data,setData]= useState({
        title:"",
        discription:'',
        people:''
    })
    console.log(data);
    const samplehit=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value})
    }
    const sendData =(e)=>{
        e.preventDefault();
        const { title, discription} = data;
        // debugger;

    fetch(`https://backend-production-e1c2.up.railway.app/api/notes/addnote`, {
     method: "POST",
     headers: {
       "content-type": "application/json",
       "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
     },

     body: JSON.stringify({
      title,
      discription,
     }),
   })
     .then((response) => response.json())
     
     .then((response) => {
      //  console.log(response.sucess) 
       toast.success(response?.sucess)      

       if (!response?.sucess) {
         throw Error(response.error)
       }      
      //  console.log(respo
    })
    .catch((err) => {
      // setError(err.message);
     //  toast.error(err);     

    })

    }
  return (
    <div>
        
        <section className = "banner">
            <h2 style={{fontSize:"60px"}}>Book Your Table Now</h2>
            <div className = "card-container">
                <div className = "card-img">
                    
                </div>

                <div className = "card-content">
                    <h3 style={{fontFamily:"Calligraffitti', cursive"}}>Reservation</h3>
                    <form onSubmit={sendData}>
                        <div className = "form-row">
                            <select name = "days">
                                <option value = "day-select">Select Day</option>
                                <option value = "sunday">Sunday</option>
                                <option value = "monday">Monday</option>
                                <option value = "tuesday">Tuesday</option>
                                <option value = "wednesday">Wednesday</option>
                                <option value = "thursday">Thursday</option>
                                <option value = "friday">Friday</option>
                                <option value = "saturday">Saturday</option>
                            </select>

                            <select name = "hours">
                                <option value = "hour-select">Select Hour</option>
                                <option value = "10">10: 00</option>
                                <option value = "10">12: 00</option>
                                <option value = "10">14: 00</option>
                                <option value = "10">16: 00</option>
                                <option value = "10">18: 00</option>
                                <option value = "10">20: 00</option>
                                <option value = "10">22: 00</option>
                            </select>
                        </div>

                        <div className = "form-row">
                            <input type = "text" value={data.title} onChange={samplehit} name='title'   placeholder="Full Name"/>
                            <input type = "text" value={data.discription} onChange={samplehit} name='discription'  placeholder="Phone Number"/>
                        </div>

                        <div className = "form-row">
                            <input type = "number" value={data.people} onChange={samplehit} name='people' placeholder="How Many Persons?" min = "1"/>
                            <input type = "submit" value = "BOOK TABLE"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Reservation
