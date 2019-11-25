import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import {
  Platform,
   StyleSheet,
  View
} from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text, H3, Card, CardItem} from 'native-base';

var jobArray = [
  {company:'Company1', jobTitle:'Engineer I', location:'Plano, TX', description:'Only accepting recent college graduates with 5+ years of industry experience...', source:'Glassdoor', apply:'www.website.com/applyhere', similarity:9.0},
  
  {company:'Company2', jobTitle:'Engineer II', location:'Arlington, TX', description:'Research and develop innovative new solutions that will help to shape the future direction...', source:'Indeed', apply:'www.website.com/applyhere', similarity:7.0},
  
  {company:'Company3', jobTitle:'Engineer III', location:'Grand Prarie, TX', description:'Work within a scrum team in an agile development environment, with an opportunity to...', source:'Indeed', apply:'www.website.com/applyhere', similarity:6.0},
  
  {company:'Company4', jobTitle:'Engineer IV', location:'Dallas, TX', description:'Work within a scrum team in an agile development environment, with an opportunity to...', source:'Glassdoor', apply:'www.website.com/applyhere', similarity:4.0},
  
  {company:'Company5', jobTitle:'Engineer V', location:'Dallas, TX', description:'Work within a scrum team in an agile development environment, with an opportunity to...', source:'Glassdoor', apply:'www.website.com/applyhere', similarity:4.0},
  
  {company:'Company6', jobTitle:'Engineer VI', location:'Dallas, TX', description:'Work within a scrum team in an agile development environment, with an opportunity to...', source:'Glassdoor', apply:'www.website.com/applyhere', similarity:4.0}
];

export default function SettingsScreen() {
	return (
		<Container>
			<Content padder style={styles.form}>
				<Content style={styles.resultView}>
					{jobArray.map((item, index) => {
						return (
							<Card style={styles.card} key={index}>
								<CardItem header>
									<Text>{item.company}</Text>
									<Text note> - {item.jobTitle}</Text>
								</CardItem>
								<CardItem>
									<Body>
										<Text>
										{item.description}
										</Text>
									</Body>
								</CardItem>
								<CardItem footer>
									<Text note>Source: {item.source}</Text>
								</CardItem>
							</Card>
						)
					})}
					
					{/*<Card style={styles.card}>
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
					*/}
				</Content>
			</Content>
		</Container>
	);
}

SettingsScreen.navigationOptions = {
  title: 'Job Results',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  inputBox: {
    borderWidth: 1,
	maxHeight: 40
  },
  header: {
    paddingBottom: 30
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  desc: {
    paddingVertical: 30,
    paddingHorizontal: 20
  }
});
