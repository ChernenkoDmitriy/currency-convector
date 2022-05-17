import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useUiContext } from '../../src/UIProvider';
import { ButtonsConvectorBlock } from '../components/buttonsConvectorBlock';
import { CurrencyRowMain } from '../components/currencyRowMain';
import { HeaderMain } from '../components/headerMain';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

export const ConvectorScreen: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

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
});
