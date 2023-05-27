import React from "react";
import { Header } from "./Header/IndexHeader";

import { ProductosLista } from "./Productos/indexProductos";
import 'boxicons';
import ParaCarousel from "./Carousel/IndexCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer/Footer";




function App() {
  return (
    <div className="App">
    
     <Header></Header>
     <ParaCarousel/>
     <ProductosLista>
    
     </ProductosLista>
     <Footer></Footer>
     
     
    </div>
  );
}

export default App;


