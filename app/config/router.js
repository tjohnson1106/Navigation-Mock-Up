import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';

export const Tabs = TabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        }
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },

    },
});