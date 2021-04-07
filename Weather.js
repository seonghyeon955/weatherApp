import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const weatherOptions = {
    Thunderstorm : {
        iconName : "weather-lighting",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "OMG DONT GO OUT AND GO INTO YOUR BED "
    },
    Drizzle : {
        iconName : "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Humm Not bad"
    },
    Rain : {
        iconName : "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subtitle: "Bring your umbrealla"
    },
    Snow : {
        iconName : "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "stay warm~~"
    },
    Atomosphere : {
        iconName : "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atomosphere",
        subtitle: "Humm Not bad"
    },
    Clear : {
        iconName : "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "go go go outside"
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Humm Not bad"
    },
    Mist : {
        iconName : "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "Dont go outside"
    },
    Dust : {
        iconName : "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "I LOVE CHINA SO MUCH ^^"
    },
    Haze : {
        iconName : "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Be careful when driving due to fog"
    }
};

export default function Weather({ temp, condition }){
    return (
            <LinearGradient
                colors={ weatherOptions[condition].gradient } style={ styles.container }>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white" 
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer : {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});