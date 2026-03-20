<script lang="ts">
	const year = new Date().getFullYear();

	const socials = [
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/nikolas-kotsikos' },
		{ name: 'GitHub', url: 'https://github.com/NikolasKotsikos' }
	];
</script>

<footer>
	<div class="container footer-inner">
		<a href="/" class="footer-logo" aria-label="Pixel Perfect Designs — home">
			<span class="logo-mark">
				<img
					src="/images/transparent-logo-yellow.png"
					alt="PixelPerfect Designs logo"
					loading="eager"
				/>
			</span>
			<span class="logo-text">Pixel Perfect Designs</span>
		</a>

		<p class="footer-copy">
			© {year} Pixel Perfect Designs
		</p>

		<nav class="footer-socials" aria-label="Social links">
			{#each socials as social (social.name)}
				<a
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					class="social-link"
					aria-label="{social.name} — opens in new tab"
				>
					{#if social.name === 'LinkedIn'}
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
							<path
								d="M2.5 6H5.5V15.5H2.5V6Z"
								stroke="currentColor"
								stroke-width="1.3"
								stroke-linejoin="round"
							/>
							<path
								d="M2.5 3.5C2.5 2.948 2.948 2.5 3.5 2.5H4.5C5.052 2.5 5.5 2.948 5.5 3.5C5.5 4.052 5.052 4.5 4.5 4.5H3.5C2.948 4.5 2.5 4.052 2.5 3.5Z"
								stroke="currentColor"
								stroke-width="1.3"
							/>
							<path
								d="M8 6H10.5V7.5C11 6.5 12.2 6 13.5 6C15.5 6 16.5 7.2 16.5 9.5V15.5H13.5V10C13.5 9 13 8.5 12 8.5C11 8.5 10.5 9.1 10.5 10V15.5H8V6Z"
								stroke="currentColor"
								stroke-width="1.3"
								stroke-linejoin="round"
							/>
						</svg>
					{:else if social.name === 'GitHub'}
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
							<path
								d="M9 1.5C4.858 1.5 1.5 4.858 1.5 9C1.5 12.314 3.672 15.1 6.678 16.086C7.053 16.152 7.188 15.924 7.188 15.726C7.188 15.546 7.182 15.06 7.178 14.412C5.196 14.862 4.758 13.47 4.758 13.47C4.416 12.606 3.924 12.378 3.924 12.378C3.246 11.916 3.974 11.924 3.974 11.924C4.722 11.976 5.114 12.696 5.114 12.696C5.778 13.836 6.858 13.506 7.202 13.314C7.268 12.834 7.462 12.504 7.676 12.318C6.102 12.13 4.446 11.514 4.446 8.856C4.446 8.034 4.74 7.362 5.13 6.84C5.058 6.654 4.8 5.886 5.196 4.85C5.196 4.85 5.82 4.65 7.17 5.628C7.674 5.484 8.34 5.412 9 5.41C9.66 5.412 10.326 5.484 10.83 5.628C12.18 4.65 12.804 4.85 12.804 4.85C13.2 5.886 12.942 6.654 12.87 6.84C13.26 7.362 13.554 8.034 13.554 8.856C13.554 11.52 11.894 12.128 10.316 12.312C10.58 12.54 10.814 12.99 10.814 13.68C10.814 14.664 10.806 15.456 10.806 15.726C10.806 15.926 10.94 16.156 11.322 16.086C14.328 15.1 16.5 12.314 16.5 9C16.5 4.858 13.142 1.5 9 1.5Z"
								stroke="currentColor"
								stroke-width="1.3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					{/if}
				</a>
			{/each}
		</nav>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--color-border);
		padding-block: var(--space-xl);
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
	}

	/* Logo */
	.footer-logo {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		text-decoration: none;
		flex-shrink: 0;
	}

	.logo-mark {
		display: grid;
		place-items: center;
		width: 20px;
		height: 20px;
		transition: transform var(--transition-fast);
		flex-shrink: 0;
	}

	.footer-logo:hover .logo-mark {
		transform: rotate(-6deg) scale(1.05);
	}

	.logo-text {
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--color-text-muted);
		transition: color var(--transition-fast);
	}

	.footer-logo:hover .logo-text {
		color: var(--color-text);
	}

	/* Copyright */
	.footer-copy {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}

	/* Social icons */
	.footer-socials {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		flex-shrink: 0;
	}

	.social-link {
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		color: var(--color-text-muted);
		transition:
			color var(--transition-fast),
			border-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.social-link:hover {
		color: var(--color-text);
		border-color: var(--color-accent);
		transform: translateY(-2px);
	}

	/* Responsive — stack on small screens */
	@media (max-width: 600px) {
		.footer-inner {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: var(--space-md);
		}
	}
</style>
