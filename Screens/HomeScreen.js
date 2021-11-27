import React, {useContext} from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { Header, Card, Button } from 'react-native-elements';
import {LibrosContext} from '../Context/LibrosContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    const {catalogo,agregar,agregarCarrito} = useContext(LibrosContext);
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
                        width: '95%',
                        marginBottom: 10
                    }} 
                    key={i}>
                        <Card.Title>{e.titulo}</Card.Title> 
                        <Card.Divider/>
                        <View>
                            <Text>Precio: ${e.precio} pesos</Text>
                            <Text>Idioma: {e.idioma}</Text>
                            <View style={styles.containerIcons}>
                                <Button
                                onPress={
                                    ()=> agregarCarrito(e)
                                }
                                type="clear"
                                icon={
                                  <Icon
                                    name="shopping-cart"
                                    size={25}
                                    color="blue"
                                  />
                                }
                                />
                                <Button
                                onPress={()=> (
                                agregar(e)
                                )}
                                type="clear"
                                icon={
                                  <Icon
                                    name="heart"
                                    size={25}
                                    color={e.color}
                                  />
                                }
                                />
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
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop:5,
        paddingBottom:5,
    },
    containerIcons:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});
  