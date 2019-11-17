import React, { Component } from "react";
import { Text, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Row,
  Thumbnail
} from "native-base";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon type="Feather" name="camera" style={{ fontSize: 24 }} />
          </Left>
          <Body>
            <Title>InstaCoded</Title>
          </Body>
          <Right>
            <Icon type="Ionicons" name="ios-send" style={{ fontSize: 24 }} />
          </Right>
        </Header>
        <Row style={{ alignItems: "center" }}>
          <Thumbnail
            square
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            }}
          />
          <Text style={{ fontSize: 26 }}>ReactNative</Text>
        </Row>

        <Image
          style={{ width: 400, height: 397 }}
          source={{
            uri:
              "https://secure.meetupstatic.com/photos/event/3/e/e/2/600_467776098.jpeg"
          }}
        />
        <Row>
          <Icon type="EvilIcons" name="heart" style={{ fontSize: 30 }} />
          <Icon type="EvilIcons" name="comment" style={{ fontSize: 30 }} />
          <Icon type="Ionicons" name="ios-send" style={{ fontSize: 28 }} />
        </Row>
      </Container>
    );
  }
}

const styles = {};
