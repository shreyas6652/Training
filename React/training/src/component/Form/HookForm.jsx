import React, { useState, useEffect } from 'react';
import {useForm} from "react-hook-form"
export default function HookForm(){


    const {register,handleSubmit,formState:{errors}} =useForm();

    const onSubmit = (data) => {
        console.log(data)
}
return(
<div>
    <center>
    <form  onSubmit={handleSubmit(onSubmit)}>
   <input type="text" placeholder="Email" name="email" {...register( "email",{required: "Required",})}></input>
   {errors.email && <p>Please Enter Email ID</p>}{(!errors.email)&& <p></p>}

   <input name="password" type="password" placeholder="Password"  {...register("password", {required: "Required",minLength:8})}></input>
    {errors.password && <p>Invalid Password</p>}{(!errors.password)&& <p></p>}
        <input type="submit" />
    </form>
    </center>
</div>
)
}
