import React from 'react';
import { View } from 'react-native';

const CardDesc = (props) => (
        <View style={styles.containerStyle}>
                <View>
                    {props.children}
                </View>
        </View>
    );

const styles = {
    containerStyle: {
        borderRadius: 3,
        borderBottomWidth: 0,
        elevation: 1,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        paddingBottom: 16
    }
};
export default CardDesc;
