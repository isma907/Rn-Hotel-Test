import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import HotelDetail from './HotelDetail';

class HotelList extends Component {
    state = { hotels: [
        {
            id: 1,
            name: 'Hilton Hotel',
            description: 'asdasdasdasadsadadssa',
            stars: 4,
            image: 'https://pbs.twimg.com/profile_images/349840467/Hotel_1.jpg',
            price: '1.240',
            location: 'Buenos Aires, Puerto Madero',
            options: [1, 2],
            capacidad: 4,
            camas: 2,
            pension: 0
        },
        {
            id: 2,
            name: 'Sheraton Hotel',
            description: 'asdasdasddsa',
            stars: 5,
            location: 'Cordoba, Argentina',
            image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/269/26950678.jpg',
            price: '2.222',
            options: [1, 2],
            capacidad: 2,
            camas: 1,
            pension: 1
        },
        {
            id: 3,
            name: 'Sheraton Hotel',
            description: 'asdasdasddsa',
            stars: 5,
            location: 'Cordoba, Argentina',
            image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/269/26950678.jpg',
            price: '2.222',
            options: [1, 2],
            capacidad: 3,
            camas: 2,
            pension: 1
        }
    ] };


    renderHotels() {
       return this.state.hotels.map(hotel =>
         <HotelDetail key={hotel.id} hotel={hotel} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderHotels()}
            </ScrollView >
        );
    }
}

export default HotelList;
