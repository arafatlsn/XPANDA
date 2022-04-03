import './App.css';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Homepage/Home'
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard'
import Blogs from './Components/Blogs/Blogs'
import About from './Components/About/About'

function App() {
  return (
    <div>
      
        <Nav></Nav>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>

    </div>
  );
}

export default App;
