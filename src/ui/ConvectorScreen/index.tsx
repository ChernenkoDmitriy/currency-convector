import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { ButtonsConvectorBlock } from '../components/buttonsConvectorBlock';
import { CurrencyRowMain } from '../components/currencyRowMain';
import { HeaderMain } from '../components/headerMain';
import { styles } from './styles';

export const ConvectorScreen: FC = () => {

    return (
        <SafeAreaView style={styles.container}>
            <HeaderMain />
            <CurrencyRowMain name={'USD'} amount={10} symbol={'$'} onPress={() => { console.log('test') }} />
            <CurrencyRowMain name={'EUR'} amount={1.10} symbol={'e'} onPress={() => { console.log('test') }} />
            <ButtonsConvectorBlock />
        </SafeAreaView>
    );
};
