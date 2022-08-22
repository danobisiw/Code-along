import React from "react";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().length(20).required(),
    lastName: yup.string().length(20).required(),
    middleName: yup.string().length(20),
    dateOfBirth: yup.date().required(),
    gender: yup.string().oneOf(["male", "female"]).required(),
    phoneNumber: yup.string().length(10).required(),
    email: yup.string().email().required(),
});

function Form (){
    const { register, handleSubmit } = useForm({


        mode: "onSubmit",
    resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }; 
    // console.log(watch())
    return ( 
    <div className="h-screen bg-gradient-to-br from-gray-900 to-yellow-900 flex justify-center items-center">
        <div className="max-w-2xl w-full bg-white rounded-2xl p-5">
        <form className="space-y-2" onSubmit ={handleSubmit(onSubmit)}>
            <div>
        <div>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" { ...register("firstName")} />
        </div>
        <div>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" { ...register("lastName")} />
        </div>
        <div>
            <label htmlFor="middleName" className="form-label">Middle Name</label>
            <input type="text" { ...register("middleName")} />
        </div>
            </div>
        <div className="form-input">
            <label htmlFor="male"><h4 className="space-x-2 space-y-6 font-bold text-md">Gender</h4>
                <input type="radio" { ...register("gender")} value="male" id="male" /> Male
            </label>
            <label htmlFor="female">
                <input type="radio" { ...register("gender")} value="female" id="female" /> Female
            </label>
        </div>
        <div className="form-input">
            <label htmlFor="dateOfBirth" className="font-bold text-md">Date Of Birth</label>
            <input type= "date" { ...register("dateOfBirth")} />
        </div>
        <div className="form-input">
            <label htmlFor="phone" className="font-bold text-md">Phone Number</label>
            <input type="tel" 
            { ...register("phoneNumber")}
            placeholder="xxx-xxx-xxxx" />
        </div>
        <div className="form-input">
            <label htmlFor="email" className="font-bold text-md">Email</label>
            <input 
            type="email" 
            { ...register("email")}
            placeholder="johndoe@yesmail.com"
            name="email"
            id="email"
    
            />
        </div>
        <div className="form-input">
            <button type="submit" className="font-bold text-md border">Register</button>
        </div>
    </form>
        </div>
    
    </div>
    );
}

export default Form;