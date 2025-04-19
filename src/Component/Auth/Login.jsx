import React, { useState } from "react";

const Login = ({ handleLogin }) => {
    // console.log(handleLogin);

    // usetstaet is called the react variable
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState("")
    // it is created for form submitted
    const submitHandler = (e) => {
        // it is used to remove the form submit default behaviour
        e.preventDefault()

        // when we pass the email and password then run the handle login function
        handleLogin(email, password)
        // console.log("Form Submitted")
        // console.log("Email is", email)
        // console.log("password is", password)


        // Both are using for clear the input box 
        setEmail("")
        setPassword("")

    }

    return (
        <div className="flex mt-5 item-center justify-center">
            <div className="border-2 rounded-xl border-red-600 p-20">

                {/* stop to load form relaod */}
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className="flex flex-col items-center justify-center">

                    <input value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)  // e.target.value is used to get the value of input box 
                        }}
                        required
                        className="outline-none bg-transparent border-2 border-white-600 text-xl py-3 px-5 rounded-full  placeholder:text-gray-400" type="email" placeholder="Enter Your Email" />

                    <input value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)   // e.target.value is used to get the value of input box 
                        }}
                        required className="mt-3 outline-none bg-transparent border-2 border-white-600 text-xl py-3 px-5 rounded-full  placeholder:text-gray-400" type="password" placeholder="Enter Your Password" />
                    <button className="mt-3 text-white outline-none bg-red-600 border-2 text-xl py-2 px-5 rounded-full  placeholder:text-gray-400">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;


