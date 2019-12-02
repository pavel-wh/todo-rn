import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { THEME } from '../theme'

export const ToDoScreen = ({ goBack, todo, removeTodo }) => {
    return (
        <View>
            <Text>{ todo.title }</Text>
            <View style={ styles.buttons } >
                <View style={ styles.button } >
                    <Button 
                        title='Назад'
                        color={ THEME.GREY_COLOR }
                        onPress={ goBack } 
                    />
                </View>
                <View style={ styles.button } >
                    <Button 
                        title='Удалить'
                        color={ THEME.MAIN_COLOR }
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