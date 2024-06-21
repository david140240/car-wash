<template>
	<div class="popup">
		<section class="name">
			<NuxtImg
				src="/icons/close.svg"
				style="height: 1.5rem; justify-self: end; cursor: pointer"
			/>
			<div class="content">
				<div class="icon-wash">
					<div class="icon"></div>
				</div>
				<!-- {{ popup.name }} -->
				<div>
					<p>{{ popup.name }}</p>
					<p class="adress">{{ popup.street }}</p>
				</div>
			</div>
		</section>
		<section class="items">
			<div class="content-items">
				<ul>
					<li class="items-list">
						<div
							class="item"
							v-for="(item, index) in popup.atributes"
							:key="index"
						>
							<NuxtImg style="height: 1rem" src="/icons/done.svg" />
							<span>
								{{ item }}
							</span>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="work-time">
			<div class="content-time">
				<NuxtImg src="/icons/time.svg" style="height: 3rem" />
				<div class="time-group">
					<span>Рабочие дни: {{ popup.time.work_days }}</span>
					<span>Часы: {{ popup.time.work_hours }}</span>
				</div>
			</div>
		</section>
		<button class="reg-btn">Записаться</button>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps(['popup']);
</script>

<style scoped>
.popup {
	@apply bg-zinc-800 text-white rounded-[1rem] w-max p-[1rem];
}

.content {
	@apply border-b-2 border-zinc-500 p-[2rem] grid grid-cols-2 py-[1rem];
}

.name {
	@apply grid;
}

.icon {
	@apply rounded-[50%] bg-white;
}

.adress {
	@apply text-[0.6rem];
}

.reg-btn {
	@apply bg-zinc-700 rounded-[0.5rem] py-[0.5rem] px-[1rem] w-[100%] hover:bg-zinc-700/50 mt-[1rem];
}

.items-list {
	@apply grid grid-cols-1;
}

.content-time {
	@apply grid grid-cols-1 border-b-2 border-zinc-500 py-[1rem];
}

.content-items {
	@apply border-b-2 border-zinc-500 py-[1rem];
}

.item {
	@apply flex gap-[0.7rem] items-center;
}

.content-time {
	@apply flex gap-[1rem];
}

.time-group {
	@apply grid grid-cols-1;
}
</style>
