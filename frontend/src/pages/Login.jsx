import React from 'react'
import LoginForm from '../components/login/LoginForm'

function Login() {
  return (
    <div>
      <div>
          <img src="./assets/images/facebook.svg" alt="" />
          <p>Facebook helps you connect and share with the people in your life</p>
      </div>
      <div>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login