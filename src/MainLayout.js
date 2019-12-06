import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from './theme'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { ToDoScreen } from './screens/ToDoScreen'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)

    return (
        <View style={ styles.wrapper }>
            <Navbar title='ToDo App' />
            <View style={ styles.container }>
                { todoId ? <ToDoScreen /> : <MainScreen /> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
})