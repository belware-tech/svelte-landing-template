<script lang="ts">
	import { t } from '$lib/i18n/i18n';

	import images from '$lib/assets/images';
	import locale from './translations';

	import Landing from '$lib/views/Landing/Landing.svelte';

	import Button from '$lib/components/Button/Button.svelte';
</script>

<main>
	<Landing
		background={images.LANDING}
		title={$t(locale, 'landing.title')}
		subtitle={$t(locale, 'landing.subtitle')}
		paragraph={$t(locale, 'landing.paragraph')}
	>
		<Button onClick={() => undefined}>{$t(locale, 'landing.btn.launch')}</Button
		>
		<Button onClick={() => undefined} variant="variant-ghost-secondary"
			>{$t(locale, 'landing.btn.explore')}</Button
		>
	</Landing>
</main>
