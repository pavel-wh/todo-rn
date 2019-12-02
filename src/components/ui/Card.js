import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const AppCard = props => (
    <View style={ { ...styles.default, ...props.style } }>{ props.children }</View>
)

const styles = StyleSheet.create({
    default: {
        padding: 20,
        borderWidth: 2,
        borderColor: THEME.GREY_COLOR,
        backgroundColor: THEME.WHITE_COLOR,
        // iOS Shadow
        shadowColor: THEME.GREY_COLOR,
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        // Android Shadow
        elevation: 8,
    }
})