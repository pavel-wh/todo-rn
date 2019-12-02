import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { ToDo } from '../components/ToDo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    return (
        <View>
            <AddTodo onSubmit={ addTodo } />
            <FlatList 
                keyExtractor={ item => item.id.toString() }
                data={ todos }
                renderItem={ ({item}) => (
                    <ToDo todo={ item } onRemove={ removeTodo } onOpen={ openTodo } />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})