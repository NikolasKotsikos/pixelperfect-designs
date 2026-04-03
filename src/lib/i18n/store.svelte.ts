import type { Locale, Translations } from './types';
import { en } from './locales/en';
import { nl } from './locales/nl';

const locales: Record<Locale, Translations> = { en, nl };

let _locale: Locale = $state('en');

function isLocale(value: unknown): value is Locale {
	return value === 'en' || value === 'nl';
}

export function initLocale(): void {
	if (typeof localStorage === 'undefined') return;
	const saved = localStorage.getItem('locale');
	if (isLocale(saved)) {
		_locale = saved;
	}
}

export function getLocale(): Locale {
	return _locale;
}

export function setLocale(l: Locale): void {
	if (l === _locale) return;
	_locale = l;
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('locale', l);
	}
}

export function toggleLocale(): void {
	setLocale(_locale === 'en' ? 'nl' : 'en');
}

export function t(): Translations {
	return locales[_locale];
}
