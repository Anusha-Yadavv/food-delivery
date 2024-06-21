import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = () => {
  const URL = "http://localhost:8000";

  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${URL}/api/food/list`);
    console.log("RESPONSE DATA",response.data.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood=async (foodId)=>{
    const response=await axios.post(`${URL}/api/food/remove`,{id:foodId});
    await fetchList();
    console.log("REMOVE RESPONSE",response.data.success)
    if(response.data.success){
      console.log("MESSAGE",response.data.message)
      toast.success(response.data.message);
      alert(response.data.message)
    }else{
      toast.error("Error")
    }

    

  }
  useEffect(() => {
    fetchList();
  }, []);
  
  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        

        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
              <img src={`${URL}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className="cursor">X</p>


            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
