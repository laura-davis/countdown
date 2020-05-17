import * as React from 'react';
import EventList from "./EventList";
import EventForm from "./EventForm";
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const MyRoutes = createMaterialTopTabNavigator({
    list: {
        screen: EventList,
        navigationOptions: () => ({
            title: 'Your Events'
        })
    },
    form: {
        screen: EventForm,
        navigationOptions: () => ({
            title: 'Add an Event'
        })
    }
});

export default createAppContainer(MyRoutes);
