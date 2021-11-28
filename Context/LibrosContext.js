import React, {createContext, useState} from 'react';
import { Alert } from 'react-native';

export const LibrosContext = createContext();

const LibreriaProvider = (props)=>{
  const [cantidad,setCantidad]= useState(0);
  const [total,setTotal]= useState(0);
  const [carrito,setCarrito]= useState([]);
  const [wishList,setWishList]= useState([]);
  const [catalogo,setCatalogo]= useState([
   {codigo:1,titulo:"Programación", precio:100.50,idioma:'ESP', color: "blue"},
   {codigo:2,titulo:"Aprende Python", precio:80.00, idioma:'ESP',color: "blue"},     
   {codigo:3,titulo:"Precálculo", precio:90.50, idioma:'ESP',color: "blue"},
   {codigo:4,titulo:"Ingenieria De Software", precio:60.50, idioma:'ESP',color: "blue"},
   {codigo:5,titulo:"Ingenieria De Software 2", precio:200.00, idioma:'ESP',color: "blue"}
]); 

  //Verificar Cantidad
  const cantidadVerificar = () =>{
    if(cantidad>99){
      return '99+';
    }else{
      return cantidad;
    }
  }
  //Agregar y eliminar para la wishList
  const  agregar=(libro)=>{
      let temporal= catalogo;
      let index= temporal.findIndex((element)=>element.codigo===libro.codigo);
      if(temporal[index].color==="blue"){
        temporal[index].color="red"
        let temporalOrdenar =[...wishList,libro];
        temporalOrdenar= temporalOrdenar.sort((a,b)=>a.codigo-b.codigo)
        setCatalogo(temporal); 
        setWishList(temporalOrdenar);
        Alert.alert("Se añadio a tu lista");   
      }
      else{
        temporal[index].color="blue"
        let temporalEliminar= wishList.filter(c=>c.codigo!==libro.codigo)
        setCatalogo(temporal);
        setWishList(temporalEliminar);
        Alert.alert("Se elimino de tu lista");   
      }
    }
  //Funcion para agregar al carrito
  const agregarCarrito = (libro)=>{
    let temporal= catalogo.find((element)=>element.codigo===libro.codigo);;
    let temporalCantidad=cantidad;
    temporalCantidad= temporalCantidad+1;
    setCantidad(temporalCantidad);
    let exist = carrito.find((element)=>element.codigo===libro.codigo);
    if(exist!=undefined){
      temporal.cantidad++;
      temporal.importe=temporal.cantidad * temporal.precio;
      setCarrito([...carrito]);
      setTotal(total+temporal.precio);
      Alert.alert('Se agrego a carrito');
    }else{
      temporal['cantidad']=1;
      temporal['importe']=temporal.cantidad * temporal.precio;
      setCarrito([...carrito,temporal]);
      setTotal(total+temporal.precio); 
      Alert.alert('Se agrego a carrito');
      console.log('carrito',carrito);
    }
  } 
  //Comprar
  const comprar = () =>{
    Alert.alert('Gracias por tu compra');
    eliminarCarrito();
  }   
  //Eliminar compra carrito
  const eliminar=(libro)=>{
    let temporal = carrito.find(element=>element.codigo===libro.codigo);
    let tempObj=carrito.filter(element=>element.codigo!==libro.codigo)
    let temporalCantidad=cantidad;
    temporalCantidad= temporalCantidad-1;
    setCantidad(temporalCantidad);

    if(temporal.cantidad===1){
        if(carrito.length===1){
          setCarrito([]);
        }else{
          setCarrito(tempObj);
        }
    }else{
      temporal.cantidad--;
      temporal.importe=temporal.cantidad * temporal.precio;
      setCarrito([...carrito]);
    }
    setTotal(total-temporal.precio);
  }
  //Eliminar carrito
  const eliminarCarrito=()=>{
    if(carrito.length!==0){
      setCarrito([]);
      setTotal(0);
      setCantidad(0);
    }else{
      Alert.alert('No hay nada que eliminar de carrito');
    }
  }

    return(
        <LibrosContext.Provider
            value={{
                catalogo,
                wishList,
                eliminar,
                eliminarCarrito,
                agregar,
                agregarCarrito,
                carrito,
                total,
                comprar,
                cantidad,
                cantidadVerificar
            }}>
            {props.children}
        </LibrosContext.Provider>
    );
}

export default LibreriaProvider;