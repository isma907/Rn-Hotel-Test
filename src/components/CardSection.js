import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    }
};


export default CardSection;
