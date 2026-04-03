<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { t } from '$lib/i18n';

	interface Props {
		project: Project;
		wide?: boolean;
	}
	let { project, wide = false }: Props = $props();

	const tr = $derived(t());
	const cardTr = $derived(tr.projectsData[project.id]);
	const title = $derived(cardTr?.title ?? project.title);
	const role = $derived(cardTr?.role ?? project.role);
	const description = $derived(cardTr?.description ?? project.description);
</script>

<article
	class="card"
	class:card--wide={wide}
	class:card--private={project.visibility === 'private'}
>
	<!-- Visual area -->
	<div class="card-visual">
		{#if project.image}
			<img src={project.image} alt="{project.title} — {project.company}" loading="lazy" />
		{:else if project.visibility === 'public' && project.liveUrl}
			<!-- Public but no screenshot: live site treatment -->
			<a
				href={project.liveUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="card-live"
				aria-label={tr.projectCard.liveSiteAriaLabel.replace('{title}', title)}
			>
				<span class="card-live__label">{tr.projectCard.liveSiteLabel}</span>
				<span class="card-live__url">{project.liveUrl.replace('https://', '')}</span>
				<svg
					class="card-live__arrow"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					aria-hidden="true"
				>
					<path
						d="M4 10h12M12 6l4 4-4 4"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		{:else}
			<!-- Private work: abstract graphic -->
			<div class="card-private">
				<div class="card-private__grid" aria-hidden="true">
					{#each { length: 12 } as _, i (i)}
						<div class="card-private__cell"></div>
					{/each}
				</div>
				<div class="card-private__badge">
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
						<rect
							x="2"
							y="6"
							width="10"
							height="7"
							rx="1.5"
							stroke="currentColor"
							stroke-width="1.2"
						/>
						<path
							d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6"
							stroke="currentColor"
							stroke-width="1.2"
							stroke-linecap="round"
						/>
					</svg>
					{tr.projectCard.privateWork}
				</div>
			</div>
		{/if}
	</div>

	<!-- Content -->
	<div class="card-content">
		<div class="card-meta">
			<span class="card-company">{project.company}</span>
			<span class="card-period">{project.period}</span>
		</div>

		<h3 class="card-title">{title}</h3>
		<p class="card-role">{role}</p>
		<p class="card-description">{description}</p>

		<ul class="card-tags" aria-label={tr.projectCard.techsAriaLabel}>
			{#each project.tags as tag (tag)}
				<li class="card-tag">{tag}</li>
			{/each}
		</ul>

		{#if project.liveUrl}
			<a
				href={project.liveUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="card-link"
				aria-label={tr.projectCard.viewLiveAriaLabel.replace('{title}', title)}
			>
				{tr.projectCard.viewLive}
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
					<path
						d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		{/if}
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		transition:
			border-color var(--transition-base),
			transform var(--transition-base);
	}

	.card:hover {
		border-color: var(--color-accent);
		transform: translateY(-4px);
	}

	/* ── Visual area ─────────────────────────── */
	.card-visual {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		position: relative;
		background-color: var(--color-bg);
		flex-shrink: 0;
	}

	.card-visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-slow);
	}

	.card:hover .card-visual img {
		transform: scale(1.03);
	}

	/* Live site treatment */
	.card-live {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		height: 100%;
		text-decoration: none;
		color: var(--color-text);
		position: relative;
		overflow: hidden;
	}

	.card-live::before {
		content: '';
		position: absolute;
		inset: 12px;
		border: 1px dashed var(--color-border);
		border-radius: var(--radius-md);
		transition: border-color var(--transition-base);
	}

	.card:hover .card-live::before {
		border-color: var(--color-accent);
	}

	.card-live__label {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.card-live__url {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		font-family: var(--font-mono);
	}

	.card-live__arrow {
		color: var(--color-text-muted);
		transition:
			transform var(--transition-fast),
			color var(--transition-fast);
	}

	.card:hover .card-live__arrow {
		transform: translateX(4px);
		color: var(--color-accent);
	}

	/* Private work treatment */
	.card-private {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.card-private__grid {
		position: absolute;
		inset: 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 1px;
		opacity: 0.4;
	}

	.card-private__cell {
		background-color: var(--color-border);
		border-radius: 2px;
	}

	.card-private__cell:nth-child(3n) {
		opacity: 0.5;
	}
	.card-private__cell:nth-child(5n) {
		opacity: 0.3;
	}

	.card-private__badge {
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 100px;
		padding: var(--space-xs) var(--space-md);
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		z-index: 1;
	}

	/* ── Content ─────────────────────────────── */
	.card-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		padding: var(--space-lg);
		flex: 1;
	}

	.card-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-company {
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.card-period {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		font-family: var(--font-mono);
	}

	.card-title {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--color-text);
		line-height: 1.2;
	}

	.card-role {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		font-weight: 500;
	}

	.card-description {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		line-height: 1.6;
		flex: 1;
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		list-style: none;
		padding-top: var(--space-xs);
	}

	.card-tag {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 3px 10px;
		border-radius: 100px;
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		color: var(--color-text-muted);
	}

	.card-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--color-text);
		margin-top: var(--space-xs);
		transition:
			color var(--transition-fast),
			gap var(--transition-fast);
	}

	.card-link:hover {
		color: var(--color-accent);
		gap: var(--space-sm);
	}
</style>
