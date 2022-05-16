import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { BUTTON_SIZE, getStyle } from './styles';

interface IProps {
    doubleWidth?: boolean;
    color: string;
    value: string;
    text: string;
    onPress: () => void;
}

export const ButtonsConvector: FC<IProps> = ({ text, doubleWidth, color }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={[
            styles.container,
            {
                width: doubleWidth ? BUTTON_SIZE * 2 : BUTTON_SIZE,
                backgroundColor: color,
            }
        ]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
