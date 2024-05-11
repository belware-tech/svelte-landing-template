<script lang="ts">
	import type { INavigation } from '$lib/interfaces/navigation.interface';

	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import { isMobile } from '$lib/stores/mobile.store';
	import { locale } from '$lib/i18n/i18n';

	import Button from '$lib/components/Button/Button.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import smoothScroll from '$lib/utils/smoothScroll';
	import mobileNavbarSettings from '$lib/constants/mobileNavbarSettings';

	export let logo: string;
	export let navigation: INavigation[];

	const handleLanguageChange = (): void => {
		locale.set('en');
	};

	const drawerStore = getDrawerStore();
</script>

<AppBar
	background="bg-gradient-to-br from-primary-900 to-primary-500"
	shadow="shadow-xl"
	padding="px-4 py-2 lg:px-32"
>
	<svelte:fragment slot="lead">
		<button on:click={() => smoothScroll('home')}>
			<img src={logo} alt="Logo" data-testid="logo-test-id" class="max-h-8 md:max-h-12" />
		</button>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#if $isMobile}
			<button
				type="button"
				class="btn-icon variant-ringed-tertiary uppercase"
				on:click={() => drawerStore.open(mobileNavbarSettings)}
			>
				<Icon name="bars" width="w-4" height="h-4" />
			</button>
		{:else}
			{#each navigation as navigationItem}
				<Button variant="" onClick={navigationItem.onClick}>
					{navigationItem.name}
				</Button>
			{/each}

			<button
				type="button"
				class="btn-icon variant-ringed-tertiary uppercase"
				on:click={handleLanguageChange}>{$locale}</button
			>
		{/if}
	</svelte:fragment>
</AppBar>
