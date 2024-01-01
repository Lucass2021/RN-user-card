import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {

  const data = [
    { id: '1', image: 'https://img.freepik.com/fotos-premium/anime-menino-homem-avatar-ai-arte-generativa_225753-7457.jpg', name: 'Nome 1', email: 'email1@example.com' },
  ];

  // const handleUserApiRequest = async () => {
  //   const req = await fetch(`https://reqres.in/api/users/`)
  //   const json = await req.json()
  //   return json.data
  // }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <Card
                image={item.image}
                name={item.name}
                email={item.email}
              />
              <Card
                image={item.image}
                name={item.name}
                email={item.email}
              />
              <Card
                image={item.image}
                name={item.name}
                email={item.email}
              />
            </View>
          )
        }}
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
