import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/theme';
import Svg, {Path} from 'react-native-svg';

const CustomTabBarButton = props => {
    const { children, accessibilityState, onPress } = props;

    if ( accessibilityState.selected){
        return (
            <View style={styles.btnWrapper} >
                <View style={{ flexDirection: 'row'}}>
                    <View style={styles.svgGapFiller} />
                    <Svg width={71} height={58} viewBox="0 0 75 61">
                        <Path
                          d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                          fill={COLORS.white}
                        />
                    </Svg>
                    <View style={styles.svgGapFiller} />
                </View>
            
            <TouchableOpacity activeOpacity={1} onPress={ onPress } style={styles.activeBtn} >
                <Text>{ children }</Text>
            </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity activeOpacity={1} onPress={ onPress } style={styles.inactiveBtn}>
                <Text>{ children }</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Text>{ children }</Text>
        </View>
    )
}

export default CustomTabBarButton;

const styles = StyleSheet.create({
    activeBtn: {
        flex:1,
        position: 'absolute',
        top: -22,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inactiveBtn: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    svgGapFiller: {
        flex: 1,
        backgroundColor: COLORS.white,
    }
});