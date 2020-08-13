import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}

class Menu extends Component {
    //renderItem takes array from data and runs every item in the array through a called function
    //keyExtractor supplies index, item from data
    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    imageSrc={{ uri: baseUrl + item.image }}
                />
            );
        }
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default connect(mapStateToProps)(Menu);