import React, { useState, useSelector,useContext } from 'react';
import Authentication from './prac/Routes/authentication/authentication.component';
// import {Route,Routes,Link} from  "react-router-dom"
// import Booklist from './pages/Booklist';
// import Home from './pages/Home';
// import Book from './pages/Book';
// import Notfound from './pages/Notfound';
// import Test from './styledcomps/components/Test'



import {Routes,Route} from 'react-router-dom'
import Shop from './prac/Routes/shop/shop.component';
import Nav from './prac/Components/Nav/Nav.component';

function App() {




 return (
   <>
   {/* <nav>
     <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
       <Link to="/book">Book list</Link>
       </li>
       <li>
       <Link to="/book/1">Book 1</Link>
       </li>
       <li>
       <Link to="/book/2">Book 2</Link>
       </li>
     </ul>
   </nav>
   <Routes>
     <Route path="/" element={<Home/>}></Route>

     <Route path="/book" element={<Booklist/>}></Route>
     <Route path="/book/:id" element={<Book/>}></Route>

     
     <Route path="/book">
       <Route index element={<Booklist/>}></Route>
        <Route path=":id" element={<Book/>}></Route>
     </Route>
     
     
     <Route path="*" element={<Notfound/>}></Route>
     <Route></Route>
   </Routes> */}
   {/* <Test/> */}

   <Routes>
    
      <Route path="/" element={<Nav/>}>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="shop/*" element={<Shop/>}/>
      </Route>
   </Routes>


   
   </>
 )
 
}

export default App;
