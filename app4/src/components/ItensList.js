import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import Itens from './Itens.js'
import axios from 'axios';

export default class ItensList extends Component<Props> {

	constructor(props) {
		super(props);

		this.state = {itensList: [] };
		this.setState = this.setState.bind(this);
	}


	componentWillMount() {
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			 .then((response) => {this.setState({itensList: response.data}); })
			 .catch(() => {console.log('erro ao recuperar os dados'); });
		//http://faus.com.br/recursos/c/dmairr/api/itens.html
	}

	render() {
		return(
			<ScrollView>	
				{ this.state.itensList.map((item) => {return(<Itens key={item.titulo} item={item} />)} ) }
			</ScrollView>
			
		);
	}


}