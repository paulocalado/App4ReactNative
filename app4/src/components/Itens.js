import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class Itens extends Component <Props> {

	render() {
		return(
			<View>
				<Image style={{ width:100, height: 100 }} source={{uri: this.props.item.foto}}/>
				<Text>{this.props.item.titulo}</Text>
				<Text>{this.props.item.local_anuncio}</Text>
			</View>
			);
	}
}