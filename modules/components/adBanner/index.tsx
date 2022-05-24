import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

export const AdBanner: FC = () => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
        </View>
    );
};

