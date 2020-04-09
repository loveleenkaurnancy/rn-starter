import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

	const name="Loveleen Kaur"

	return (
		<View>
			<Text style={styles.textStyle}>Getting started with react native!</Text>
			<Text style={styles.subHeaderStyle}>My Name is {name}</Text>
		</View>

		);

};


const styles = StyleSheet.create({

	textStyle : {

		fontSize : 45

	},

	subHeaderStyle : {

		fontSize : 30

	}

});

export default ComponentScreen;