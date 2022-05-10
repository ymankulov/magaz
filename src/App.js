import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Products from "./components/Products";
import Basket from "./components/Basket";
import Wishlist from "./components/Wishlist";

function App() {
    return (
        <div className="md:container">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>


        </div>
    );
}

export default App;
