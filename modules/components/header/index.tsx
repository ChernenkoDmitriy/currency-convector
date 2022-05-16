import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { localization } from '../../../src/localization';
import { colors } from '../../../src/theme/colors';
import { ArrowBackIcon } from '../arrowBack';
import { styles } from './styles';

export const Header: FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                <ArrowBackIcon width={24} height={24} color={colors.border} />
            </TouchableOpacity>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.title}>{localization.currency}</Text>
            </View>
        </View>
    );
};
