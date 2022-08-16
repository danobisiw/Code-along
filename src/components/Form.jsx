import React, {useState} from 'react'

function Form() {
    const [data, setData]=useState({
        firstName:"",
        middleName:"",
        lastName:"",
        dateOfBirth:"",
        phoneNumber:"",
        email:"",
    });
const handleChange=(event)=>{
    let name=event.target.name
    let value=event.target.value

    setData({...data, [name]:value});
};
console.log(data);

return (
<div className='h-screen bg-gradient-to-br from-fuchsia-400 to orange-500 flex justify-center items-center'>
    <div className='max-w-3xl w-full bg-white  border-r-gray-200 rounded-xl p-10'>
<form>
    <div className=' flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-x-2'>
<div>
<label htmlFor="firstName" className='form-label'>First Name</label>
<input type="text" name="firstName" id="firstName" className='form-input'
value={data.firstName}
onChange={handleChange}
/>
</div>
<div>
<label htmlFor="middleName" className='form-label'>Middle Name: </label>
<input type="text" name="middleName" id="middleName" className='form-input'
value={data.middleName}
onChange={handleChange}/>
</div>
<div>
<label htmlFor="lastName" className='form-label'>Last Name</label>
<input type="text" name="lastName" id="firstName" className='form-input'
value={data.lastName}
onChange={handleChange}/>
</div>
    </div>
<div>
<label htmlFor="gender" className='form-label'>Gender</label>
    <label htmlFor="gender">Male: </label>
        <input type="radio" name="gender" value="male" id='male'onChange={handleChange}/>
    <label htmlFor='gender'>Female: </label>
    <input type="radio" name="gender" value="female" id='female'onChange={handleChange}/>
</div>
<div>
    <label htmlFor='dateOfBirth'>Date of Birth: </label>
    <input type="date" name='dateOfBirth' value={data.dateOfBirth}
onChange={handleChange}/>
</div>
<div>
    <label htmlFor='phone'>Phone Number</label>
    <input type="text" name='phoneNumber' placeholder='xxx-xxx-xxxx'value={data.phoneNumber}
onChange={handleChange}/>
</div>
<div>
    <label htmlFor='email'>Email</label>
    <input 
    type="email"
    name='email'
    id='email'
    placeholder='john.doe@email.com'
    value={data.email}
onChange={handleChange}/>
</div>
<div>
    <button type='submit'>Register</button>
</div>
</form>
    </div>

</div>

)
}

export default Form;