import React, { useState , useEffect} from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [users, setusers] = useState([]);
const [text,settext] = useState("");
const [suggetions,setsuggetions] =useState([]);
  useEffect(() => {
   const loadUsers = async() =>{
     const response = await axios.get("https://reqres.in/api/users");
     setusers(response.data.data);
     
   }
   loadUsers();
  }, []);
  const onChange = (text) => {
    let matches=[];
    if(text.length > 0) {
      matches = users.filter(user =>{
        const regrex = new RegExp(`${text}`,"gi");
        return user.email.match(regrex);
      })
    }
console.log(matches);
    setsuggetions(matches);
     settext(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => onChange(e.target.value)} value ={text}/>
      {suggetions && suggetions.map((suggetion,i)=>
      <div key ={i}>{suggetion.email}</div>
      )}
    </div>
  );
}

export default App
