<template>
	<div class="main">
		<h2>Task2</h2>
		<hr/>
		<messages :messages="messages"></messages>
	</div>
</template>

<script>
import axios from 'axios';

import Messages from '../components/Messages';
import Chat from '../components/Chat';

export default {
  name: 'Task2',
	components: { Chat, Messages },
	data(){
		return {
			url: '',
			messages: []
		}
	},
	methods: {
		// async fetchData(){
		// 	let data = await axios.get(this.url, {});
		// 	this.messages = data;
		// },

		// async sendData(){
		// 	await axios.post(this.url, {
		// 		body: {}
		// 	});
		// }
	}
}
</script>

<style>
.main{
	background-color: blanchedalmond;
}
</style>
