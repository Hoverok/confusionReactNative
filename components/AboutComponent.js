import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text,  ScrollView , View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

function RenderHistory() {
    return (
        <Card title="Our History">
            <Text style={{ margin: 5 }}>
                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.
                With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.
                Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
            </Text>
            <Text style={{ margin: 5 }}>
                The restaurant traces its humble beginnings to The Frying Pan,
                a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
        </Card>

    );
}

function RenderLeadership(props) {
    const leaders = props.leaders;
    if (leaders != null) {
        const renderLeader = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/alberto.png') }}
                />
            );
        }
        return (
            <Card title = 'Corporate Leadership'>
            <FlatList
                data={leaders}
                renderItem={renderLeader}
                keyExtractor={item => item.id.toString()}
            />
            </Card>
        );
    }
    else
        return (<View></View>)
}


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }

    render() {
        return (
            <ScrollView>
                <RenderHistory />
                <RenderLeadership leaders={this.state.leaders} />
            </ScrollView>
        );
    }
}

export default About 