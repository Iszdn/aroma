import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
<Route path='/' element={<HomePage/>}/>
<Route path='/add' element={<AddPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
