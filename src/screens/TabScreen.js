import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import { StyleSheet } from 'react-native';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.headerBackground} hasTabs>
          <Body style={styles.title}>
            <Title style={styles.header}>Header</Title>
          </Body>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab
            tabStyle={{ backgroundColor: "#179ae6" }}
            activeTabStyle={{ backgroundColor: "#179ae6" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#179ae6" }}
            activeTabStyle={{ backgroundColor: "#179ae6" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Sport"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#179ae6" }}
            activeTabStyle={{ backgroundColor: "#179ae6" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: 'white',
    },
    headerBackground: {
        backgroundColor: '#179ae6',
    },
})