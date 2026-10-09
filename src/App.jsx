import { useEffect,useState } from "react";
import Doctorcard from "./component/Doctorcard";
import Navbar from "./component/Navbar";
import AddDoctor from "./pages/AddDoctor";

function App() {
  let[data,setData]=useState([]);
  let [search,setSearch]=useState("");
  useEffect(()=>{
    let res=fetch("https://api-bdti.onrender.com/doctors")
             .then((resp)=>resp.json())
             .then((result)=>{setData(result)})
             .catch(error=>console.log(error))
        console.log(res);
  },[])

  let filterDoctor=data.filter((d)=>{
    let dataFilter=d.name.toLowerCase().includes(search.toLowerCase())
    return dataFilter
  })
  return (
    <>
      <Navbar />
      {/* <Doctorcard name="sadhika" salary={80000} gender="female" age={22} specialization="Dermatologist"/>
    <hr></hr>
    <Doctorcard name="laya" salary={70000} gender="female" age={22} specialization="cardiologist"/>
    <hr></hr>
    <Doctorcard name="Mahesh" salary={90000} gender="male" age={22} specialization="neurologist"/>
    <hr></hr>
    <Doctorcard name="Rohan" salary={77000} gender="male" age={22} specialization="ENT"/> */}

      {/* <AddDoctor /> */}
    
      <label >Search for doctors :</label>
      <input type="text" onChange={(e)=>{setSearch(e.target.value)}}value={search}/>

      {
        filterDoctor.length>0?
        filterDoctor.map((d)=>(
          <Doctorcard key={d.id} name={d.name} gender={d.gender} age={d.age} salary={d.salary}specialization={d.specialization}/>
         )):<h1>No doctors found</h1>
        }
    </>
  )
}

export default App;