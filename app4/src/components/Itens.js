import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Itens extends Component <Props> {

	itemDetail(item){
		alert('Valor R$'+item.valor);
	}

	render() {
		const {container, textStyle} = styles;
		return(
			<TouchableOpacity style={container} onPress={() => {this.itemDetail(this.props.item)}}>
				<Image style={{ width:100, height: 100, margin:5 }} source={{uri: this.props.item.foto}}/>
				<Text style={textStyle}>{this.props.item.titulo}</Text>
				<Text>{this.props.item.local_anuncio}</Text>
			</TouchableOpacity>
			);
		}
	}

const styles = StyleSheet.create( {

	container: {
		margin:30,
		backgroundColor: '#B64107'
	},
	textStyle: {
		color: '#fff',
		fontWeight: 'bold'
	}
});