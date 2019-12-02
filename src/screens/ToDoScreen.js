import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/Card'

export const ToDoScreen = ({ goBack, todo, onRemove }) => {
    return (
        <View>
            <AppCard style={ styles.card }>
                <Text style={ styles.title }>{ todo.title }</Text>
                <Button 
                    title='Редактировать'
                    onPress={ onRemove }
                />
            </AppCard>
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
                        color={ THEME.DANGER_COLOR }
                        onPress={ () => onRemove(todo.id) }
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
    card: {
        marginBottom: 10,
        padding: 15,
    },  
    button: {
        width: '40%'
    },
    title: {
        fontSize: 26,
        marginBottom: 10
    }
})