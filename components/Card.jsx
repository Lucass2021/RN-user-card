import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card() {

    const handleEmailLink = () => {
        Linking.openURL(`mailto:lucas.allx@hotmail.com`);
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://img.freepik.com/fotos-premium/anime-menino-homem-avatar-ai-arte-generativa_225753-7457.jpg' }}
                style={styles.image}
            />

            <Text style={styles.fullName}>Lucas Dias</Text>

            <TouchableOpacity onPress={handleEmailLink}>
                <Text style={styles.email}>lucas.allx@hotmail.com</Text>
            </TouchableOpacity>
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
        marginBottom: 30
    },
    fullName: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 5
    },
    email: {
        fontSize: 16,
        textAlign: "center",
    }
});


// https://reqres.in/api/users/
// avatar
// full name
// email
// https://api-ninjas.com/api/quotes - Add quotes?