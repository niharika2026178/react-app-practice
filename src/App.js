
import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutsUs';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import DeleteStudent from './Pages/DeleteStudent';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RegisterStudent from './Pages/RegisterStudent';
import UpdateStudent from './Pages/UpdateStudent';
import ViewStudent from './Pages/ViewStudent';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<AboutUs/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/blogs'element={<Blogs/>}/>
    <Route path='/student/register'element={<RegisterStudent/>}/>
    <Route path='/student/update'element={<UpdateStudent/>}/>
    <Route path='/student/delete'element={<DeleteStudent/>}/>
    <Route path='/student/view'element={<ViewStudent/>}/>
    <Route path='/student/view/:id'element={<ViewStudent/>}/>
    <Route path='*' element={<NotFound/>}/>

   </Routes>
   

   <Footer/>
   </BrowserRouter>
  );
}

export default App;
