import React from "react";
import AnimatedLottieView from "lottie-react-native";


function Loading() {
    return <AnimatedLottieView source={require('../../assets/loading.json')} autoPlay />;
}

export default Loading;