import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./Prepaid.css";
function Prepaid() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/plans");
        setdata(response.data);
        console.log(response.status,response.statusText);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  },[]);
  return (
    <div className="prepaid-plans">
      {data.map((items) => { return(
        <Card key={items.id} price={items.price} validity={items.validity} special={items.special} data={items.data}/>)
      })}
    </div>
  )
}

export default Prepaid;
