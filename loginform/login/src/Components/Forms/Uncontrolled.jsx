import React,{useRef,useState} from 'react'

const Uncontrolled = () => {
    //it like a usestate and it preserve the value
    const luckyName = useRef(null);
    const [show,setshow] = useState(false);
    const submitForm = (e) =>{
e.preventDefault();
const name = luckyName.current.value;
name === " " ? alert("Please enter a name") : setshow(true)
    }
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="luckyName">Enter your luckyName</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br/>
        <button onClick={submitForm}>Submit</button>
      </form>
      <p>{show ? `your lucky name is ${luckyName.current.value}`:""}</p>
    </div>
  );
}

export default Uncontrolled