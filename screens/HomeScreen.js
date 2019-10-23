import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
   StyleSheet,
  View
} from 'react-native';

import { Container, Item, Input, Header, Body, Content, Title, Button, Text, H3, Card, CardItem} from 'native-base';

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
      <H3>Keyword search</H3>
      <Input placeholder='Link resume' />
      <Button block primary>
        <Text>Search</Text>
      </Button>

      <Content style={styles.resultView}>
        <Card>
            <CardItem header>
              <Text>Company</Text>
              <Text note> - Job Title</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Job description snippet...
                  Job description snippet...
                  Job description snippet...

                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text note>Source (indeed, glassdoor, etc)</Text>
            </CardItem>
         </Card>
         

         <Card>
            <CardItem header>
              <Text>Company</Text>
              <Text note> - Job Title</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Job description snippet...
                  Job description snippet...
                  Job description snippet...

                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text note>Source (indeed, glassdoor, etc)</Text>
            </CardItem>
         </Card>

         <Card>
            <CardItem header>
              <Text>Company</Text>
              <Text note> - Job Title</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Job description snippet...
                  Job description snippet...
                  Job description snippet...

                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text note>Source (indeed, glassdoor, etc)</Text>
            </CardItem>
         </Card>

         <Card>
            <CardItem header>
              <Text>Company</Text>
              <Text note> - Job Title</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Job description snippet...
                  Job description snippet...
                  Job description snippet...

                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text note>Source (indeed, glassdoor, etc)</Text>
            </CardItem>
         </Card>
      </Content>

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
  resultView: {
    paddingTop: 8
  },
  form: {
    padding: 15,
  }
});
