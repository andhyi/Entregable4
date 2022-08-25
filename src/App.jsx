import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {
  
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    const URL='https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err=> console.log(err))
  }, [])
  
  const getAllUsers = () =>{
    const URL='https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err=> console.log(err))
  }

  const createNewUser = data => {
    const url='https://users-crud1.herokuapp.com/users/'
    
    axios.post(url, data)
    .then(res => getAllUsers())
    .catch(err=> console.log(err))
    //tambien e puede poner getAllcar como sigue y no en then
    //.finally(() => getAllCars())
    }

  console.log(users)

  return (
    <div className="App">
      <hr />
      <div className='create'>
      <UsersForm 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      getAllUsers={getAllUsers}
      setUpdateInfo={setUpdateInfo}
      />
      </div>
      <h1 className='tilte_users'>Users</h1>
    <div className='contenedor_users'>
      {
        users?.map( users => (
          <UsersList key={users.id} 
          users={users}                            
          setUsers={setUsers} 
          setUpdateInfo={setUpdateInfo}
          getAllUsers={getAllUsers}
          />
        )
        )
      }
    </div>
       
    </div>
  )
}

export default App
