import { useNavigation } from '@react-navigation/native';
import React, { FC, memo, useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SettingsIcon } from '../../../assets/settingsIcon';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

export const HeaderMain: FC = memo(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<any>();

    const onPressSettings = useCallback(() => {
        navigation.navigate('SETTINGS');
    }, []);

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={onPressSettings}>
                <SettingsIcon color={colors.iconColor} />
            </TouchableOpacity>
        </View>
    );
});
