<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { t } from '$lib/i18n';

	let mounted = $state(false);
	onMount(() => {
		// Small delay lets the browser paint first, giving CSS transitions
		// something to animate from
		requestAnimationFrame(() => (mounted = true));
	});

	const tr = $derived(t());
</script>

<section class="hero" class:mounted>
	<div class="container hero-inner">
		<!-- Left: copy -->
		<div class="hero-copy">
			<p class="hero-eyebrow">{tr.hero.eyebrow}</p>

			<h1 class="hero-headline">
				{tr.hero.headline}
				<span class="hero-headline--accent">{tr.hero.headlineAccent}</span>
			</h1>

			<p class="hero-sub">{tr.hero.sub}</p>

			<div class="hero-ctas">
				<a href={resolve('/projects')} class="btn btn--primary">
					{tr.hero.ctaPrimary}
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
				<a href={resolve('/contact')} class="btn btn--ghost">{tr.hero.ctaSecondary}</a>
			</div>

			<ul class="hero-stats" aria-label={tr.hero.statsAriaLabel}>
				{#each tr.hero.stats as stat, i (stat.number)}
					{#if i > 0}
						<li class="stat-divider" aria-hidden="true"></li>
					{/if}
					<li>
						<span class="stat-number">{stat.number}</span>
						<span class="stat-label">{stat.label}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Right: graphic -->
		<div class="hero-visual" aria-hidden="true">
			<div class="graphic">
				<!-- Orbiting ring -->
				<div class="ring ring--outer"></div>
				<div class="ring ring--inner"></div>

				<!-- Center card -->
				<div class="graphic-card">
					<div class="card-dot"></div>
					<div class="card-lines">
						<span></span>
						<span></span>
						<span style="width: 60%"></span>
					</div>
				</div>

				<!-- Floating badges -->
				{#each tr.hero.badges as badge, i (badge)}
					<div
						class="badge"
						class:badge--tl={i === 0}
						class:badge--br={i === 1}
						class:badge--tr={i === 2}
					>
						<span class="badge-icon">✦</span> {badge}
					</div>
				{/each}

				<!-- Accent dots -->
				<div class="dot dot--1"></div>
				<div class="dot dot--2"></div>
				<div class="dot dot--3"></div>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="scroll-indicator" aria-hidden="true">
		<span class="scroll-label">{tr.hero.scroll}</span>
		<div class="scroll-line"></div>
	</div>
</section>

<style>
	/* ── Layout ─────────────────────────────────── */
	.hero {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		padding-top: 72px; /* header height */
		position: relative;
		overflow: hidden;
	}

	.hero-inner {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: var(--space-2xl);
		padding-block: var(--space-3xl);
	}

	/* ── Entrance animations ─────────────────────── */
	.hero-eyebrow,
	.hero-headline,
	.hero-sub,
	.hero-ctas,
	.hero-stats,
	.hero-visual {
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 0.7s ease,
			transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.mounted .hero-eyebrow {
		opacity: 1;
		transform: none;
		transition-delay: 0.05s;
	}
	.mounted .hero-headline {
		opacity: 1;
		transform: none;
		transition-delay: 0.15s;
	}
	.mounted .hero-sub {
		opacity: 1;
		transform: none;
		transition-delay: 0.25s;
	}
	.mounted .hero-ctas {
		opacity: 1;
		transform: none;
		transition-delay: 0.35s;
	}
	.mounted .hero-stats {
		opacity: 1;
		transform: none;
		transition-delay: 0.45s;
	}
	.mounted .hero-visual {
		opacity: 1;
		transform: none;
		transition-delay: 0.3s;
	}

	/* ── Copy ────────────────────────────────────── */
	.hero-copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.hero-eyebrow {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.hero-headline {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: var(--color-text);
	}

	.hero-headline--accent {
		display: block;
		color: var(--color-accent);
	}

	.hero-sub {
		font-size: var(--text-lg);
		color: var(--color-text-muted);
		line-height: 1.7;
		max-width: 44ch;
	}

	/* ── CTAs ────────────────────────────────────── */
	.hero-ctas {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		padding: var(--space-md) var(--space-xl);
		border-radius: var(--radius-sm);
		transition:
			background-color var(--transition-fast),
			color var(--transition-fast),
			transform var(--transition-fast),
			border-color var(--transition-fast);
		white-space: nowrap;
	}

	.btn svg {
		transition: transform var(--transition-fast);
	}

	.btn--primary {
		background-color: var(--color-accent);
		color: #000;
		border: 1px solid var(--color-accent);
	}

	.btn--primary:hover {
		background-color: var(--color-accent-hover);
		border-color: var(--color-accent-hover);
		transform: translateY(-2px);
	}

	.btn--primary:hover svg {
		transform: translateX(3px);
	}

	.btn--ghost {
		background-color: transparent;
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.btn--ghost:hover {
		border-color: var(--color-text);
		transform: translateY(-2px);
	}

	/* ── Stats ───────────────────────────────────── */
	.hero-stats {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		list-style: none;
		padding-top: var(--space-md);
		border-top: 1px solid var(--color-border);
	}

	.stat-number {
		display: block;
		font-size: var(--text-2xl);
		font-weight: 800;
		color: var(--color-text);
		line-height: 1;
	}

	.stat-label {
		display: block;
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		margin-top: 2px;
	}

	.stat-divider {
		width: 1px;
		height: 36px;
		background-color: var(--color-border);
		flex-shrink: 0;
	}

	/* ── Visual / graphic ────────────────────────── */
	.hero-visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.graphic {
		position: relative;
		width: 380px;
		height: 380px;
	}

	/* Rotating rings */
	.ring {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		border: 1px solid var(--color-border);
		animation: spin linear infinite;
	}

	.ring--outer {
		animation-duration: 20s;
	}

	.ring--outer::after {
		content: '';
		position: absolute;
		top: -4px;
		left: 50%;
		width: 8px;
		height: 8px;
		background-color: var(--color-accent);
		border-radius: 50%;
		transform: translateX(-50%);
	}

	.ring--inner {
		inset: 48px;
		animation-duration: 14s;
		animation-direction: reverse;
	}

	.ring--inner::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 50%;
		width: 6px;
		height: 6px;
		background-color: var(--color-text-muted);
		border-radius: 50%;
		transform: translateX(-50%);
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	/* Center card */
	.graphic-card {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 140px;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.card-dot {
		width: 28px;
		height: 28px;
		background-color: var(--color-accent);
		border-radius: var(--radius-sm);
	}

	.card-lines {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.card-lines span {
		display: block;
		height: 6px;
		background-color: var(--color-border);
		border-radius: 3px;
		width: 100%;
	}

	/* Floating badges */
	.badge {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 6px;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 100px;
		padding: 6px 14px;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--color-text);
		white-space: nowrap;
		animation: float 3s ease-in-out infinite;
	}

	.badge--tl {
		top: 48px;
		left: -8px;
		animation-delay: 0s;
	}
	.badge--tr {
		top: 32px;
		right: -8px;
		animation-delay: 0.8s;
	}
	.badge--br {
		bottom: 48px;
		right: -8px;
		animation-delay: 1.6s;
	}

	.badge-icon {
		color: var(--color-accent);
		font-size: 0.6rem;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
	}

	/* Accent dots */
	.dot {
		position: absolute;
		border-radius: 50%;
		background-color: var(--color-accent);
		opacity: 0.6;
	}

	.dot--1 {
		width: 8px;
		height: 8px;
		bottom: 80px;
		left: 24px;
	}
	.dot--2 {
		width: 5px;
		height: 5px;
		top: 80px;
		left: 64px;
		opacity: 0.3;
	}
	.dot--3 {
		width: 12px;
		height: 12px;
		bottom: 32px;
		right: 64px;
		opacity: 0.2;
	}

	/* ── Scroll indicator ────────────────────────── */
	.scroll-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		padding-bottom: var(--space-xl);
		opacity: 0;
		animation: fadeIn 0.6s ease 1.2s forwards;
	}

	.scroll-label {
		font-size: 0.65rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.scroll-line {
		width: 1px;
		height: 48px;
		background: linear-gradient(to bottom, var(--color-text-muted), transparent);
		animation: scrollDrop 1.6s ease-in-out 1.2s infinite;
	}

	@keyframes scrollDrop {
		0% {
			transform: scaleY(0);
			transform-origin: top;
			opacity: 1;
		}
		50% {
			transform: scaleY(1);
			transform-origin: top;
			opacity: 1;
		}
		51% {
			transform: scaleY(1);
			transform-origin: bottom;
		}
		100% {
			transform: scaleY(0);
			transform-origin: bottom;
			opacity: 0;
		}
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	/* ── Responsive ──────────────────────────────── */
	@media (max-width: 900px) {
		.hero-inner {
			grid-template-columns: 1fr;
			text-align: center;
			padding-block: var(--space-2xl);
		}

		.hero-sub {
			max-width: 100%;
		}
		.hero-ctas {
			justify-content: center;
		}
		.hero-stats {
			justify-content: center;
		}

		.hero-visual {
			order: -1;
		}

		.graphic {
			width: 280px;
			height: 280px;
		}

		.badge--tl {
			left: 0;
		}
		.badge--tr {
			right: 0;
		}
		.badge--br {
			right: 0;
		}
	}

	@media (max-width: 480px) {
		.hero-visual {
			display: none;
		}
	}
</style>
