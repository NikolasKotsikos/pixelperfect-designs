<script lang="ts">
	import { t } from '$lib/i18n';

	const tr = $derived(t());

	let submitting = $state(false);
	let success = $state(false);
	let error = $state('');

	async function handleSubmit(e: SubmitEvent) {
		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		submitting = true;
		success = false;
		error = '';

		try {
			const res = await fetch('/api/contact.php', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: String(formData.get('name') ?? '').trim(),
					email: String(formData.get('email') ?? '').trim(),
					message: String(formData.get('message') ?? '').trim(),
					company: String(formData.get('company') ?? '')
				})
			});

			const out = await res.json().catch(() => ({}));

			if (!res.ok || !out.ok) {
				error = out.error ?? tr.contact.errorGeneric;
				return;
			}

			success = true;
			form.reset();
		} catch {
			error = tr.contact.errorNetwork;
		} finally {
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>{tr.meta.contact.title}</title>
	<meta name="description" content={tr.meta.contact.description} />
</svelte:head>

<div class="page">
	<div class="container">
		<header class="page-header">
			<p class="eyebrow">{tr.contact.eyebrow}</p>
			<h1 class="page-title">{tr.contact.headline}</h1>
			<p class="page-sub">{tr.contact.intro}</p>
		</header>

		<div class="contact-grid">
			<!-- ── Form ──────────────────────────────── -->
			<div class="form-wrap">
				{#if success}
					<div class="success">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M20 6L9 17l-5-5"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<div>
							<p class="success-title">{tr.contact.successTitle}</p>
							<p class="success-sub">{tr.contact.successSub}</p>
						</div>
					</div>
				{:else}
					{#if error}
						<div class="form-error" role="alert">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
								<path
									d="M8 5v3.5M8 11h.01"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
							</svg>
							{error}
						</div>
					{/if}

					<form
						method="POST"
						action="/api/contact.php"
						onsubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
						novalidate
					>
						<!-- Honeypot: hidden from real users, catches bots that fill every field -->
						<input type="text" name="company" tabindex="-1" autocomplete="off" class="visually-hidden" />

						<div class="field">
							<label for="name">{tr.contact.labelName}</label>
							<input
								id="name"
								name="name"
								type="text"
								placeholder={tr.contact.placeholderName}
								required
								autocomplete="name"
								disabled={submitting}
							/>
						</div>

						<div class="field">
							<label for="email">{tr.contact.labelEmail}</label>
							<input
								id="email"
								name="email"
								type="email"
								placeholder={tr.contact.placeholderEmail}
								required
								autocomplete="email"
								disabled={submitting}
							/>
						</div>

						<div class="field">
							<label for="message">{tr.contact.labelMessage}</label>
							<textarea
								id="message"
								name="message"
								placeholder={tr.contact.placeholderMessage}
								rows="6"
								required
								disabled={submitting}
							></textarea>
						</div>

						<button type="submit" class="submit-btn" disabled={submitting} aria-busy={submitting}>
							{#if submitting}
								<span class="spinner" aria-hidden="true"></span>
								{tr.contact.submitting}
							{:else}
								{tr.contact.submit}
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
									<path
										d="M3 8h10M9 4l4 4-4 4"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							{/if}
						</button>
					</form>
				{/if}
			</div>

			<!-- ── Details ───────────────────────────── -->
			<aside class="details">
				<div class="detail-group">
					<p class="detail-label">{tr.contact.detailEmail}</p>
					<a href="mailto:info@pixelperfectdesigns.nl" class="detail-value">
						info@pixelperfectdesigns.nl
					</a>
				</div>

				<div class="detail-group">
					<p class="detail-label">{tr.contact.detailBasedIn}</p>
					<p class="detail-value">{tr.contact.detailBasedInValue}</p>
				</div>

				<div class="detail-group">
					<p class="detail-label">{tr.contact.detailAvailability}</p>
					<p class="detail-value">{tr.contact.detailAvailabilityValue}</p>
				</div>

				<div class="detail-group">
					<p class="detail-label">{tr.contact.detailLinks}</p>
					<div class="links">
						<a
							href="https://linkedin.com/in/nikolaskotsikos"
							class="detail-link"
							rel="external noopener noreferrer"
							target="_blank"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/NikolasKotsikos"
							class="detail-link"
							rel="external noopener noreferrer"
							target="_blank"
						>
							GitHub
						</a>
					</div>
				</div>
			</aside>
		</div>
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
		max-width: 600px;
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

	/* ── Layout ──────────────────────────────── */
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 280px;
		gap: var(--space-3xl);
		align-items: start;
	}

	/* ── Form error banner ───────────────────── */
	.form-error {
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
		padding: var(--space-md) var(--space-lg);
		margin-bottom: var(--space-lg);
		border: 1px solid #ff5c5c;
		border-radius: var(--radius-md);
		background-color: color-mix(in srgb, #ff5c5c 10%, transparent);
		color: #ff8080;
		font-size: var(--text-sm);
		line-height: 1.5;
	}

	.form-error svg {
		flex-shrink: 0;
		margin-top: 1px;
	}

	/* ── Form ────────────────────────────────── */
	form {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	label {
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--color-text);
	}

	input,
	textarea {
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		color: var(--color-text);
		font-family: inherit;
		font-size: var(--text-base);
		padding: var(--space-sm) var(--space-md);
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast),
			opacity var(--transition-fast);
		width: 100%;
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--color-text-muted);
		opacity: 0.6;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-accent);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 15%, transparent);
	}

	input:disabled,
	textarea:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	textarea {
		resize: vertical;
		min-height: 140px;
	}

	/* ── Submit button ───────────────────────── */
	.submit-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		align-self: flex-start;
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #000;
		background-color: var(--color-accent);
		border: none;
		padding: var(--space-md) var(--space-xl);
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast),
			opacity var(--transition-fast);
		min-width: 160px;
	}

	.submit-btn:hover:not(:disabled) {
		background-color: var(--color-accent-hover);
		transform: translateY(-2px);
	}

	.submit-btn:hover:not(:disabled) svg {
		transform: translateX(3px);
	}

	.submit-btn svg {
		transition: transform var(--transition-fast);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	/* Loading spinner */
	.spinner {
		width: 14px;
		height: 14px;
		border: 2px solid rgba(0, 0, 0, 0.3);
		border-top-color: #000;
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
		flex-shrink: 0;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	/* ── Success ─────────────────────────────── */
	.success {
		display: flex;
		align-items: flex-start;
		gap: var(--space-md);
		padding: var(--space-xl);
		border: 1px solid var(--color-accent);
		border-radius: var(--radius-lg);
		background-color: color-mix(in srgb, var(--color-accent) 8%, transparent);
		color: var(--color-accent);
	}

	.success svg {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.success-title {
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: 4px;
	}

	.success-sub {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}

	/* ── Details sidebar ─────────────────────── */
	.details {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		padding: var(--space-xl);
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}

	.detail-label {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-muted);
		margin-bottom: 4px;
	}

	.detail-value {
		font-size: var(--text-base);
		color: var(--color-text);
	}

	a.detail-value {
		color: var(--color-accent);
		text-decoration: none;
		transition: opacity var(--transition-fast);
	}

	a.detail-value:hover {
		opacity: 0.75;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.detail-link {
		font-size: var(--text-base);
		color: var(--color-text);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		transition: color var(--transition-fast);
	}

	.detail-link::after {
		content: '↗';
		font-size: 0.75em;
		color: var(--color-text-muted);
	}

	.detail-link:hover {
		color: var(--color-accent);
	}

	/* Honeypot — must be invisible but not display:none (bots detect that) */
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	/* ── Responsive ──────────────────────────── */
	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.submit-btn {
			align-self: stretch;
		}
	}
</style>
