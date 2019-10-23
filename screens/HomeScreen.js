import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
   StyleSheet,
  View
} from 'react-native';

import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';

export default function HomeScreen() {
  const [value, onChangeText] = React.useState('');

  return (
    <Container>
    <Header>
      <Body>
        <Title>iResume</Title>
      </Body>
    </Header>
    <Content padder style={styles.form}>
      <Input placeholder='Link resume' />
      <Button block primary>
        <Text>Search</Text>
      </Button>
    </Content>
  </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

async function documentPicker() {
  const result = await DocumentPicker.getDocumentAsync({});
  console.log('result', result);
  if (!result.cancelled) {
    this.setState({
      image: result,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: 15,
  }
});
