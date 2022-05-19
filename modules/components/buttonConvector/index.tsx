import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { BUTTON_SIZE, getStyle } from './styles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { settingsModel } from '../../../src/entities/settings/Settings';


interface IProps {
    doubleWidth?: boolean;
    color: string;
    value: string;
    text: string;
    onPress: (value: string) => void;
}

export const ButtonsConvector: FC<IProps> = ({ text, doubleWidth, color, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onButtonPress = () => {
        onPress(text);
        settingsModel.vibration && ReactNativeHapticFeedback.trigger('impactLight');
    }

    return (
        <TouchableOpacity
            onPress={onButtonPress}
            style={[
                styles.container,
                {
                    width: doubleWidth ? BUTTON_SIZE * 2 : BUTTON_SIZE,
                    backgroundColor: color,
                }
            ]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};
