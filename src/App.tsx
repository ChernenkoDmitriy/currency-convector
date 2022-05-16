import React, { FC } from 'react';
import { AppNavigator } from './navigation';
import { UIProvider } from './UIProvider';

export const App: FC = () => {
    return (
        <UIProvider>
            <AppNavigator />
        </UIProvider>
    );
};
