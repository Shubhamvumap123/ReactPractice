import React, { useState }from 'react'

const Basicform = () => {
  const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
const [data, setData] = useState([])
    const handlechange = (e) => {
      e.preventDefault();
      const newEntry = {id : new Date().getTime().toString(),email: Email, password: Pass };
        setData([...data, newEntry]);
    }
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="Password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={Pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
       <button type="submit" onClick={handlechange}>submit</button>
        <div>{data.email}</div>
      </form>
      {
        data.map((e)=>{
          return (
            <div key={e.id}>
              <h1>
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