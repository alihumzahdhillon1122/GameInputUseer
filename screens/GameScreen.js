import { StyleSheet, Text, View, } from 'react-native'
import Title from '../components/Title';







function GameScreen() {



    return (

        <View style={styles.screen}>
           <Title>opponent's Guess</Title>
            {/* GUESS */}
            <View>
                <Text>Hiegher or lower</Text>
                {/* + - */}
                {/* <View>LOG ROUNDS</View> */}
            </View>
        </View>

    );
};



export default GameScreen;












const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },


});