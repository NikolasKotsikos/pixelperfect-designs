<script lang="ts">
	import { featuredProjects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
</script>

<section class="projects-teaser">
	<div class="container">
		<div class="section-header">
			<div class="section-header__left">
				<p class="eyebrow">Selected work</p>
				<h2 class="section-title">Projects that matter</h2>
			</div>
			<a href="/projects" class="section-link">
				View all projects
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path
						d="M3 8h10M9 4l4 4-4 4"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>

		<div class="projects-grid">
			{#each featuredProjects as project, i (project.id)}
				<div class="grid-item" class:grid-item--wide={i === 0}>
					<ProjectCard {project} wide={i === 0} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-teaser {
		padding-block: var(--space-3xl);
	}

	/* ── Section header ──────────────────────── */
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: var(--space-2xl);
		gap: var(--space-lg);
	}

	.eyebrow {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
	}

	.section-title {
		font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--color-text);
		line-height: 1.1;
	}

	.section-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-text-muted);
		white-space: nowrap;
		flex-shrink: 0;
		transition:
			color var(--transition-fast),
			gap var(--transition-fast);
	}

	.section-link:hover {
		color: var(--color-accent);
		gap: var(--space-md);
	}

	/* ── Asymmetric grid ─────────────────────── */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto;
		gap: var(--space-lg);
	}

	.grid-item--wide {
		grid-column: span 2;
	}

	@media (max-width: 900px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}

		.grid-item--wide {
			grid-column: span 1;
		}

		.section-header {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
