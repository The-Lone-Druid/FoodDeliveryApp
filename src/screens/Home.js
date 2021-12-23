import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <HeaderTabs />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    }
});