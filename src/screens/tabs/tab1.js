//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../../service/news';
import DataItem from '../../component/dataItem'
import Modal from '../../component/modal'



// create a component
export default class Tab1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

    render() {
      console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text
          style={{ marginTop: 10, fontSize: 18 }}
          children="Please Wait.."
        />
      </View>
    ) : (
      <SafeAreaView>
        <ScrollView>
          <List
            dataArray={this.state.data}
            renderRow={(item) => {
              return (
                <DataItem onPress={this.handleItemDataOnPress} data={item} />
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

