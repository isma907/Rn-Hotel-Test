import React from 'react';
import { View } from 'react-native';

const CardSectionDesc = (props) => (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingLeft: 16,
        paddingRight: 16
    }
};


export default CardSectionDesc;
