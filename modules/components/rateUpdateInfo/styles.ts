import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 60,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        rowWrapper: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        timeText: {
            fontSize: 14,
            fontWeight: '400',
            marginHorizontal: 2,
            color: colors.accentText
        },
        rateText: {
            fontSize: 16,
            fontWeight: '400',
            marginHorizontal: 2,
            color: colors.regularText
        }
    });
    return styles;
}
