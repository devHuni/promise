import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native'

export default function AboutPage(){
    const aboutImage = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png"
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <SafeAreaView></SafeAreaView>
                <Text style={styles.title}>환영합니다!</Text>

                <View style={styles.contentBox}>
                <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
                    <Text style={styles.contents1}>StudyGram</Text>
                    <Text style={styles.contents2}>하루 4시간씩 꾸준히 공부하기</Text>
                    <Text style={styles.contents3}>항상 긍정적으로 생각하기</Text>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>@ dev_huni</Text></TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F266A',
        flex: 1,
        alignItems: 'center' // study more
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '800',
        paddingTop: 20,
        paddingRight: 40,
        paddingLeft: 40
    },
    contentBox: {
        width: 300, // study more
        height: 550, // study more
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center', // study more
        justifyContent: 'center', // study more
        marginTop: 50
    },
    aboutImage: {
        width: 160,
        height: 160,
        borderRadius: 30
    },
    contents1: {
        fontSize: 22,
        fontWeight: '900',
        padding: 30,
        textAlign: 'center'
    },
    contents2: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10
    },
    contents3: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 20
    },
    button: {
        backgroundColor: '#8c3ac3',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    }
});