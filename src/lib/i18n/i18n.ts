import { derived, writable } from 'svelte/store';

export const locale = writable('en');

export const translate = (
	locale: string,
	translations: Record<string, Record<string, string>>,
	key: string,
	vars: Record<string, string>,
): string => {
	if (key.length < 1 || locale.length < 1) {
		return key;
	}

	let text = translations[locale][key];

	if (!text || text.length < 1) {
		return key;
	}

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
};

export const t = derived(
	locale,
	($locale) =>
		(
			translations: Record<string, Record<string, string>>,
			key: string,
			vars = {},
		) =>
			translate($locale, translations, key, vars),
);
