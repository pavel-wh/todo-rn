import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
    
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            // Error
            Alert.alert('Название задачи не может быть пустым')
        }
    }

    return (
        <View style={ styles.container }>
            <TextInput 
                style={ styles.input }
                onChangeText={ setValue }
                value={ value }
                placeholder={ 'Введите название задачи' }
                autoCorrect={ false }
                autoCapitalize='none'
                keyboardType='ascii-capable'
            />
            <Button style={ styles.button } title='Добавить' onPress={ pressHandler } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'transparent',
        borderBottomColor: THEME.MAIN_COLOR,
        paddingVertical: 5,
        paddingHorizontal: 5
    }, 
    button: {
        backgroundColor: THEME.MAIN_COLOR,
        borderRadius: 0
    }
})