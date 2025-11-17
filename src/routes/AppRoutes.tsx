import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dasboard from '../pages/Dashboard/Dasboard';
import { Users } from '../pages/Users/Users';
import { Layout } from '../components/layout/Layout';
import { Profile } from '../pages/Settings/Profile';
import { SignUp } from '../pages/Authentication/SignUp';

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Dasboard/>} ></Route>
                <Route path='/users' element={<Users/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}
