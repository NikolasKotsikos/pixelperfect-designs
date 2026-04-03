<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import ProjectGrid from '$lib/components/sections/ProjectGrid.svelte';
	import { t } from '$lib/i18n';

	const tr = $derived(t());
</script>

<svelte:head>
	<title>{tr.meta.home.title}</title>
	<meta name="description" content={tr.meta.home.description} />
</svelte:head>

<Hero />
<ProjectGrid />
