// import { Counter_Redux } from "./components/Counter_Redux"
// import { myStore } from './redux/index.js';
// import { Counter_Redux_Toolkit } from './components/Counter_Redux_Toolkit';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ProductsList } from './Pages/ProductsList';
import { ProductForm } from './Pages/ProductForm';
import { ViewProduct } from './Pages/ViewProduct';

function App() {


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ProductsList/>}/>
        <Route path='/addProduct' element={<ProductForm/>}/>
        <Route path='/product/:id' element={<ViewProduct/>}/>
      </Routes>

      {/* <Counter_Redux/> */}
      {/* <Counter_Redux_Toolkit /> */}
    </>
  )
}

export default App
