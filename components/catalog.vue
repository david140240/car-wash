<template>
	<div class="block">
		<main>
			<div class="main-content">
				<input class="search" placeholder="Найти" />
				<div class="list-block">
					<header>Каталог моек</header>
					<Card v-for="card in card_list" :card="card" />
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
const props = defineProps(['card_list']);
</script>

<style scoped>
.block {
	@apply bg-zinc-500 p-[1rem] z-20 absolute text-white rounded-[2rem] mt-[2rem] justify-self-end mr-[9rem];
}

.list-block {
	@apply h-[100%] w-[100%] grid grid-cols-1 gap-[0.7rem];
}

.search {
	@apply w-[100%] rounded-[2rem] p-[0.7rem] bg-zinc-300 mb-[1.7rem];
}
</style>
