import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    name: string;
    code: number;
    symbol: string;
    onPress: () => void;
}

export const CurrencyListItem: FC<IProps> = ({ name, code, symbol, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.containerLogo}>
                <View style={styles.logo}>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.text}>{name}</Text>
            </View>
            <Text numberOfLines={1} style={styles.symbol}>{code}</Text>
        </TouchableOpacity>
    );
};
