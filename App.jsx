import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {

  const handleUserApiRequest = async () => {
    const req = await fetch(`https://reqres.in/api/users/`)
    const json = await req.json()
    return json.data
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Card
        image={"https://img.freepik.com/fotos-premium/anime-menino-homem-avatar-ai-arte-generativa_225753-7457.jpg"}
        name={"Lucas Dias"}
        email={"lucas.allx@hotmail.com"}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
});
