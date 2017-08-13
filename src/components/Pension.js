import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-fa-icons';

const styles = {
    rowBreakfast: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    breakIcon: {
        paddingRight: 10
    }
};
const { rowBreakfast, breakIcon } = styles;


class Pension extends Component {
    renderPension() {
        let pension = '';
        const pensiones = ['Solo habitacion', 'Desayuno'];
        switch (this.props.pension) {
            case 0:
                pension = <View style={rowBreakfast}><Icon style={breakIcon} name="bed" /><Text key={this.props.pension}>{pensiones[this.props.pension]}</Text></View>;
                break;
            case 1:
                pension = <View style={rowBreakfast}><Icon style={breakIcon} name="coffee" /><Text key={this.props.pension}>{pensiones[this.props.pension]}</Text></View>;
                break;
            default:
                pension = <View style={rowBreakfast}><Icon style={breakIcon} name="bed" /><Text key={this.props.pension}>{pensiones[this.props.pension]}</Text></View>;
        }
        return pension;
    }

render() {
    return (
        <View flexDirection='row'>
            {this.renderPension()}
        </View>
    );
}

}
export default Pension;
