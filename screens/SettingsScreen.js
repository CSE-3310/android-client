import React, { Component } from "react";
import { ExpoConfigView } from "@expo/samples";
import { AsyncStorage, WebView, Linking } from "react-native";

import { Platform, StyleSheet, View } from "react-native";
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
  H3,
  Card,
  CardItem,
  Right
} from "native-base";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

    this.cleanHTML = this.cleanHTML.bind(this);
  }

  async componentDidMount() {
    console.log("Component did mount");
    let jobs = await AsyncStorage.getItem("usermatch");
    this.setState({ jobs: JSON.parse(jobs) });
  }

  cleanHTML(str) {
    const regex = /(<([^>]+)>)/gi;
    const result = str.replace(regex, "");

    return result;
  }

  render() {
    return (
      <Container>
        <Content padder style={styles.form}>
          <Content style={styles.resultView}>
            {this.state.jobs.map((item, index) => {
              return (
                <Card style={styles.card} key={index}>
                  <CardItem header>
                    <Text>{item.company}</Text>
                  </CardItem>

                  <CardItem>
                    <Body>
                      <Text style={styles.text}>{item.title}</Text>
                      <Text style={styles.text}>{item.location + "\n"}</Text>

                      <Text style={styles.text} numberOfLines={3}>
                        {this.cleanHTML(item.description)}
                      </Text>

                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text style={styles.link} onPress={() => Linking.openURL(item.url)}>Apply</Text>
                  </CardItem>
                </Card>
              );
            })}
          </Content>
        </Content>
      </Container>
    );
  }
}
SettingsScreen.navigationOptions = {
  title: ""
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
    padding: 10
  },
  card: {
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 12
  },
  link: {
	  fontSize: 12,
	  textAlign: "right"
  },
  inputBox: {
    borderWidth: 1,
    maxHeight: 40
  },
  header: {
    paddingBottom: 30
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  desc: {
    paddingVertical: 30,
    paddingHorizontal: 20
  }
});
