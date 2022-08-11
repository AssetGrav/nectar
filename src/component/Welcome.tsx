import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';

import React from 'react';

export default function Welcome() {
    const handlePress = () => {};
    return (
        <>
            <SafeAreaView>
                <View style={styles.sectionContainer}>
                    <ImageBackground
                        source={require('../image/81401.png')}
                        resizeMode="cover"
                        style={styles.imageBackground}>
                        <View style={styles.block}>
                            <View style={styles.text}>
                                <Image source={require('../image/Group.png')} />
                                <Text style={styles.textTitle}>
                                    Welcome to our store
                                </Text>
                            </View>
                            <Text style={styles.textInfo}>
                                Get your products as fast as one hour
                            </Text>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.95}
                                    style={styles.button}
                                    onPress={handlePress}>
                                    <Text style={styles.textButton}>
                                        Get started
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        height: '100%',
        width: 'auto',
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
    },
    block: {
        marginTop: '80%',
    },
    text: {
        maxWidth: 250,
        alignItems: 'center',
    },
    textTitle: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '600',
        textAlign: 'center',
    },
    textInfo: {
        color: '#fff',
        fontSize: 16,
    },
    button: {
        marginTop: 25,
        width: 267,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#53B175',
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
