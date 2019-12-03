import React from 'react'
import { View, StyleSheet, Platform } from  'react-native'
import { AppTextBold } from './ui/AppTextBold'
import { THEME } from '../theme'

export const Navbar = props => {
    return (
        <View style={ { 
            ...styles.navbar, 
            ...Platform.select({
                ios: styles.navBarIOS,
                android: styles.navbarAndroid
            })
        } }>
            <AppTextBold style={ styles.text }>{ props.title }</AppTextBold>
        </View> 
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navBarIOS: {
        backgroundColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 26,
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
    }
})