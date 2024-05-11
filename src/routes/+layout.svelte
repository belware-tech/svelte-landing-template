<script lang="ts">
	import '../app.postcss';

	import { onMount } from 'svelte';
	import { AppShell, Drawer, initializeStores } from '@skeletonlabs/skeleton';
	import { isMobile } from '$lib/stores/mobile.store';

	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import navigation from '$lib/constants/navigation';
	import images from '$lib/assets/images';
	import NavbarMobile from '$lib/components/NavbarMobile/NavbarMobile.svelte';

	initializeStores();

	const checkDeviceWidth = (): void => {
		isMobile.set(window.matchMedia('(max-width: 767px)').matches);
	};

	onMount(() => {
		checkDeviceWidth();
		window.addEventListener('resize', checkDeviceWidth);

		return () => {
			window.removeEventListener('resize', checkDeviceWidth);
		};
	});
</script>

<svelte:head><title>RocketExpress</title></svelte:head>
<Drawer>
	<NavbarMobile logo={images.LOGO} {navigation} />
</Drawer>
<AppShell>
	<svelte:fragment slot="header"><Navbar logo={images.LOGO} {navigation} /></svelte:fragment>
	<slot />
</AppShell>
