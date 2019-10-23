import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<View style={imgLoja.container}>
				<Image resizeMode="contain" style={img.stretch} source={require("./assets/rambo.jpg")} />
			</View>
			<View style={cento.container}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
					<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Casas Texas</Text>
					<Text style={{ fontSize: 15 }}>Armas para que te quero!</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title="Adquirir" onPress={() => Alert.alert("Esta função ainda não foi implementada!")} /></View>
			</View>
			<View style={sobre.container}>
				<View style={{ flex:1, fontSize: 20 }}></View>
				<Text style={{ flex:10, justifyContent: 'center' }} >
					Aqui nas casas texas vendemos as armas mais populares pelo melhor preço. Desde AK's até
					tanques T-90 diretamente da fabrica. TUDO COM MUNIÇÃO INCLUSA!!!.
				</Text>
				<View style={{ flex:1 }}></View>
			</View>
		</View>
	);
}

const img = StyleSheet.create({
	stretch: {
		width: 470,
		height: 470,
		flex: 1
	}
});
const imgLoja = StyleSheet.create({
	container: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const cento = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const sobre = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
	},
});