import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ConvectorScreen } from '../../modules/ConvectorScreen';
import { CurrencyListScreen } from '../../modules/CurrencyListScreen';
import { SettingsScreen } from '../../modules/SettingsScreen';
import { useUiContext } from '../UIProvider';

const Stack = createStackNavigator();

export const AppNavigator: FC = () => {
    const { theme } = useUiContext();

    return (
        <>
            <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false, detachPreviousScreen: false }}>
                    <Stack.Screen name="CONVECTOR" component={ConvectorScreen} />
                    <Stack.Screen name="CURRENCY_LIST" component={CurrencyListScreen} />
                    <Stack.Screen name="SETTINGS" component={SettingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
