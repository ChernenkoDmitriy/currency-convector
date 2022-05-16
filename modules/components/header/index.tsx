import { useNavigation } from '@react-navigation/native';
import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { ArrowBackIcon } from '../arrowBack';
import { getStyle } from './styles';

export const Header: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                <ArrowBackIcon width={24} height={24} color={colors.border} />
            </TouchableOpacity>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.title}>{t('currency')}</Text>
            </View>
        </View>
    );
};
