import React, {createContext, useState} from 'react';

export const LibrosContext = createContext();

const LibreriaProvider = (props)=>{
  const [cantidad,setCantidad]= useState(0);
  const [total,setTotal]= useState(0);
  const [carrito,setCarrito]= useState([]);
  const [wishList,setWishList]= useState([]);
  const [catalogo,setCatalogo]= useState([
   {codigo:1,titulo:"Programación", precio:100.50,idioma:'ESP', desactivado:false},
   {codigo:2,titulo:"Aprende Python", precio:80.00, idioma:'ESP',desactivado:false},     
   {codigo:3,titulo:"Precálculo", precio:90.50, idioma:'ESP',desactivado:false},
   {codigo:4,titulo:"Ingenieria De Software", precio:60.50, idioma:'ESP',desactivado:false},
   {codigo:5,titulo:"Ingenieria De Software 2", precio:200.00, idioma:'ESP',desactivado:false}
]); 
  const  agregar=(libro)=>{
      let temporal= catalogo;
      let index= temporal.findIndex((element)=>element.codigo===libro.codigo);
      temporal[index].desactivado=true;
      let temporalOrdenar =[...wishList,libro];
      temporalOrdenar= temporalOrdenar.sort((a,b)=>a.codigo-b.codigo)
      setCatalogo(temporal); 
      setWishList(temporalOrdenar);   
    }
      
  const  eliminar=(libro)=>{
      let temporal= catalogo;    
      let index= temporal.findIndex((element)=>element.codigo===libro.codigo);
      temporal[index].desactivado=false;
      let temporalEliminar= wishList.filter(c=>c.codigo!==libro.codigo)
      setCatalogo(temporal);
      setWishList(temporalEliminar);
    }  

    return(
        <LibrosContext.Provider
            value={{
                catalogo,
                wishList,
                eliminar,
                agregar
            }}>
            {props.children}
        </LibrosContext.Provider>
    );
}

export default LibreriaProvider;