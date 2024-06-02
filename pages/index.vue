<template>
	<header>
		<NavBar />
	</header>
	<main>
		<div class="main-block">
			<section class="sect-1">
				<h1 class="header-f">
					Помой Машину
					<br />
					Сдлеай Ей Приятно
				</h1>
				<div class="right-block">
					<p>
						В целом, сервис для записи на автомойку является удобным <br />
						и полезным инструментом для автовладельцев, <br />
						позволяющим сэкономить время и деньги
					</p>
					<Button class="w-[10rem]">Записаться</Button>
				</div>
			</section>
			<section class="sect-2">
				<NuxtImg
					class="relative ml-[5rem] self-start mt-[1rem] z-10"
					src="/img/contacts.svg"
				/>
				<NuxtImg class="w-[30rem] mr-[30rem] z-30" src="/img/human.svg" />
			</section>
			<section class="sect-3">
				<yandex-map
					v-model="map"
					:settings="{
						location: { center: [38.975313, 45.03547], zoom: 9 },
					}"
					width="90%"
					height="500px"
				>
					<yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
					<yandex-map-default-features-layer />
					<yandex-map-marker
						v-for="(marker, index) in markers"
						:key="index"
						:settings="marker"
					>
						<div class="marker" />
					</yandex-map-marker>
				</yandex-map>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import {
	YandexMap,
	YandexMapMarker,
	YandexMapDefaultSchemeLayer,
	YandexMapDefaultFeaturesLayer,
} from 'vue-yandex-maps';
import type { YMapMarkerProps } from '@yandex/ymaps3-types/imperative/YMapMarker';
definePageMeta({
	layout: '/',
});

const map = shallowRef<null | YMap>(null);
const handleClick = (event: MouseEvent) => console.log(event);

const markers: YMapMarkerProps[] = [
	{
		coordinates: [38.980433, 45.047864],
		onClick: handleClick,
	},
	{
		coordinates: [38.982616, 45.044037],
		onClick: handleClick,
	},
	{
		coordinates: [38.979311, 45.039865],
		onClick: handleClick,
	},
];
</script>

<style scoped>
.marker {
	position: relative;
	width: 20px;
	height: 20px;
	background: #ff0000;
	border-radius: 50%;
	border: 2px solid #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	text-align: center;
	color: #fff;
	font-weight: bold;
	line-height: 20px;
}
.header {
	@apply text-[5rem] text-black;
}

.header-f {
	@apply text-[3rem];
}

.main-block {
	@apply w-[100%] h-[707px] flex flex-col gap-[5rem] pt-[5rem] bg-couples-img bg-cover bg-no-repeat;
}

.right-block {
	@apply flex flex-col gap-[1rem];
}

main {
	@apply flex justify-center;
}

.sect-1 {
	@apply flex gap-[5rem] justify-center;
}
.sect-2 {
	@apply grid grid-cols-2 place-items-center relative;
}

.sect-3 {
	@apply bg-gray-400 w-[100%] flex justify-center p-[5rem];
}

.footer {
	@apply relative h-[200px] w-[100%] bg-red-300;
}
</style>
