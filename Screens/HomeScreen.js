import React, {useContext} from 'react'
import { StyleSheet, Text, View, ScrollView, Button, Alert} from 'react-native'
import { Header, Card } from 'react-native-elements';
import {LibrosContext} from '../Context/LibrosContext';
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
    const {catalogo,agregar} = useContext(LibrosContext);
    return (
        <ScrollView>
            <Header
              placement="center"
              centerComponent={{ text: 'Inicio', style: styles.heading }}
            />
                <View style={styles.container}>
                    
                        {catalogo.map((e,i)=>{
                            return(
                                <Card  
                                containerStyle={{
                                    width: '95%'
                                }} 
                                key={i}>
                                    <Card.Title>{e.titulo}</Card.Title> 
                                    <Card.Divider/>
                                    <View>
                                        <Text>Precio: ${e.precio}</Text>
                                        <Text>Idioma: {e.idioma}</Text>
                                        <View style={styles.containerIcons}>
                                            <Ionicons name="cart" color="blue" size="large"/>
                                            <Ionicons name="heart" color="gray" size="large"/>
                                        </View>
                                    </View>
                                </Card>
                            );
                        })
                        }
                    
                </View> 
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    heading: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerIcons:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});
  