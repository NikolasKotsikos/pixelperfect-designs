<script lang="ts">
	import { page } from '$app/state';
	import { t } from '$lib/i18n';

	const pathname = $derived(page.url.pathname);
	const tr = $derived(t());
</script>

<nav class="desktop-nav" aria-label={tr.nav.ariaLabel}>
	<a href="/about" class:active={pathname === '/about'}>{tr.nav.about}</a>
	<a href="/projects" class:active={pathname.startsWith('/projects')}>{tr.nav.projects}</a>
	<a href="/services" class:active={pathname === '/services'}>{tr.nav.services}</a>
	<a href="/contact" class="cta" class:active={pathname === '/contact'}>{tr.nav.cta}</a>
</nav>

<style>
	.desktop-nav {
		display: flex;
		align-items: center;
		gap: var(--space-xl);
	}

	.desktop-nav a {
		font-size: var(--text-sm);
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-text-muted);
		position: relative;
		padding-bottom: 2px;
		transition: color var(--transition-fast);
	}

	/* Animated underline on hover / active */
	.desktop-nav a:not(.cta)::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		height: 1.5px;
		background-color: var(--color-accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--transition-base) cubic-bezier(0.16, 1, 0.3, 1);
	}

	.desktop-nav a:not(.cta):hover,
	.desktop-nav a:not(.cta).active {
		color: var(--color-text);
	}

	.desktop-nav a:not(.cta):hover::after,
	.desktop-nav a:not(.cta).active::after {
		transform: scaleX(1);
	}

	/* CTA button */
	.desktop-nav .cta {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #000;
		background-color: var(--color-accent);
		padding: var(--space-sm) var(--space-lg);
		border-radius: var(--radius-sm);
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.desktop-nav .cta:hover {
		background-color: var(--color-accent-hover);
		transform: translateY(-1px);
	}

	.desktop-nav .cta.active {
		background-color: var(--color-accent-hover);
	}

	@media (max-width: 768px) {
		.desktop-nav {
			display: none;
		}
	}
</style>
