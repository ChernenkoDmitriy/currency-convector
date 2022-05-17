import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { ratesModel } from '../../src/entities/rates/Rates';
import { useUiContext } from '../../src/UIProvider';
import { ButtonsConvectorBlock } from '../components/buttonsConvectorBlock';
import { CurrencyRowMain } from '../components/currencyRowMain';
import { HeaderMain } from '../components/headerMain';
import { useInitCurrency } from '../presenter/useInitCurrency';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

export const ConvectorScreen: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const firstRate = ratesModel.firstRate;
    const secondRate = ratesModel.secondRate;
    
    useInitCurrency();

    const goToCurrencyList = (isFirst?: boolean) => {
        navigation.navigate('CURRENCY_LIST', { isFirst });
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderMain />
            <CurrencyRowMain currency={firstRate} amount={10} onPress={() => goToCurrencyList(true)} />
            <CurrencyRowMain currency={secondRate} amount={1.10} onPress={() => goToCurrencyList(false)} />
            <ButtonsConvectorBlock />
        </SafeAreaView>
    );
});
