<script lang="ts">
	import { t } from '$lib/i18n';

	const tr = $derived(t());
</script>

<svelte:head>
	<title>{tr.meta.services.title}</title>
	<meta name="description" content={tr.meta.services.description} />
</svelte:head>

<div class="page">
	<div class="container">
		<!-- ── Header ─────────────────────────────── -->
		<header class="page-header">
			<p class="eyebrow">{tr.services.eyebrow}</p>
			<h1 class="page-title">{tr.services.headline}</h1>
			<p class="page-sub">{tr.services.intro}</p>
		</header>

		<!-- ── Services grid ──────────────────────── -->
		<div class="services-grid">
			{#each tr.services.items as service (service.number)}
				<article class="service-card">
					<span class="service-number" aria-hidden="true">{service.number}</span>
					<div class="service-body">
						<h2 class="service-title">{service.title}</h2>
						<p class="service-description">{service.description}</p>
						<ul class="service-deliverables">
							{#each service.deliverables as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>

		<!-- ── CTA ────────────────────────────────── -->
		<section class="cta-block">
			<div class="cta-copy">
				<h2 class="cta-title">{tr.services.ctaTitle}</h2>
				<p class="cta-sub">{tr.services.ctaSub}</p>
			</div>
			<a href="/contact" class="cta-btn">
				{tr.services.ctaBtn}
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
		</section>
	</div>
</div>

<style>
	.page {
		padding-top: calc(72px + var(--space-3xl));
		padding-bottom: var(--space-3xl);
		min-height: 100dvh;
	}

	/* ── Header ──────────────────────────────── */
	.eyebrow {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
	}

	.page-header {
		max-width: 640px;
		margin-bottom: var(--space-3xl);
	}

	.page-title {
		font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: var(--color-text);
		margin-bottom: var(--space-lg);
	}

	.page-sub {
		font-size: var(--text-lg);
		color: var(--color-text-muted);
		line-height: 1.7;
	}

	/* ── Services grid ───────────────────────── */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		background-color: var(--color-border);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		margin-bottom: var(--space-3xl);
	}

	.service-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
		padding: var(--space-2xl);
		background-color: var(--color-bg);
		transition: background-color var(--transition-fast);
	}

	.service-card:hover {
		background-color: var(--color-surface);
	}

	.service-number {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-accent);
		font-weight: 700;
	}

	.service-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		flex: 1;
	}

	.service-title {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--color-text);
		line-height: 1.2;
		letter-spacing: -0.01em;
	}

	.service-description {
		font-size: var(--text-base);
		color: var(--color-text-muted);
		line-height: 1.75;
	}

	.service-deliverables {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		margin-top: auto;
		padding-top: var(--space-md);
		border-top: 1px solid var(--color-border);
	}

	.service-deliverables li {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		padding-left: var(--space-lg);
		position: relative;
		line-height: 1.5;
	}

	.service-deliverables li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--color-accent);
		font-size: 0.7rem;
		top: 3px;
	}

	/* ── CTA block ───────────────────────────── */
	.cta-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-xl);
		padding: var(--space-2xl);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background-color: var(--color-surface);
	}

	.cta-title {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--color-text);
		letter-spacing: -0.02em;
		margin-bottom: var(--space-sm);
	}

	.cta-sub {
		font-size: var(--text-base);
		color: var(--color-text-muted);
		line-height: 1.7;
		max-width: 480px;
	}

	.cta-btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #000;
		background-color: var(--color-accent);
		padding: var(--space-md) var(--space-xl);
		border-radius: var(--radius-sm);
		white-space: nowrap;
		flex-shrink: 0;
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.cta-btn:hover {
		background-color: var(--color-accent-hover);
		transform: translateY(-2px);
	}

	.cta-btn:hover svg {
		transform: translateX(3px);
	}

	.cta-btn svg {
		transition: transform var(--transition-fast);
	}

	/* ── Responsive ──────────────────────────── */
	@media (max-width: 768px) {
		.services-grid {
			grid-template-columns: 1fr;
		}

		.service-card {
			padding: var(--space-xl);
		}

		.cta-block {
			flex-direction: column;
			align-items: flex-start;
		}

		.cta-btn {
			align-self: stretch;
			justify-content: center;
		}
	}
</style>
