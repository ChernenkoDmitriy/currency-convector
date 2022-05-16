import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { fetchCurrencyList } from '../../services/fetchCurrencyList';
import { ButtonsConvectorBlock } from '../components/buttonsConvectorBlock';
import { CurrencyRowMain } from '../components/currencyRowMain';
import { HeaderMain } from '../components/headerMain';
import { styles } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

export const ConvectorScreen: FC<IProps> = ({ navigation }) => {

    const goToCurrencyList = () => {
        navigation.navigate('CURRENCY_LIST');
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderMain />
            <CurrencyRowMain name={'USD'} amount={10} symbol={'$'} onPress={goToCurrencyList} />
            <CurrencyRowMain name={'EUR'} amount={1.10} symbol={'e'} onPress={goToCurrencyList} />
            <ButtonsConvectorBlock />
        </SafeAreaView>
    );
};
