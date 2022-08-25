import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const defaultValue = {
    
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      
}

const UsersForm = ({createNewUser, updateInfo, getAllUsers, setUpdateInfo}) => {

    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
        if(updateInfo){
          reset(updateInfo)
        }
      }, [updateInfo])


    const submit = data => {
        if(updateInfo){
          //update
          const URL=`https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
          axios.patch(URL, data)
          .then(res => {
            console.log(res.data)
            getAllUsers()
            reset(defaultValue)
            setUpdateInfo()
          })
          .catch()
        } else {
          //create
          createNewUser(data)
          reset(defaultValue)
        }
      }
     

  return (
    
<form onSubmit={handleSubmit(submit)}>
    <hr />
    <h2>{updateInfo? 'Update User':'Create User'}</h2>
    <div className='first_name'>
    <label htmlFor="first_name">First Name: </label>
    <input {...register('first_name')}type="text" id='first_name'/>
    </div>
    <div className='last_name'>
    <label htmlFor="last_name">Last Name: </label>
    <input {...register('last_name')}type="text" id='last_name'/>
    </div>
    <div className='email'>
    <label htmlFor="email">Email: </label>
    <input {...register('email')}type="email" id='email'/>
    </div>
    <div className='password'>
    <label htmlFor="password">Password: </label>
    <input {...register('password')}type="password" id='password'/>
    </div>
    <div className='birthday'>
    <label htmlFor="birthday">Birthday: </label>
    <input {...register('birthday')}type="date" id='birthday'/>
    </div>
    <button>{updateInfo? 'Update User':'Create User'}</button>
    <hr />
</form>
  )
}

export default UsersForm