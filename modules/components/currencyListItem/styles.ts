import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 70,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        logo: {
            borderColor: colors.borderCurrency,
            borderWidth: 1,
            marginRight: 10,
            width: 36,
            height: 36,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
        },
        textWrapper: {
            flex: 1,
            paddingHorizontal: 10,
        },
        text: {
            color: colors.regularText,
            fontSize: 18,
            lineHeight: 22,
        },
        symbol: {
            color: colors.subText,
            fontSize: 20,
            lineHeight: 24,
        },
    });
    return styles;
}
