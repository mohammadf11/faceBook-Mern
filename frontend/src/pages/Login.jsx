import React from 'react'
import LoginForm from '../components/login/LoginForm'

function Login() {
  return (
    <div
      className="flex flex-col  lg:flex-row lg:justify-around justify-center
                  space-y-3 p-8 lg:max-20 2xl:mx-60 xl:mx-32 items-center h-screen bg-gray-200"
    >
      <div className="flex flex-col justify-center items-center lg:items-start ">
        <img className="w-80 mt-6" src="./assets/images/facebook.svg" alt="" />
        <p className="font-normal w-[22rem] p-1 text-center lg:text-[2rem]
                      lg:mr-12 text-gray-700 text-2xl">
          Facebook helps you connect and share with the people in your life
        </p>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
