import { observer } from 'mobx-react-lite';
import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { calculatorModel } from '../../../src/entities/calculator/Calculator';
import { IRate } from '../../../src/entities/rates/IRate';
import { flags } from '../../../src/libraries/currencies/Flags';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    currency: IRate | null;
    amount: string;
    onPress: () => void;
}

export const CurrencyRowMain: FC<IProps> = observer(({ currency, amount, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const image = flags.getFlagByCurrency(currency?.base_code);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.containerLogo}>
                <Image source={image} style={styles.logo} resizeMode='stretch' />
                <Text style={styles.symbol}>{currency?.base_code}</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.calculationText}>
                    {!!calculatorModel.operator ? calculatorModel.operand + calculatorModel.operator : ''}
                </Text>
                <Text numberOfLines={1} style={styles.amountText}>{amount}</Text>
            </View>
        </TouchableOpacity>
    );
});
