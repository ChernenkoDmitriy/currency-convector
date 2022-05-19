import React, { FC, memo, useMemo } from 'react';
import { View } from 'react-native';
import { calculatorModel } from '../../../src/entities/calculator/Calculator';
import { useUiContext } from '../../../src/UIProvider';
import { useChoseCurrency } from '../../presenter/useChoseCurrency';
import { ButtonsConvector } from '../buttonConvector';
import { styles } from './styles';

export const ButtonsConvectorBlock: FC = memo(() => {
    const { colors } = useUiContext();
    const { onChoseOppositeCurrency } = useChoseCurrency();

    const onPressNumber = (value: string) => {
        if ( calculatorModel.firstRateRow.length < 14) {
            if (value === '.' && calculatorModel.firstRateRow.includes('.') ||
                calculatorModel.firstRateRow === '0' && calculatorModel.firstRateRow.length === 1 && value === '0') {
                return;
            } else if (calculatorModel.firstRateRow === '0' && calculatorModel.firstRateRow.length === 1 && value !== '.') {
                calculatorModel.firstRateRow = value;
            } else {
                calculatorModel.firstRateRow = calculatorModel.firstRateRow + value;
            }
        }
    }

    const onPressOperator = (value: string) => {
        calculatorModel.operator = value;
    }

    const onPressResult = () => {
        calculatorModel.calculateResult();
    }

    const onPressClear = () => {
        calculatorModel.calculateClear();
    }

    const onPressDelete = () => {
        calculatorModel.calculateDelete();
    }

    const BUTTONS = useMemo(() => [
        { color: colors.buttonEdit, value: 'delete', text: 'C', onPress: onPressClear },
        { color: colors.buttonEdit, value: 'delete', text: '<', onPress: onPressDelete },
        { color: colors.buttonEdit, value: 'delete', text: '||', onPress: onChoseOppositeCurrency },
        { color: colors.buttonOperation, value: 'delete', text: '/', onPress: onPressOperator },
        { color: colors.buttonNumber, value: 'delete', text: '7', onPress: onPressNumber },
        { color: colors.buttonNumber, value: 'delete', text: '8', onPress: onPressNumber },
        { color: colors.buttonNumber, value: 'delete', text: '9', onPress: onPressNumber },
        { color: colors.buttonOperation, value: 'delete', text: '*', onPress: onPressOperator },
        { color: colors.buttonNumber, value: 'delete', text: '4', onPress: onPressNumber },
        { color: colors.buttonNumber, value: 'delete', text: '5', onPress: onPressNumber },
        { color: colors.buttonNumber, value: 'delete', text: '6', onPress: onPressNumber },
        { color: colors.buttonOperation, value: 'delete', text: '-', onPress: onPressOperator },
        { color: colors.buttonNumber, value: 'delete', text: '1', onPress: onPressNumber },
        { color: colors.buttonNumber, value: 'delete', text: '2', onPress: onPressNumber },
        { color: colors.buttonNumber, value: 'delete', text: '3', onPress: onPressNumber },
        { color: colors.buttonOperation, value: 'delete', text: '+', onPress: onPressOperator },
        { color: colors.buttonNumber, value: 'delete', text: '0', doubleWidth: true, onPress: onPressNumber },
        { color: colors.buttonNumber, value: 'delete', text: '.', onPress: onPressNumber },
        { color: colors.buttonOperation, value: 'delete', text: '=', onPress: onPressResult },
    ], [colors]);

    return (
        <View style={styles.container}>
            {BUTTONS.map((item) => <ButtonsConvector key={item.text} {...item} />)}
        </View>
    );
});
