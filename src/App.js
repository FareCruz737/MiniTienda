import Manzadas from './img/Apples green.jpg'; 
import banana from './img/banana.jpg'; 
import uva from './img/uvas moradas.jpg'; 
import uvasVerdes from './img/uvas verder.jpg'; 
import mangos from './img/mango.jpg'; 
import pan from './img/pan.jpg'; 
import all from './img/all inklusive.jpg'; 
import natural from './img/Nature valley.jpg'; 
import Natural from './img/Nature valley-2.jpg'; 
import Img from './img/pexels-fauxels-3184418.jpg'; 
import img2 from './img/pexels-jane-doan-1099680.jpg'; 
import persona from './img/001-buyer.png'; 
import cubierto from './img/002-cutlery.png'; 
import carrito from './img/001-shopping-cart.png'; 
import carne from './img/003-meat.png'; 
import vegetales from './img/002-vegetable.png'; 
import postres from './img/001-birthday-cake.png'; 
import casa from './img/004-home.png';

import Comidas from './Componentes/Comida';
import './Componentes/Styles.css'; 
import './App.css';

function App() {
  return (
    <div className="App">

  <header> 
<h1 className='present-mini'>Mini Super</h1>
<div className='peque'>
<a href='/'>
<spam>Compras</spam>
<img src={carrito}/> 
</a>
<a href='/'>
<spam>Cuenta</spam>
<img  src={persona}/>
</a>
<a href='/'>
<span>Promociones</span>
<img  src={cubierto}/>
</a>
</div>
</header>

{/* Header */}

<div className='selec'>

<section className='selec-2'>

<a href="/">
<img src={vegetales}/>
<span>Vegetales</span>
</a>

<a href ="/">
<img src={carne}/>
<span>Carne</span>
</a>

<a href ="/">
<img src={postres}/>
  <span>Postres</span>
</a>
<a href ="/">
<img src={casa}/>
  <span>Hogar</span>
  
</a>
</section>

<div className='selec-3'>

<input placeholder='Busqueda'></input>
</div>
</div>

{/* main */}

<main className='alimetos'>

<h2>Especiales</h2>
<div className='mover'>
<div></div>
</div>

<section className='componentes'>


<Comidas
img={Manzadas}
nombre={"Manzanas verdes"}
Precios={"$100"}
/>



<Comidas
img={uva}
nombre={"Uvas"}
Precios={"$150"}
/>

<Comidas 
img={natural}
nombre={"Chunchy valley"}
Precios={"$220"}
/> 



<Comidas
img={Natural}
nombre={"Chunchy valley"}
Precios={"$250"}

/>


<Comidas
img={mangos}
nombre={"Mangos"}
Precios={"$80"}
/>





<Comidas
img={pan}
nombre={"Pan"}
Precios={"$150"}
/>



<Comidas
img={all}
nombre={"inklusive"}
Precios={"$200"}
/>




<Comidas
img={banana}
nombre={"banana"}
Precios={"$60"}
/>




<Comidas
img={uvasVerdes}
nombre={"Uvas verdes"}
Precios={"$300"}
/>
</section>


<section className= "More-recomendaciones">
<a href='/'>Limpieza</a>
<a href='/'>Decoracion</a>
<a href='/'>Tecnologia</a>
<a href='/'>literatura </a>
</section>

</main>

<section className='informar'> 

<div className='primero'>
<img src={Img}/>
<h2>Mas de nosotros</h2>
<p>Conoce aun mas de nosotros y se incluso parte de nuestra gran familia y equipo.</p>
<button>Saber mas</button>
</div>

<div className='segundo'>
  <img src={img2}/>
<h2>ofertas</h2>
<p>Conoce las mejores oferta de todo el pais he incluso, tenemos lo mas barato y de la mejor calidad.</p>
<button>Saber mas</button>
</div>
</section>


<footer>

<div className='Final-1'>
<a href='/'>Socios</a>
<a href='/'>Asociados</a>
<a href='/'>Equipo</a>
</div>

<div className='final-2'>

 <h3>Redes</h3>

{/* imagenes */}

</div>


</footer>


      
    </div>
  );
}

export default App;
