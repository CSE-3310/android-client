import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { AsyncStorage } from "react-native";
import {
  Container,
  Item,
  Input,
  Header,
  Body,
  Content,
  Title,
  Button,
  Text,
  Label,
  H1,
  Card,
  CardItem
} from "native-base";

import { NavigationActions } from 'react-navigation';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: "",
      location: "",
      query: ""
    };

    this.search = this.search.bind(this);
  }

  async search() {
    AsyncStorage.removeItem("usermatch");
    // POST to api
    let form = new FormData();
    form.append("filename", this.state.filename);
    form.append("location", this.state.location);
    form.append("query", this.state.query);

    console.log(form);

    const response = await fetch(
      "https://iresume-server.herokuapp.com/api/match",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: form
      }
    );

    let server_resp = await response.json();
    console.log("Writing to local");
    await AsyncStorage.setItem("usermatch", JSON.stringify(server_resp));

    this.props.navigation.navigate("Settings");

  }

  render() {
    return (
      <Container>
        <Content padder style={styles.form}>

          {/* Resume input */}
          <Item stackedLabel style={styles.formInput}>
            <Label>Resume</Label>
            <Input
              value={this.state.resume}
              onChangeText={text => this.setState({ filename: text })}
            />
          </Item>

          {/* Location input */}
          <Item stackedLabel style={styles.formInput}>
            <Label>Location</Label>
            <Input
              value={this.state.location}
              onChangeText={text => this.setState({ location: text })}
            />
          </Item>

          {/* Search input */}
          <Item stackedLabel style={styles.formInput}>
            <Label>Query</Label>
            <Input
              value={this.state.query}
              onChangeText={text => this.setState({ query: text })}
            />
          </Item>

          {/* Submit (post) */}
          <Button style={styles.submit} block primary onPress={this.search}>
            <Text>Search</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  resultView: {
    paddingTop: 8
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 180
  },
  formInput: {
    marginBottom: 15
  },
  card: {
    marginTop: 10,
    marginBottom: 10
  },
  submit: {
    marginTop: 20,
    margin: "auto",
    textAlign: "center"
  },
  hairline: {
    backgroundColor: '#eeeeee',
    height: 1,
  },
});
