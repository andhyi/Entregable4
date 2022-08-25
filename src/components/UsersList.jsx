import React from 'react'
import axios from 'axios'

const UsersList = ({users, setUsers, setUpdateInfo, getAllUsers}) => {

    const deleteUserById = id => {
        const URL=`https://users-crud1.herokuapp.com/users/${id}/`
        axios.delete(URL)
        .then(res => getAllUsers())
        .catch(err=> console.log(err)) 
      }

      const getInfoUpdate = () => {
        setUpdateInfo(users)
      }    

  return (
    <article className='card'>
        <ul>
            <li>Nombre:<span></span>{users?.first_name}</li>
            <li>Apellido:<span></span>{users?.last_name}</li>
            <li>Email:<span></span>{users?.email}</li>
            <li>Contraseña:<span></span>{users?.password}</li>
            <li>Fecha de nacimiento:<span></span>{users?.birthday}</li>
        </ul>
        {/* tambien se puede enviar como prop la funcion getAllCars() */}
        <button onClick={() => deleteUserById(users.id)}>Delete is user</button>
        <button onClick={getInfoUpdate}>Update Info</button>
    </article>
  )
}

export default UsersList