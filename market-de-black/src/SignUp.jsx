import React from 'react'

const SignUp = () => {
  return (
    <div>
       
        <p>Welcome to Our MarketPlace we are Happy to serve you</p>
        <h1>Sign Up</h1>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
           <button name='Submit' >SignUp</button>

        </form>
    </div>
  )
}

export default SignUp