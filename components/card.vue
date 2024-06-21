<template>
	<div class="card">
		<div class="icon"></div>
		<div class="detail">
			<span class="name">{{ card.name }}</span>
			<span class="det">{{ card.street }}</span>
			<span class="det rating">{{ card.rating }}</span>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['card']);
</script>

<style scoped>
.card {
	@apply flex gap-[1rem] cursor-pointer bg-zinc-800 rounded-[0.5rem] p-[1rem] hover:bg-zinc-700 w-[20rem];
}

.icon {
	@apply rounded-[50%] w-[3rem] h-[3rem] bg-zinc-400;
}

.detail {
	@apply grid grid-cols-1;
}

.det {
	@apply text-[0.7rem];
}

.rating {
	@apply text-[yellow];
}
</style>
