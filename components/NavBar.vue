<template>
	<div class="nav-bar">
		<NuxtImg style="height: 2rem" src="/icons/logo.svg" />
		<div class="btn-group">
			<button>Главная</button>
			<button>О нас</button>
			<button>Запись</button>
		</div>
		<Button>Войти</Button>
	</div>
</template>

<style>
.nav-bar {
	@apply w-[100%] flex justify-around text-[1rem] mt-[1rem] border-slate-200 border-b-[0.1rem] pb-[0.5rem] mb-[0.5rem];
}

.btn-group {
	@apply w-[20rem] flex justify-around;
}
</style>
