<template>
	<div id="app">
		<p class="msg">
			{{ msg }}
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: "hello world",
		};
	},
};
</script>

<style lang="scss">
#app {
	.msg {
		color: red;
	}
}
</style>
