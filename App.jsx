import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import { useEffect, useState } from 'react';

export default function App() {
  const [userData, setUserData] = useState([])
  const [fullName, setFullName] = useState('')

  const handleUserApiRequest = async () => {
    const req = await fetch(`https://reqres.in/api/users/`)
    const json = await req.json()
    setUserData(json.data)
  }

  useEffect(() => {
    handleUserApiRequest();
  }, []);

  // const data = [
  //   { id: '1', image: 'https://img.freepik.com/fotos-premium/anime-menino-homem-avatar-ai-arte-generativa_225753-7457.jpg', name: 'Nome 1', email: 'email1@example.com' },
  // ];

  // https://api-ninjas.com/api/quotes - Add quotes?

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <FlatList
        data={userData}
        renderItem={({ item }) => {
          return (
            <View>
              <Card
                image={item.avatar}
                name={`${item.first_name} ${item.last_name}`}
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
