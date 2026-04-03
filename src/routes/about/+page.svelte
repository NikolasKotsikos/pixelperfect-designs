<script lang="ts">
	import { t } from '$lib/i18n';

	const tr = $derived(t());
</script>

<svelte:head>
	<title>{tr.meta.about.title}</title>
	<meta name="description" content={tr.meta.about.description} />
</svelte:head>

<div class="page">
	<div class="container">
		<!-- ── Intro ───────────────────────────────── -->
		<section class="intro">
			<div class="intro-copy">
				<p class="eyebrow">{tr.about.eyebrow}</p>
				<h1 class="page-title">{tr.about.headline}<br />{tr.about.headlineLine2}</h1>
				<div class="intro-body">
					{#each tr.about.bio as para (para)}
						<p>{para}</p>
					{/each}
				</div>
			</div>

			<div class="intro-photo">
				<div class="photo-frame">
					<img
						src="/images/nikolas.jpg"
						alt={tr.about.photoAlt}
						loading="eager"
					/>
				</div>
				<div class="photo-tag">
					<span class="photo-tag__dot"></span>
					{tr.about.location}
				</div>
			</div>
		</section>

		<hr class="divider" />

		<!-- ── Skills ─────────────────────────────── -->
		<section class="section">
			<div class="section-label">
				<p class="eyebrow">{tr.about.skillsEyebrow}</p>
			</div>
			<div class="section-content">
				<div class="skills-grid">
					{#each tr.about.skills as group (group.label)}
						<div class="skill-group">
							<p class="skill-level">{group.label}</p>
							<ul class="skill-list">
								{#each group.items as skill (skill)}
									<li class="skill-tag">{skill}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<hr class="divider" />

		<!-- ── Experience ─────────────────────────── -->
		<section class="section">
			<div class="section-label">
				<p class="eyebrow">{tr.about.experienceEyebrow}</p>
			</div>
			<div class="section-content">
				<ol class="timeline">
					{#each tr.about.experience as job, i (job.company)}
						<li class="timeline-item" class:timeline-item--arch={i === tr.about.experience.length - 1}>
							<div class="timeline-marker" aria-hidden="true"></div>
							<div class="timeline-body">
								<div class="timeline-header">
									<div>
										<h3 class="timeline-role">{job.role}</h3>
										<p class="timeline-company">
											{job.company}
											<span class="timeline-location">· {job.location}</span>
										</p>
									</div>
									<div class="timeline-meta">
										<span class="timeline-period">{job.period}</span>
										<span class="timeline-type">{job.type}</span>
									</div>
								</div>
								<ul class="timeline-highlights">
									{#each job.highlights as highlight (highlight)}
										<li>{highlight}</li>
									{/each}
								</ul>
							</div>
						</li>
					{/each}
				</ol>
			</div>
		</section>

		<hr class="divider" />

		<!-- ── Education ──────────────────────────── -->
		<section class="section">
			<div class="section-label">
				<p class="eyebrow">{tr.about.educationEyebrow}</p>
			</div>
			<div class="section-content">
				<ol class="edu-list">
					{#each tr.about.education as item (item.degree)}
						<li class="edu-item">
							<span class="edu-period">{item.period}</span>
							<div>
								<p class="edu-degree">{item.degree}</p>
								<p class="edu-institution">{item.institution} · {item.location}</p>
							</div>
						</li>
					{/each}
				</ol>
			</div>
		</section>

		<hr class="divider" />

		<!-- ── Personal ───────────────────────────── -->
		<section class="section section--personal">
			<div class="section-label">
				<p class="eyebrow">{tr.about.personalEyebrow}</p>
			</div>
			<div class="section-content">
				{#each tr.about.personal as para (para)}
					<p class="personal-text">{para}</p>
				{/each}
			</div>
		</section>
	</div>
</div>

<style>
	.page {
		padding-top: calc(72px + var(--space-3xl));
		padding-bottom: var(--space-3xl);
		min-height: 100dvh;
	}

	/* ── Shared ──────────────────────────────── */
	.eyebrow {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
	}

	.divider {
		border: none;
		border-top: 1px solid var(--color-border);
		margin-block: var(--space-3xl);
	}

	/* ── Intro ───────────────────────────────── */
	.intro {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: var(--space-3xl);
		align-items: start;
	}

	.page-title {
		font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: var(--color-text);
		margin-bottom: var(--space-xl);
	}

	.intro-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.intro-body p {
		font-size: var(--text-lg);
		color: var(--color-text-muted);
		line-height: 1.8;
	}

	/* Photo */
	.intro-photo {
		top: calc(72px + var(--space-xl));
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.photo-frame {
		width: 100%;
		aspect-ratio: 3 / 4;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--color-border);
		background-color: var(--color-surface);
	}

	.photo-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
	}

	.photo-tag {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		align-self: flex-start;
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 100px;
		padding: var(--space-xs) var(--space-md);
	}

	.photo-tag__dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background-color: var(--color-accent);
		animation: pulse 2s ease-in-out infinite;
		flex-shrink: 0;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(0.85);
		}
	}

	/* ── Section layout ──────────────────────── */
	.section {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: var(--space-2xl);
		align-items: start;
	}

	.section-label {
		padding-top: 3px; /* optical alignment with content */
	}

	/* ── Skills ──────────────────────────────── */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-xl);
	}

	.skill-level {
		font-size: var(--text-sm);
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: var(--space-sm);
	}

	.skill-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		list-style: none;
	}

	.skill-tag {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 4px 12px;
		border-radius: 100px;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text-muted);
		transition:
			border-color var(--transition-fast),
			color var(--transition-fast);
	}

	.skill-tag:hover {
		border-color: var(--color-accent);
		color: var(--color-text);
	}

	/* ── Timeline ────────────────────────────── */
	.timeline {
		list-style: none;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	/* Vertical line */
	.timeline::before {
		content: '';
		position: absolute;
		top: 8px;
		bottom: 8px;
		left: 7px;
		width: 1px;
		background: linear-gradient(
			to bottom,
			var(--color-accent),
			var(--color-border) 70%,
			transparent
		);
	}

	.timeline-item {
		display: flex;
		gap: var(--space-xl);
		padding-bottom: var(--space-2xl);
		position: relative;
	}

	.timeline-item:last-child {
		padding-bottom: 0;
	}

	.timeline-marker {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: var(--color-bg);
		border: 2px solid var(--color-accent);
		flex-shrink: 0;
		margin-top: 3px;
		transition: background-color var(--transition-fast);
	}

	.timeline-item--arch .timeline-marker {
		border-color: var(--color-border);
	}

	.timeline-item:hover .timeline-marker {
		background-color: var(--color-accent);
	}

	.timeline-body {
		flex: 1;
		padding-bottom: var(--space-xl);
		border-bottom: 1px solid var(--color-border);
	}

	.timeline-item:last-child .timeline-body {
		border-bottom: none;
		padding-bottom: 0;
	}

	.timeline-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--space-lg);
		margin-bottom: var(--space-md);
		flex-wrap: wrap;
	}

	.timeline-role {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--color-text);
		line-height: 1.2;
	}

	.timeline-company {
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--color-accent);
		margin-top: 2px;
	}

	.timeline-location {
		color: var(--color-text-muted);
		font-weight: 400;
	}

	.timeline-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 4px;
		flex-shrink: 0;
	}

	.timeline-period {
		font-size: var(--text-sm);
		font-family: var(--font-mono);
		color: var(--color-text-muted);
		white-space: nowrap;
	}

	.timeline-type {
		font-size: 0.7rem;
		color: var(--color-text-muted);
		letter-spacing: 0.04em;
	}

	.timeline-highlights {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.timeline-highlights li {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		line-height: 1.6;
		padding-left: var(--space-lg);
		position: relative;
	}

	.timeline-highlights li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--color-accent);
		font-size: 0.7rem;
		top: 3px;
	}

	/* ── Education ───────────────────────────── */
	.edu-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.edu-item {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: var(--space-lg);
		align-items: start;
	}

	.edu-period {
		font-size: var(--text-sm);
		font-family: var(--font-mono);
		color: var(--color-text-muted);
		padding-top: 3px;
	}

	.edu-degree {
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--color-text);
		line-height: 1.4;
	}

	.edu-institution {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		margin-top: 4px;
	}

	/* ── Personal ────────────────────────────── */
	.section--personal .section-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.personal-text {
		font-size: var(--text-lg);
		color: var(--color-text-muted);
		line-height: 1.8;
	}

	/* ── Responsive ──────────────────────────── */
	@media (max-width: 1024px) {
		.intro {
			grid-template-columns: 1fr 300px;
			gap: var(--space-2xl);
		}
	}

	@media (max-width: 768px) {
		.intro {
			grid-template-columns: 1fr;
		}

		.intro-photo {
			position: static;
			max-width: 280px;
		}

		.section {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.timeline-header {
			flex-direction: column;
			gap: var(--space-sm);
		}

		.timeline-meta {
			align-items: flex-start;
		}

		.edu-item {
			grid-template-columns: 1fr;
			gap: var(--space-xs);
		}
	}
</style>
