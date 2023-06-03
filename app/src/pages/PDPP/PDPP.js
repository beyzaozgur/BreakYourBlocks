import { SafeAreaView, Text, View,ScrollView,Image } from "react-native";
import styles from './PDPP.style';



const PDPP = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
            <View style ={styles.frame}>
            <Text style={styles.h1}>Privacy Policy for Break Your Blocks {"\n\n"}</Text>
            <Text style={styles.text}>
                At Break Your Blocks, we are committed to protecting your privacy and personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our stutter detection mobile application.{"\n\n"}
            </Text>
            <Text style={styles.h2}>Information We Collect{"\n"}</Text>
            <Text style={styles.text}>
                We may collect personal information from you such as your name and email address when you download and use our app. We may also collect information about your device, such as your device type and operating system version.{"\n\n"}
            </Text>
            <Text style={styles.h2}>How We Use Your Information{"\n"}</Text>
            <Text style={styles.text}>
                We use the information we collect from you to operate and improve our app, to respond to your inquiries and requests, and to provide you with updates and information about the app. We may also use your information to communicate with you about new products or services that may be of interest to you.{"\n\n"}
            </Text>
            <Text style={styles.h2}>Information Sharing and Disclosure{"\n"}</Text>
            <Text style={styles.text}>
                We do not share your personal information with third parties except as necessary to operate and improve our app, to comply with legal obligations, or to protect our rights or the rights of others.{"\n\n"}
            </Text>
            <Text style={styles.h2}>Data Security{"\n"}</Text>
            <Text style={styles.text}>
                We take reasonable measures to protect your information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.{"\n\n"}
            </Text>
            <Text style={styles.h2}>Changes to this Policy{"\n"}</Text>
            <Text style={styles.text}>
                We may update this Privacy Policy from time to time. If we make any material changes to the policy, we will notify you by email or by posting a notice in the app.{"\n\n"}
            </Text>
            <Text style={styles.h2}>Contact Us{"\n"}</Text>
            <Text style={styles.text}>
                If you have any questions or concerns about our Privacy Policy, please contact us at stutteringtranscriptor@gmail.com.{"\n\n"}
            </Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PDPP;