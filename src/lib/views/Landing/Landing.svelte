<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';

	export let background: string;
	export let title: string;
	export let subtitle: string;
	export let paragraph: string;

	$: polygonPoints = $isMobile ? '0,0 0,0 100,0 0,20' : '0,0 10,0 10,0 0,100';
</script>

<div
	class="relative bg-cover bg-center bg-no-repeat"
	style="background-image: url('{background}');"
>
	<div class="flex flex-wrap">
		<div
			class="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 bg-primary-900 bg-opacity-75 px-8 py-32 lg:p-32"
		>
			<div class="flex flex-col space-y-16 md:space-y-4">
				<h1 class="h1 gradient-heading-primary font-bold text-6xl">{title}</h1>
				<h1 class="h2 gradient-heading-secondary font-semibold text-4xl">{subtitle}</h1>
			</div>
			<p class="text-paragraph">{paragraph}</p>
			<div class="flex space-x-4 self-end">
				<slot />
			</div>
		</div>

		{#if !$isMobile}
			<div class="w-full md:w-1/2 flex justify-center items-center fill-primary-900 opacity-75">
				<svg class="inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon points={polygonPoints} />
				</svg>
			</div>
		{/if}
	</div>
</div>
