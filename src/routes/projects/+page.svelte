<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import { t } from '$lib/i18n';

	const uniqueTags = [...new Set(projects.flatMap((p) => p.tags))];
	let activeTag = $state<string | null>(null);

	const filtered = $derived(
		activeTag === null ? projects : projects.filter((p) => p.tags.includes(activeTag!))
	);
	const tr = $derived(t());
</script>

<svelte:head>
	<title>{tr.meta.projects.title}</title>
	<meta name="description" content={tr.meta.projects.description} />
</svelte:head>

<div class="page">
	<div class="container">
		<header class="page-header">
			<p class="eyebrow">{tr.projects.eyebrow}</p>
			<h1 class="page-title">{tr.projects.headline}</h1>
			<p class="page-sub">{tr.projects.intro}</p>
		</header>

		<!-- Filter bar -->
		<div class="filter-bar" role="group" aria-label={tr.projects.filterAriaLabel}>
			<button
				class="filter-btn"
				class:filter-btn--active={activeTag === null}
				onclick={() => (activeTag = null)}
				aria-pressed={activeTag === null}
			>
				{tr.projects.filterAll}
			</button>
			{#each uniqueTags as tag (tag)}
				<button
					class="filter-btn"
					class:filter-btn--active={activeTag === tag}
					onclick={() => (activeTag = tag)}
					aria-pressed={activeTag === tag}
				>
					{tag}
				</button>
			{/each}
		</div>

		<!-- Full grid -->
		<div class="projects-grid">
			{#each filtered as project (project.id)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div>

<style>
	.page {
		padding-top: calc(72px + var(--space-3xl));
		padding-bottom: var(--space-3xl);
		min-height: 100dvh;
	}

	.page-header {
		margin-bottom: var(--space-2xl);
	}

	.eyebrow {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
	}

	.page-title {
		font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--color-text);
		line-height: 1.1;
		margin-bottom: var(--space-md);
	}

	.page-sub {
		font-size: var(--text-lg);
		color: var(--color-text-muted);
		max-width: 52ch;
		line-height: 1.7;
	}

	/* ── Filter bar ──────────────────────────── */
	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		margin-bottom: var(--space-2xl);
		padding-bottom: var(--space-xl);
		border-bottom: 1px solid var(--color-border);
	}

	.filter-btn {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		padding: var(--space-sm) var(--space-lg);
		border-radius: 100px;
		border: 1px solid var(--color-border);
		background-color: transparent;
		color: var(--color-text-muted);
		cursor: pointer;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			color var(--transition-fast);
	}

	.filter-btn:hover {
		border-color: var(--color-text);
		color: var(--color-text);
	}

	.filter-btn--active {
		background-color: var(--color-accent);
		border-color: var(--color-accent);
		color: #000;
	}

	.filter-btn--active:hover {
		background-color: var(--color-accent-hover);
		border-color: var(--color-accent-hover);
		color: #000;
	}

	/* ── Grid ────────────────────────────────── */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--space-lg);
	}

	@media (max-width: 480px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
