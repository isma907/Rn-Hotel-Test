import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Stars from './Stars.js';
import Pension from './Pension.js';

const HotelDetail = (props) => {
    const { headerStyle, footCard, imageStyle, titleText, prePrice, price, currency, priceSide, currencyCont } = styles;
    return (
        <Card hotel={props.hotel}>
            <CardSection style={headerStyle}>
                <Image source={{ uri: props.hotel.image }} style={imageStyle} />
            </CardSection>
            <CardSection>
                <View style={footCard}>
                    <Text style={titleText}>{props.hotel.name}</Text>
                    <Stars stars={props.hotel.stars} />
                    <Pension pension={props.hotel.pension} />
                </View>
                <View style={priceSide}>
                    <Text stle={prePrice}>precio por noche</Text>
                    <View style={currencyCont}>
                        <Text style={currency}>ARS</Text>
                        <Text style={price}>{props.hotel.price}</Text>
                    </View>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerStyle: {
        overflow: 'hidden'
    },
    footCard: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageStyle: {
        flex: 1,
        height: 200,
        width: null
    },
    prePrice: {
        fontSize: 7
    },
    currency: {
        fontSize: 20
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    priceSide: {
        paddingRight: 5
    },
    currencyCont: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

};


export default HotelDetail;
