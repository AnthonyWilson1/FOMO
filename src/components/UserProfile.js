import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class UserProfile extends Component {

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                    <Input
                            label='State'
                            placeholder='California'
                        />
                        <Input
                            label='City'
                            placeholder='San Diego'
                        />
                        <Input
                            label='Hobbies'
                            placeholder='Basketball, Music, Food.....etc'
                        />
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default UserProfile;
