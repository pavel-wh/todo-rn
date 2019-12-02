import React from 'react'
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel }) => {

    return (
        <Modal visible={ visible }>
            <View style={ styles.default }>
                <TextInput 
                    style={ styles.input }
                    placeholder={ 'Введите название задачи' }
                    autoCorrect={ false }
                    autoCapitalize='none'
                    keyboardType='ascii-capable'
                />
                <View style={ styles.buttons }>
                    <Button 
                        title='Отменить'
                        onPress={ onCancel }
                        color={ THEME.DANGER_COLOR }
                    />
                    <Button 
                        title='Сохранить'    
                    />
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