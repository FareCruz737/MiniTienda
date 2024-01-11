import React from "react";


function Comidas ({nombre,img,Precios}){

return(

<div className="father-food"> 
<img src={img}/>
<h2>{nombre}</h2>
<p>{Precios}</p> 

</div>

)
}

export default Comidas; 
