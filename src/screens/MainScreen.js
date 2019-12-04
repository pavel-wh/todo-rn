import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { ToDo } from '../components/ToDo'
import { THEME } from '../theme'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const MainScreen = () => {

    const { addTodo, todos, removeTodo } = useContext(TodoContext)

    const { changeScreen } = useContext(ScreenContext)

    const [deviceWidth, setDeviceWidth] = useState(
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    )
    
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })


    let content = (
        <View style={ { width: deviceWidth } }>
            <FlatList 
                keyExtractor={ item => item.id.toString() }
                data={ todos }
                renderItem={ ({item}) => (
                    <ToDo todo={ item } onRemove={ removeTodo } onOpen={ changeScreen } />
                )}
            />
        </View>
    )
    
    if (todos.length === 0) {
        content = <View style={ styles.imageWrapper }>
            <Image style={ styles.image } source={ require('../../assets/no-items.png') } />
        </View>
    }

    return (
        <View>
            <AddTodo onSubmit={ addTodo } />
            { content }
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})