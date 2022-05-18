import React, { useState }from 'react'

const Basicform = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [data, setData] = useState([])
  const handlechange = (e) => {
      e.preventDefault();
      if (Email && Pass) {
        const newEntry = { id: new Date().getTime().toString(), Email, Pass };
        setData([...data, newEntry]);
        console.log(newEntry);
      }else{
        alert('Please enter data');
      }
      }
    
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            id="password"
            value={Pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
       <button type="submit" onClick={handlechange}>submit</button>
      </form>
      {
        data.map((e)=>{
          return (
            <div key={e.id}>
              <h1>
                {e.id}
                {e.Email}
                {e.Pass}
              </h1>
            </div>
          );
        })
      }
    </div>
  );
}
export default Basicform;