import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js'
import About from '../pages/About.js'
import Contact from '../pages/Contact.js'
import Users from '../pages/Users.js'
import UserCreate from '../pages/UserCreate.js'

function MyRouter()
{
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {/* Route to the 'User' page */}
            <Route path='/UsersList' element={<Users/>} />
            {/* Route to the 'UserCreate' page */}
            <Route path='/UsersList/create' element={<UserCreate/>} />
        </Routes>
    )
}

export default MyRouter