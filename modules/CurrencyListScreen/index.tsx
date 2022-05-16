import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ratesModel } from '../../src/entities/rates/Rates';
import { useUiContext } from '../../src/UIProvider';
import { CurrencyListItem } from '../components/currencyListItem';
import { Header } from '../components/header';
import { getStyle } from './styles';

export const CurrencyListScreen: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = ({ item }: any) => <CurrencyListItem
        name={item.name}
        code={item.symbol}
        symbol={item.symbol}
        onPress={() => { }} />

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatList
                data={ratesModel.ralesList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
});
