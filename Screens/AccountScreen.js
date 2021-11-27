import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements';

export default function AboutScreen() {
    return (
        <View>
            <Header
              placement="center"
              centerComponent={{ text: 'Cuenta', style: styles.heading }}
            />
            <Text>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    heading: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
  
