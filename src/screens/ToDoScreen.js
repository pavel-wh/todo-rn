import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'

export const ToDoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        onSave(todo.id, title)
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
                        onPress={ goBack } 
                    >
                        <AntDesign name='back' size={ 20 } color={ THEME.WHITE_COLOR } />
                    </AppButton>
                </View>
                <View style={ styles.button } >
                    <AppButton 
                        color={ THEME.DANGER_COLOR }
                        onPress={ () => onRemove(todo.id) }
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
        width: '40%'
    },
    title: {
        fontSize: 20,
        marginBottom: 0
    }
})