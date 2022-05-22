import { useNavigation } from '@react-navigation/native';
import React, { FC, memo, useCallback, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsIcon } from '../../../assets/settingsIcon';
import { UpdateIcon } from '../../../assets/updateIcon';
import { useUiContext } from '../../../src/UIProvider';
import { useChoseCurrency } from '../../presenter/useChoseCurrency';
import { RateUpdateInfo } from '../rateUpdateInfo';
import { getStyle } from './styles';

export const HeaderMain: FC = memo(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<any>();
    const { onRefreshRates, isRateLoading } = useChoseCurrency()

    const onPressSettings = useCallback(() => {
        navigation.navigate('SETTINGS');
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPressSettings}>
                <SettingsIcon color={colors.iconColor} />
            </TouchableOpacity>
            <RateUpdateInfo />
            {
                <TouchableOpacity disabled={isRateLoading} style={styles.button} onPress={onRefreshRates}>
                    {isRateLoading
                        ? <ActivityIndicator size={'small'} color={colors.iconColor} />
                        : <UpdateIcon color={colors.iconColor} />}
                </TouchableOpacity>
            }

        </View >
    );
});
