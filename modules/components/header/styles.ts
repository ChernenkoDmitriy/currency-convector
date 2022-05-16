import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 70,
            width: '100%',
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            flexDirection: 'row',
        },
        button: {
            height: 70,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textWrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 70,
        },
        title: {
            color: colors.regularText,
            fontSize: 24
        }
    });
    return styles;
}
