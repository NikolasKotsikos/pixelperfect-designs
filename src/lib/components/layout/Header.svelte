<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import { t, getLocale, toggleLocale } from '$lib/i18n';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	const tr = $derived(t());
	const locale = $derived(getLocale());

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Close drawer on route change
	afterNavigate(() => {
		menuOpen = false;
	});
</script>

<header class:scrolled>
	<div class="container header-inner">
		<a href="/" class="logo" aria-label={tr.header.logoAriaLabel}>
			<span class="logo-mark">
				<img
					src="/images/transparent-logo-yellow.png"
					alt={tr.header.logoAlt}
					loading="eager"
				/>
			</span>
			<span class="logo-text">PixelPerfect<br />Designs</span>
		</a>

		<!-- Desktop nav + lang toggle -->
		<div class="header-right">
			<Nav />
			<button
				class="lang-toggle"
				onclick={toggleLocale}
				aria-label={locale === 'en' ? tr.header.switchToDutch : tr.header.switchToEnglish}
			>
				<span class:active={locale === 'en'}>EN</span>
				<span class="lang-divider">/</span>
				<span class:active={locale === 'nl'}>NL</span>
			</button>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="hamburger"
			class:open={menuOpen}
			aria-label={menuOpen ? tr.header.closeMenu : tr.header.openMenu}
			aria-expanded={menuOpen}
			aria-controls="mobile-drawer"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</header>

<!-- Mobile drawer -->
<div id="mobile-drawer" class="drawer" class:drawer--open={menuOpen} aria-hidden={!menuOpen}>
	<nav class="drawer-nav" aria-label={tr.nav.mobileAriaLabel}>
		<a href="/" class:active={page.url.pathname === '/'}>{tr.nav.home}</a>
		<a href="/about" class:active={page.url.pathname === '/about'}>{tr.nav.about}</a>
		<a href="/projects" class:active={page.url.pathname.startsWith('/projects')}>{tr.nav.projects}</a>
		<a href="/services" class:active={page.url.pathname === '/services'}>{tr.nav.services}</a>
		<a href="/contact" class:active={page.url.pathname === '/contact'}>{tr.nav.contact}</a>
	</nav>

	<!-- Lang toggle (mobile drawer) -->
	<button
		class="lang-toggle lang-toggle--drawer"
		onclick={toggleLocale}
		aria-label={locale === 'en' ? tr.header.switchToDutch : tr.header.switchToEnglish}
	>
		<span class:active={locale === 'en'}>EN</span>
		<span class="lang-divider">/</span>
		<span class:active={locale === 'nl'}>NL</span>
	</button>
</div>

<!-- Backdrop -->
{#if menuOpen}
	<div
		class="backdrop"
		aria-hidden="true"
		onclick={() => (menuOpen = false)}
		onkeydown={() => {}}
		role="presentation"
	></div>
{/if}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 72px;
		transition:
			background-color var(--transition-base),
			backdrop-filter var(--transition-base),
			border-bottom-color var(--transition-base);
		border-bottom: 1px solid transparent;
	}

	header.scrolled {
		background-color: rgba(15, 15, 15, 0.75);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom-color: var(--color-border);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
	}

	/* Logo */
	.logo {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		text-decoration: none;
	}

	.logo-mark {
		display: grid;
		place-items: center;
		width: 35px;
		height: 35px;
		flex-shrink: 0;
		transition: transform var(--transition-fast);
	}

	.logo:hover .logo-mark {
		transform: rotate(-6deg) scale(1.05);
	}

	.logo-text {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.3;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: var(--color-text);
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 40px;
		height: 40px;
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		cursor: pointer;
		padding: 8px;
		transition: border-color var(--transition-fast);
	}

	.hamburger:hover {
		border-color: var(--color-accent);
	}

	.hamburger span {
		display: block;
		height: 1.5px;
		background-color: var(--color-text);
		border-radius: 2px;
		transition:
			transform var(--transition-base),
			opacity var(--transition-base);
		transform-origin: center;
	}

	.hamburger.open span:nth-child(1) {
		transform: translateY(6.5px) rotate(45deg);
	}
	.hamburger.open span:nth-child(2) {
		opacity: 0;
		transform: scaleX(0);
	}
	.hamburger.open span:nth-child(3) {
		transform: translateY(-6.5px) rotate(-45deg);
	}

	/* Drawer */
	.drawer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: min(320px, 85vw);
		background-color: var(--color-surface);
		border-left: 1px solid var(--color-border);
		z-index: 200;
		transform: translateX(100%);
		transition: transform var(--transition-slow) cubic-bezier(0.16, 1, 0.3, 1);
		padding: calc(72px + var(--space-xl)) var(--space-xl) var(--space-xl);
	}

	.drawer--open {
		transform: translateX(0);
	}

	.drawer-nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.drawer-nav a {
		font-size: var(--text-lg);
		font-weight: 500;
		color: var(--color-text-muted);
		padding: var(--space-sm) 0;
		border-bottom: 1px solid var(--color-border);
		transition:
			color var(--transition-fast),
			padding-left var(--transition-fast);
	}

	.drawer-nav a:hover,
	.drawer-nav a.active {
		color: var(--color-text);
		padding-left: var(--space-sm);
	}

	.drawer-nav a.active {
		color: var(--color-accent);
	}

	/* Backdrop */
	.backdrop {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 150;
		backdrop-filter: blur(2px);
		animation: fadeIn var(--transition-base) ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Desktop right group */
	.header-right {
		display: flex;
		align-items: center;
		gap: var(--space-xl);
	}

	/* Lang toggle */
	.lang-toggle {
		display: flex;
		align-items: center;
		gap: 4px;
		background: none;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		padding: 6px 10px;
		cursor: pointer;
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-muted);
		transition: border-color var(--transition-fast);
	}

	.lang-toggle:hover {
		border-color: var(--color-accent);
	}

	.lang-toggle span.active {
		color: var(--color-accent);
	}

	.lang-divider {
		color: var(--color-border);
	}

	.lang-toggle--drawer {
		margin-top: var(--space-xl);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}

		.header-right {
			display: none;
		}
	}
</style>
