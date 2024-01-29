import { Routes, Route } from 'react-router-dom';
import Users from '../pages/Users.js'
import UserCreate from '../pages/UserCreate.js'
import UserEdit from '../pages/UserEdit.js'

function MyRouter()
{
    return (
        <Routes>
            {/* Route to the 'User' page */}
            <Route path='/' element={<Users/>} />

            {/* Route to the 'UserCreate' page */}
            <Route path='/UsersList/create' element={<UserCreate/>} />

            {/* Route to the 'UserEdit' page */}
            <Route path='/UsersList/edit/:id' element={<UserEdit/>} />
        </Routes>
    )
}

export default MyRouter