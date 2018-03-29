/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ItensList from './src/components/ItensList.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    const teste = 'testando o log';
    console.log(teste);
    return (
      <ItensList>
      </ItensList>
    );
  }
}

const styles = StyleSheet.create({
  
});
