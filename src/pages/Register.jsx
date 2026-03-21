import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [message, setMessage] = useState("")

  const onSubmit = async (data) => {
    try {
      console.log("Register data:", data)
      setMessage("")
      // API call will go here
    } catch (error) {
      setMessage("Error during registration")
    }
  }

  return (
    
 <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>SIGN UP</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Enter your username'
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className='text-red-500 text-xs italic'>{errors.username.message}</p>}
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Enter your password'
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
          </div>

          {
            message && <p className='text-red-500 text-xs italic mb-4'>{message}</p>
          }

          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className='align-baseline font-medium mt-4 text-sm'>Already have an account? <a href='/login' className='text-blue-500 hover:text-blue-700'>Login</a></p>

        {/* google sign in button */}
        <div className='mt-4'>
          <button type='button' className='w-full flex flex-wrap gap-1 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
           <FaGoogle className='mr-2'/>
           Sign up with Google
          </button>
        </div>

        <p className='text-center text-gray-500 text-xs mt-4'>&copy;2024 Your Company. All rights reserved.</p>
      </div>
    </div>

  )
}

export default Register