import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 60,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
        },
        containerLogo: {
            paddingVertical: 4,
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        logo: {
            width: 40,
            height: 40,
            backgroundColor: 'gray',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textWrapper: {
            flex: 1,
            paddingHorizontal: 10,
        },
        text: {
            color: colors.regularText,
            fontSize: 24,
            lineHeight: 34,
        },
        symbol: {
            color: colors.regularText,
            fontSize: 22,
            lineHeight: 34,
        },
    });
    return styles;
}
