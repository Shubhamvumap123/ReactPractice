import React from "react";
import { useState } from "react";

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm =(k) =>{
    k.preventDefault();
    if(email && Password){
   const newEntry = { id: new Date().getTime.toString(), email, Password };
   setAllEntry([...allEntry, newEntry]);
   console.log(setAllEntry);
   setEmail("");
   setPassword("");
    }else{
      alert("plz fill the data");
    }
     
  }
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        
        {allEntry.map((curElem) =>{
          const { id, email, Password } = curElem;
return (
  <div className="showDataStyles" key ={id}>
    <p>{email}</p>
    <p>{Password}</p>
  </div>
       );
        })}
      </div>
    </>
  );
};

export default Basicform;
