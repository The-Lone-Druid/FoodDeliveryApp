import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <View style={styles.HeaderTabs}>
            <HeaderButton btnColor="black" textColor="white" text="Delivery" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton btnColor="white" textColor="black" text="Pickup" activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{backgroundColor: props.activeTab === props.text ? "black" : "white", ...styles.HeaderButton}} onPress={() => props.setActiveTab(props.text)}>
        <Text style={{color: props.activeTab === props.text ? "white" : "black", ...styles.HeaderButtonText}}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    HeaderTabs: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    HeaderButton: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    HeaderButtonText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});