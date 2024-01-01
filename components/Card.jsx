import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card({ image, name, email }) {

    const handleEmailLink = () => {
        Linking.openURL(`mailto:${email}`);
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />

            <Text style={styles.fullName}>{name}</Text>

            <TouchableOpacity onPress={handleEmailLink}>
                <Text style={styles.email}>{email}</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.aboutQuote}>About me:</Text>
                <Text style={styles.userQuote}>User quote User quote User quote User quote User quote User quote</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginHorizontal: 30,
        padding: 30,
        borderRadius: 15,
        marginVertical: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 15,
        marginBottom: 20
    },
    fullName: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 0
    },
    email: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 15
    },
    aboutQuote: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },
    userQuote: {
        fontStyle: "italic",
        fontSize: 12,
    }
});