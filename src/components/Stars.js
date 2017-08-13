import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-fa-icons';

class Stars extends Component {
    renderStars() {
        const starsArray = [];
        for (let i = 0; i < this.props.stars; i++) {
            starsArray.push(<View key={i}><Icon name='star' style={{ paddingTop: 5, color: '#fbad12' }} /></View>);
        }
        return starsArray;
    }

    render() {
      return (
            <View flexDirection='row'>
                {this.renderStars()}
            </View>
        );
    }

}
export default Stars;
