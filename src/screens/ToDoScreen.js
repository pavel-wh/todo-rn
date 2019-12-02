import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export const ToDoScreen = ({ goBack, todo, removeTodo }) => {
    return (
        <View>
            <Text>{ todo.title }</Text>
            <View style={ styles.buttons } >
                <View style={ styles.button } >
                    <Button title='Назад' onPress={ goBack } />
                </View>
                <View style={ styles.button } >
                    <Button 
                        title='Удалить'
                        color='firebrick'
                        onPress={ removeTodo }
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    button: {
        width: '40%'
    }
})