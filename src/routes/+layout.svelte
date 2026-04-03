<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { initLocale, getLocale } from '$lib/i18n';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	onMount(() => {
		initLocale();
	});

	$effect(() => {
		document.documentElement.lang = getLocale();
	});
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />
