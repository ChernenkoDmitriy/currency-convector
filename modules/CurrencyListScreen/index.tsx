import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ratesModel } from '../../src/entities/rates/Rates';
import { useUiContext } from '../../src/UIProvider';
import { CurrencyListItem } from '../components/currencyListItem';
import { Header } from '../components/header';
import { useChoseCurrency } from '../presenter/useChoseCurrency';
import { getStyle } from './styles';

export const CurrencyListScreen: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onChoseCurrency } = useChoseCurrency();

    const renderItem = ({ item }: any) => <CurrencyListItem name={item} onPress={onChoseCurrency} />

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('currency')} />
            <FlatList
                initialNumToRender={20}
                data={ratesModel.ralesList}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
        </SafeAreaView>
    );
});
