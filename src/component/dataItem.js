import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { ListItem, Left, Thumbnail, Body, Text, Right} from 'native-base'
import TimeAgo from './time'

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const {url, title} = this.data
    this.props.onPress({url, title});
  }

  render() {
    return (
      
        <ListItem thumbnail onPress={this.handlePress}>
          <Left>
            <Thumbnail
              square
              source={{
                uri:
                  this.data.urlToImage != null
                    ? this.data.urlToImage
                    : "https://i.redd.it/bovm117j6a351.png",
              }}
            />
          </Left>
          <Body>
            <Text numberOfLines={2}>{this.data.title}</Text>
            <Text note numberOfLines={4}>
              {this.data.description}
            </Text>
            <View style={styles.sourceText}>
              <Text note>{this.data.source.name}</Text>
              <TimeAgo time={this.data.publishedAt} />
            </View>
          </Body>
          {/* <Right>
            <TouchableOpacity transparent>
            <Text>View</Text>
            </TouchableOpacity>
          </Right> */}
        </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  sourceText: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 0,
  },
})
