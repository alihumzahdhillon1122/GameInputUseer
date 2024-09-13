
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../constants/color'









const FirstStartGmaeScreen = ({onPickNumber}) => {




    const [enteredNumber, setenteredNumber] = useState('')


    function numberInputHandler(enteredText) {
        setenteredNumber(enteredText)
    }




    function resetInputHandler(){
        setenteredNumber('');
    }



    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!',
                'number has to be a number between 1 & 99',
                [{ text: 'okay', style: 'destructive', onPress:resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }








    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}

            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onWhenPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onWhenPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default FirstStartGmaeScreen;













const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,   // android only property there is no equilent in ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
});

