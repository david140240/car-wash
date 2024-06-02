import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
	vite: {
		resolve: {
			alias: {
				'@yandex/ymaps3-types': resolve(
					__dirname,
					'node_modules/@yandex/ymaps3-types'
				),
			},
		},
	},
	devtools: { enabled: true },
	server: {
		port: 8000,
	},
	scripts: {
		'dev:host': 'nuxt --hostname 192.168.0.199 --port 8000',
	},
	alias: {
		'@': resolve(__dirname, '/'),
	},
	css: ['~/assets/css/main.scss'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['@nuxt/image', 'vue-yandex-maps/nuxt', '@nuxt/eslint'],
	yandexMaps: {
		apikey: 'cd09be64-2a0d-47ca-aa00-de89e3e26e03',
	},
	ssr: false,
});
