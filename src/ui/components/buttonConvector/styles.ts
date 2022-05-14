import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { colors } from '../../../theme/colors';

const { width } = Dimensions.get('screen');
export const BUTTON_SIZE = width / 4;

export const styles = StyleSheet.create({
    container: {
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border
    },
    text: {
        color: colors.regularText,
        fontSize: 48,
    },
}); 
