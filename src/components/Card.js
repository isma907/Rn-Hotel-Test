import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Card = (props) => (
        <View style={styles.containerStyle}>
            <TouchableHighlight onPress={ () => Actions.Description({ hotel: props.hotel }) } underlayColor={'#CCC'}>
                <View>
                    {props.children}
                </View>
            </TouchableHighlight>
        </View>
    );

const styles = {
    containerStyle: {
        borderRadius: 3,
        borderColor: '#ebebeb',
        elevation: 1,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
        backgroundColor: '#FFF'
    }
};
export default Card;
