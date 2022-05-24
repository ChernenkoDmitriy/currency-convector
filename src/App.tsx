import React, { FC } from 'react';
import Toast from 'react-native-toast-message';
import { toastConfig } from './libraries/toast/toastConfig';
import { AppNavigator } from './navigation';
import { UIProvider } from './UIProvider';



export const App: FC = () => {

    return (
        <UIProvider>
            <AppNavigator />
            <Toast config={toastConfig} />
        </UIProvider>
    );
};
