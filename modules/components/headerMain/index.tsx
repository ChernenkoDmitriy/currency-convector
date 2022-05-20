import { useNavigation } from '@react-navigation/native';
import React, { FC, memo, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsIcon } from '../../../assets/settingsIcon';
import { UpdateIcon } from '../../../assets/updateIcon';
import { ratesModel } from '../../../src/entities/rates/Rates';
import { useUiContext } from '../../../src/UIProvider';
import { useChoseCurrency } from '../../presenter/useChoseCurrency';
import { RateUpdateInfo } from '../rateUpdateInfo';
import { getStyle } from './styles';

export const HeaderMain: FC = memo(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<any>();
    const { getNewRate } = useChoseCurrency()

    const onPressSettings = useCallback(() => {
        navigation.navigate('SETTINGS');
    }, []);

    const onPressUpdate = useCallback(() => {
        getNewRate(ratesModel.secondRate?.base_code as string)
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPressSettings}>
                <SettingsIcon color={colors.iconColor} />
            </TouchableOpacity>
            <RateUpdateInfo />
            <TouchableOpacity style={styles.button} onPress={onPressUpdate}>
                <UpdateIcon color={colors.iconColor} />
            </TouchableOpacity>
        </View >
    );
});
