import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './screens/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './screens/View';

function App() {
  return (
<>
<BrowserRouter>
    <Routes>
<Route path='/' exact element={<Register/>}></Route>
<Route path='/v' exact element={<View/>}></Route>
    </Routes>
    
    
    </BrowserRouter>
</>
  );
}

export default App;
