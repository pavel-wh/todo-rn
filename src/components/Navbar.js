import React from 'react'
import { View, Text, StyleSheet } from  'react-native'
import { AppTextBold } from './ui/AppTextBold'

export const Navbar = props => {
    return (
        <View style={ styles.navbar }>
            <AppTextBold style={ styles.text }>{ props.title }</AppTextBold>
        </View> 
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'firebrick',
        paddingBottom: 10,
    },
    text: {
        fontSize: 26,
        color: '#f3f3f3',
    }
})