import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App.js';

//importar las diferentes páginas
import UsuarioRegistrado from './components/UsuarioRegistrado';
import LoguearseModal from './components/LoguearseModal';
import ApuntadoEventoModal from './components/ApuntadoEventoModal';



export default function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={App}></Route>
                <Route path='/UsuarioRegistrado' element={UsuarioRegistrado}></Route>
                <Route path='/LoguearseModal' element={LoguearseModal}></Route>
                <Route path='/ApuntadoEventoModal' element={ApuntadoEventoModal}></Route>
            </Routes>
        </BrowserRouter>
    )
}