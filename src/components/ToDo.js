import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { THEME } from '../theme'
import { AppText } from './ui/AppText'

export const ToDo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={ 0.5 }
            onPress={ () => onOpen(todo.id) }
            onLongPress={ onRemove.bind(null, todo.id) }
        >
            <View style={ styles.todo }>
                <AppText style={ styles.title }>{ todo.title }</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: THEME.WHITE_COLOR,
        borderRadius: 5,
        marginBottom: 5
    },
    title: {
        fontFamily: 'MullerExtraBold'
    }
})