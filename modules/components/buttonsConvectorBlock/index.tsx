import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { ButtonsConvector } from '../buttonConvector';
import { styles } from './styles';

export const ButtonsConvectorBlock: FC = () => {
    const { colors } = useUiContext();

    const BUTTONS = useMemo(() => [
        { color: colors.buttonEdit, value: 'delete', text: 'C' },
        { color: colors.buttonEdit, value: 'delete', text: '<' },
        { color: colors.buttonEdit, value: 'delete', text: '||' },
        { color: colors.buttonOperation, value: 'delete', text: '/' },
        { color: colors.buttonNumber, value: 'delete', text: '7' },
        { color: colors.buttonNumber, value: 'delete', text: '8' },
        { color: colors.buttonNumber, value: 'delete', text: '9' },
        { color: colors.buttonOperation, value: 'delete', text: '*' },
        { color: colors.buttonNumber, value: 'delete', text: '4' },
        { color: colors.buttonNumber, value: 'delete', text: '5' },
        { color: colors.buttonNumber, value: 'delete', text: '6' },
        { color: colors.buttonOperation, value: 'delete', text: '-' },
        { color: colors.buttonNumber, value: 'delete', text: '1' },
        { color: colors.buttonNumber, value: 'delete', text: '2' },
        { color: colors.buttonNumber, value: 'delete', text: '3' },
        { color: colors.buttonOperation, value: 'delete', text: '+' },
        { color: colors.buttonNumber, value: 'delete', text: '0', doubleWidth: true },
        { color: colors.buttonNumber, value: 'delete', text: ',' },
        { color: colors.buttonOperation, value: 'delete', text: '=' },
    ], [colors]);

    return (
        <View style={styles.container}>
            {BUTTONS.map((item) => <ButtonsConvector onPress={() => { }} key={item.text} {...item} />)}
        </View>
    );
};