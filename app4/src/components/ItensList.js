import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Itens from './Itens.js'

export default class ItensList extends Component<Props> {

	render() {
		return(
			<View>	
				<Itens></Itens>
				<Itens></Itens>
				<Itens></Itens>
			</View>
			
		);
	}

}