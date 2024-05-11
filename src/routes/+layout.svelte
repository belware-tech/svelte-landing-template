<script lang="ts">
	import '../app.postcss';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { AppShell, Drawer, initializeStores } from '@skeletonlabs/skeleton';
	import { isMobile } from '$lib/stores/mobile.store';

	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import navigation from '$lib/constants/navigation';
	import images from '$lib/assets/images';
	import NavbarMobile from '$lib/components/NavbarMobile/NavbarMobile.svelte';
	import Loader from '$lib/components/Loader/Loader.svelte';

	initializeStores();

	let isLoaded = false;

	const checkDeviceWidth = (): void => {
		isMobile.set(window.matchMedia('(max-width: 767px)').matches);
	};

	onMount(async (): Promise<unknown> => {
		checkDeviceWidth();
		window.addEventListener('resize', checkDeviceWidth);

		await new Promise((resolve) => setTimeout(resolve, 500));
		isLoaded = true;

		return () => {
			window.removeEventListener('resize', checkDeviceWidth);
		};
	});
</script>

<svelte:head><title>RocketExpress</title></svelte:head>

{#if isLoaded}
	<div in:fade={{ duration: 500 }}>
		<Drawer>
			<NavbarMobile logo={images.LOGO} {navigation} />
		</Drawer>
		<AppShell>
			<svelte:fragment slot="header"
				><Navbar logo={images.LOGO} {navigation} /></svelte:fragment
			>
			<slot />
		</AppShell>
	</div>
{:else}
	<Loader />
{/if}
