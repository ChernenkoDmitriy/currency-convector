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
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        button: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}
