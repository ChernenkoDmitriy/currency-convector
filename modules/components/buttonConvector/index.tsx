import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { BUTTON_SIZE, styles } from './styles';

interface IProps {
    doubleWidth?: boolean;
    color: string;
    value: string;
    text: string;
    onPress: () => void;
}

export const ButtonsConvector: FC<IProps> = ({ text, doubleWidth, color }) => {

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
