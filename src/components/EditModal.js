import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from '../components/ui/AppButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                'Ошибка!', 
                `Минимальная длина 3 символа. Сейчас ${
                title.trim().length
            } символов.`)
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }

    return (
        <Modal visible={ visible }>
            <View style={ styles.default }>
                <TextInput
                    value={ title }
                    onChangeText={ setTitle } 
                    style={ styles.input }
                    placeholder={ 'Введите название задачи' }
                    autoCorrect={ false }
                    autoCapitalize='none'
                    keyboardType='ascii-capable'
                />
                <View style={ styles.buttons }>
                    <AppButton 
                        onPress={ cancelHandler }
                        color={ THEME.DANGER_COLOR }
                    >Отменить</AppButton>
                    <AppButton
                        onPress={ saveHandler }
                    >Сохранить</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'transparent',
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10,
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})