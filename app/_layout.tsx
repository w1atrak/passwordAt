import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function RootLayout() {
  const [password, setPassword] = useState('');
  const [indices, setIndices] = useState('')
  const [result, setResult] = useState('')

  const parseIndices = (input: string) => {
    setIndices(input);
    setResult(input.split(/[-,.\s]/).map(v => password[Number(v) - 1]).join('  '));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder='Password'
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={parseIndices}
        value={indices}
        placeholder='Index(es)'
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        value={result}
        editable={false}
        placeholder='Result'
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    paddingTop: 300, 
    paddingHorizontal: 30, 
  },
  input: {
    height: 50, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8, 
    width: '80%', 
    paddingHorizontal: 15, 
    marginBottom: 20,
    backgroundColor: '#fff', 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, 
  },
});
