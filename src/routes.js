import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Livro from "./pages/Livro/Livro";
import Erro from './pages/Erro/Erro'
import Tabs from '../src/components/Tabs/Tabs'


const Rotas = () => {
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/livro/:livroId" element={ <Livro/> }/>
                <Route path="/*" element={ <Erro/> }></Route>
                <Route path="/tabs" element={ <Tabs/> }></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas;