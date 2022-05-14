import React ,{useState}from 'react'

const Basicform = () => {
  const[email,setemail] = useState("");
  const [password,setpassword] = useState("");
  let [allentry, setallentry] = useState([]);
const submitform =(e)=>{
  e.preventDefault();
const newEntry = {email:email ,password:password};
setallentry([...allentry,newEntry]);

}
  return (
    <div>
      <form action="" onSubmit={submitform}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <input type="submit" />
      </form>
      <div>
        {
          allentry.map((curelem)=>{
            return (
              <div >
                <p>{curelem.email}</p>
                <p>{curelem.password}</p>
              </div>
            );

          })
        }
      </div>
    </div>
  );
}

export default Basicform ;