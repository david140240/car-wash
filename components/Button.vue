<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<style scoped>
.btn {
	@apply bg-sky-400 hover:bg-sky-400/80 rounded-[1.5rem] flex justify-center items-center py-[0.7rem] px-[2rem] text-white;
}
</style>
