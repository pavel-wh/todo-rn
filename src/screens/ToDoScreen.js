import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const ToDoScreen = () => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = async title => {
        await updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal 
                value={ todo.title }
                visible={ modal } 
                onSave={ saveHandler }
                onCancel={ () => setModal(false) }
                animationType="fade"
                transparent={ false }
            />

            <AppCard style={ styles.card }>
                <AppTextBold style={ styles.title }>{ todo.title }</AppTextBold>
                <AppButton 
                    onPress={ () => setModal(true) }
                >
                    <FontAwesome
                        name='edit'
                        size={ 20 }
                    />
                </AppButton>
            </AppCard>

            <View style={ styles.buttons } >
                <View style={ styles.button } >
                    <AppButton 
                        color={ THEME.GREY_COLOR }
                        onPress={ () => changeScreen(null) } 
                    >
                        <AntDesign name='back' size={ 20 } color={ THEME.WHITE_COLOR } />
                    </AppButton>
                </View>
                <View style={ styles.button } >
                    <AppButton 
                        color={ THEME.DANGER_COLOR }
                        onPress={ () => removeTodo(todo.id) }
                    >
                        <FontAwesome name='remove' size={ 20 } theme={ THEME.WHITE_COLOR } />
                    </AppButton>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 15,
    },  
    button: {
        // width: Dimensions.get('window').width / 3
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20,
        marginBottom: 0
    }
})