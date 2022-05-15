import React, { FC, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { fetchCurrencyList } from '../../services/fetchCurrencyList';
import { CurrencyListItem } from '../components/currencyListItem';
import { Header } from '../components/header';
import { styles } from './styles';

export const CurrencyListScreen: FC = () => {
    const [currencies, setCurrencies] = useState<any[]>([]);

    useEffect(() => {
        fetchCurrencyList()
            .then(data => { data?.data && setCurrencies(data?.data) });
    }, []);

    const renderItem = ({ item }: any) => <CurrencyListItem
        name={item.name}
        code={item.symbol}
        symbol={item.symbol}
        onPress={() => { }} />

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatList
                data={currencies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>
    );
};
