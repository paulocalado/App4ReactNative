import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Itens from './Itens.js'
import axios from 'axios';

export default class ItensList extends Component<Props> {

	componentWillMount() {
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			 .then((response) => {console.log(response); })
			 .catch(() => {console.log('erro ao recuperar os dados'); });
		//http://faus.com.br/recursos/c/dmairr/api/itens.html
	}

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