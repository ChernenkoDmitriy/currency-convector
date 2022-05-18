import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IRate } from '../../../src/entities/rates/IRate';
import { flags } from '../../../src/libraries/currencies/Flags';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    currency: IRate | null;
    amount: number;
    onPress: () => void;
}

export const CurrencyRowMain: FC<IProps> = ({ currency, amount, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const image = flags.getFlagByCurrency(currency?.base_code);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.containerLogo}>
                <Image source={{ uri: image }} style={styles.logo} resizeMode='stretch' />
                <Text>{currency?.base_code}</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.amountText}>{amount}</Text>
            </View>
        </TouchableOpacity>
    );
};
