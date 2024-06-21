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
						location: { center: [38.982616, 45.044037], zoom: 15 },
						showScaleInCopyrights: true,
					}"
					width="90%"
					height="700px"
					border-radius="2rem"
				>
					<yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
					<yandex-map-default-features-layer />
					<yandex-map-controls :settings="{ position: 'left' }">
						<yandex-map-zoom-control />
					</yandex-map-controls>
					<yandex-map-default-marker
						v-for="(marker, index) in markers"
						:key="index"
						:settings="{
							title: marker.name,
							subtitle: marker.desc,
							coordinates: marker.coordinates,
							color: 'red',
							popup: { position: 'left' },
						}"
					>
						<template #popup="{ close }">
							<popup @click="close()" :popup="marker"></popup>
						</template>
					</yandex-map-default-marker>
				</yandex-map>

				<Catalog :card_list="markers" />
			</section>
		</div>
	</main>
	<footer>
		<section class="footer">
			<NuxtImg style="height: 2rem; grid-column: 2/4" src="/icons/logo.svg" />
			<div class="btns">
				<button>Правила компании</button>
				<button>Пользовательское соглашение</button>
				<button>Все права защищены</button>
			</div>
		</section>
	</footer>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import {
	YandexMap,
	YandexMapControls,
	YandexMapDefaultFeaturesLayer,
	YandexMapDefaultMarker,
	YandexMapDefaultSchemeLayer,
	YandexMapMarker,
	YandexMapZoomControl,
} from 'vue-yandex-maps';
import type { YMapMarkerProps } from '@yandex/ymaps3-types/imperative/YMapMarker';
import type { LngLat } from '@yandex/ymaps3-types';

definePageMeta({
	layout: '/',
});

const map = shallowRef<null | YMap>(null);
const handleClick = (event: MouseEvent) => console.log(event);
const openMarker = ref<null | number>(null);

const markers: YMapMarkerProps[] = [
	{
		coordinates: [38.980433, 45.047864],
		name: 'Joker',
		street: 'Красная улица, 176к15',
		atributes: ['wi-fi', 'Туалет', 'Бесплатный кофе'],
		time: {
			work_days: 'пн - пт',
			work_hours: '8:00 - 21:00',
		},
		desc: 'Рейтинг: 4,5; Услуги от 1000 Р',
		rating: 4.5,
	},
	{
		coordinates: [38.982616, 45.044037],
		name: 'Автомойка',
		street: 'Путевая улица, 3Б',
		atributes: ['wi-fi', 'Туалет'],
		time: {
			work_days: 'пн - пт',
			work_hours: '9:00 - 22:00',
		},
		desc: 'Рейтинг: 4,6; Услуги от 1500 Р',
		rating: 4.6,
	},
	{
		coordinates: [38.979311, 45.039865],
		name: 'Chistoff',
		street: 'Северная улица, 299',
		atributes: ['wi-fi', 'Туалет', 'Бесплатный кофе', 'Зал ожидания'],
		time: {
			work_days: 'пн - пт',
			work_hours: '24ч',
		},
		desc: 'Рейтинг 4,9; Услуги от 2000 Р',
		rating: 4.9,
	},
	{
		name: 'Boomer',
		street: 'Дальняя ул., 39, корп. 1',
		atributes: ['wi-fi', 'Туалет', 'Бесплатный кофе', 'Зал ожидания'],
		time: {
			work_days: 'пн - пт',
			work_hours: '24ч',
		},
		desc: 'Рейтинг 4,9; Услуги от 2000 Р',
		rating: 4.0,
	},
	{
		name: 'Мойка №1',
		street: 'Восточно-Кругликовская ул., 35',
		atributes: ['wi-fi', 'Туалет', 'Бесплатный кофе', 'Зал ожидания'],
		time: {
			work_days: 'пн - пт',
			work_hours: '24ч',
		},
		desc: 'Рейтинг 4,9; Услуги от 2000 Р',
		rating: 4.2,
	},
];

const coordinates = [38.961308, 45.002435];
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
	@apply w-[100%] flex flex-col gap-[5rem] pt-[5rem] bg-couples-img bg-cover bg-no-repeat;
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
	@apply bg-zinc-500 w-[100%] grid grid-cols-1 justify-center p-[5rem];
}

.marker-popup {
	@apply h-[15rem] w-[10rem] rounded-[0.3rem] bg-zinc-800 border-[0.1rem] border-white text-white;
}

.footer {
	@apply p-[2rem] absolute m-0 w-[100%] flex justify-around;
}

.btns {
	@apply grid grid-cols-3;
}
</style>
