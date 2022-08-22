import React,{useState} from 'react'

function Counter() {
    
    const [state, setState]=useState(0);
    const [data, setData]=useState("");
    const [gender, setGender]=useState("");

    let increase =() =>setState(state+1);
    let decrease=()=>setState(state-1);
    let reset =()=> setState(0)
    let handleChange=(event)=>{setData(event.target.value)}
    let handleGender =(event)=>{setGender(event.target.value)}

return (
    <div>
        <h1>My current state is {state}</h1>
        
       <h1> You have Entered {data}</h1>
        <h1>I am a {gender}</h1>

        <input type="Text" onChange={handleChange}/>
        <select onChange={handleGender}>
            <option value="">select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>

        <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
)
}

export default Counter