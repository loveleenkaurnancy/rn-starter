import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

	const friends = [
		{name : 'Friend 1', age : 20 },
		{name : 'Friend 2', age : 24},
		{name : 'Friend 3', age : 22}
	];

	return (
		<FlatList
			horizontal = {true}
			keyExtractor={friend => friend.name}
			data = {friends}
			renderItem={({item}) => {

				return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
			} 
		}
		/>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		marginVertical :20
	}
})

export default ListScreen;