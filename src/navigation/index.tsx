import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ConvectorScreen } from '../ui/ConvectorScreen';
import { CurrencyListScreen } from '../ui/CurrencyListScreen';

const Stack = createStackNavigator();

export const AppNavigator: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="CONVECTOR" component={ConvectorScreen} />
                <Stack.Screen name="CURRENCY_LIST" component={CurrencyListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
