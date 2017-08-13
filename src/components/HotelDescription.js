import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import CardDesc from './CardDesc';
import CardSection from './CardSection';
import CardSectionDesc from './CardSectionDesc';
import Stars from './Stars.js';
import Icon from 'react-native-fa-icons';


const HotelDescription = (props) => {
    const { row, headerStyle, subtitle, roomsDesc, iconSide, location, separator, imageStyle, titleText, price, currency } = styles;

    return (
        <ScrollView>
            <Image source={{ uri: props.hotel.image }} style={imageStyle} />
            <CardDesc hotel={props.hotel}>
                <CardSection>
                    <View style={separator}>
                        <Text style={titleText}>{props.hotel.name}</Text>
                        <Stars stars={props.hotel.stars} />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={location}>
                        <Icon name='map-marker' style={{ fontSize: 14, color: '#000', opacity: 0.54 }} />
                        <Text style={{ paddingLeft: 10, fontSize: 14 }}>{props.hotel.location}</Text>
                    </View>
                </CardSection>
            </CardDesc>

            <CardDesc hotel={props.hotel}>
                <CardSectionDesc>
                    <View style={headerStyle}>
                        <Text>Habitaciones</Text>
                        <View style={iconSide}>
                            <Text><Icon style={{ fontSize: 18 }} name="users" /> {props.hotel.capacidad}</Text>
                            <Text><Icon style={{ fontSize: 16 }} name="bed" /> {props.hotel.camas}</Text>
                        </View>
                    </View>
                </CardSectionDesc>
                <CardSectionDesc>
                    <View style={roomsDesc}>
                        <View>
                            <Text style={subtitle}>Habitación Standard</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>2 personas</Text>
                            <Text>1 cama doble</Text>
                        </View>
                        <View>
                            <Text style={subtitle}>Habitación Standard</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>2 personas</Text>
                            <Text>1 cama doble</Text>
                        </View>
                    </View>
                </CardSectionDesc>
                <CardSectionDesc>
                    <View style={row}>
                        <View>
                            <Text>Precio por habitación</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={currency}>ARS</Text>
                            <Text style={price}>{props.hotel.price}</Text>
                        </View>
                    </View>
                </CardSectionDesc>

            </CardDesc>

        </ScrollView>
    );
};


const styles = {
    subtitle: {
        fontSize: 16,
        color: '#335692',
        line: 19
    },
    cardStyle: {
        paddingLeft: 16,
        paddingRight: 16
    },
    headerStyle: {
        flex: 1,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    iconSide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80
    },
    separator: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        alignItems: 'flex-start'
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center'
    },
    row: {
        height: 48,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
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
    roomsDesc: {
        height: 128,
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5
    },

    currency: {
        fontSize: 20
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    currencyCont: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

};

export default HotelDescription;
