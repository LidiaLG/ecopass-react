import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterForm from './RegisterForm';
import MisionYVision from './Misionyvision';

export default function Routing(){
    <BrowserRouter>
        <Routes>
            <Route path='/registro' element={RegisterForm}></Route>
            <Route path='/misionyvision' element={MisionYVision}></Route>
        </Routes>
    </BrowserRouter>
}