import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IProps {
    name: string;
    amount: number;
    symbol: string;
    onPress: () => void;
}

export const CurrencyRowMain: FC<IProps> = ({ name, amount, symbol, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.containerLogo}>
                <View style={styles.logo}>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
                <Text>{name}</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.amountText}>{amount}</Text>
            </View>
        </TouchableOpacity>
    );
};
