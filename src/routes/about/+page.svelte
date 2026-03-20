<script lang="ts">
	// Work experience driven by data so it's easy to update
	const experience = [
		{
			period: 'Aug 2024 – Aug 2025',
			role: 'Front-end Developer',
			company: 'Meta-Skills',
			location: 'Utrecht, NL',
			type: 'Full-time · Contract',
			highlights: [
				'Designed and built responsive frontend components for the public marketing site.',
				"Led UX/UI design and prototyping in Figma for the company's proprietary web application.",
				'Developed type-safe Svelte/SvelteKit components in TypeScript, reducing bug reports through strict typing standards.',
				'Implemented visual regression testing with svelte-csf in Storybook, ensuring component consistency across releases.'
			]
		},
		{
			period: 'Feb 2022 – Dec 2023',
			role: 'Front-end Developer',
			company: 'SIDES Benelux',
			location: 'Bosschenhoofd, NL',
			type: 'Full-time · Permanent',
			highlights: [
				'Delivered 15+ webshop frontends for restaurant clients, consistently meeting 2-week sprint cycles.',
				'Reduced mobile checkout abandonment by 25% through responsive design improvements.',
				'Front-end development of webshops, mobile apps and self-order terminals in HTML/PHTML, SASS & jQuery.',
				'Deployment, code review and merging.'
			]
		},
		{
			period: 'Sep 2021 – Feb 2022',
			role: 'Front-end Developer',
			company: 'Online Drumles',
			location: 'The Hague, NL',
			type: 'Full-time · Internship',
			highlights: [
				'Optimized platform load time by 35% through CSS refactoring and JavaScript optimization.',
				'Front-end development of the Onlinedrumles educational platform.',
				'Custom widget creation in PHP and WordPress plugin maintenance.'
			]
		},
		{
			period: '2006 – 2018',
			role: 'Architect & Co-owner',
			company: 'K+K Architects',
			location: 'Athens, Greece',
			type: 'Full-time · Freelance',
			highlights: [
				'Managed and delivered 20+ architectural projects from concept to completion.',
				'Developed strong project management and client communication skills now applied directly to development work.'
			]
		}
	];

	const skills = {
		Expert: ['HTML5', 'CSS3 / SCSS', 'JavaScript', 'TypeScript', 'Svelte / SvelteKit', 'Git'],
		Advanced: ['React', 'Figma', 'Storybook', 'jQuery', 'PHP'],
		'Working Knowledge': ['Python', 'WordPress', 'Jenkins'],
		Tools: ['VS Code', 'Jira', 'ClickUp', 'Adobe CS']
	};

	const education = [
		{
			period: '2020 – 2021',
			degree: 'Full Stack Web Developer Diploma',
			institution: 'Code Institute',
			location: 'Dublin, Ireland'
		},
		{
			period: '2002 – 2004',
			degree: 'M.Sc. Architecture — Ecological & Sustainable Design',
			institution: 'South Bank University',
			location: 'London, England'
		},
		{
			period: '1997 – 2002',
			degree: 'B.A. & P.G. Dip. in Architecture',
			institution: 'South Bank University',
			location: 'London, England'
		}
	];
</script>

<svelte:head>
	<title>About — Pixel Perfect Designs</title>
	<meta
		name="description"
		content="Frontend developer based in Rotterdam. Former architect turned developer with 3+ years building responsive web applications."
	/>
</svelte:head>

<div class="page">
	<div class="container">
		<!-- ── Intro ───────────────────────────────── -->
		<section class="intro">
			<div class="intro-copy">
				<p class="eyebrow">About me</p>
				<h1 class="page-title">Architect turned<br />frontend developer</h1>
				<div class="intro-body">
					<p>
						I'm Nikolas — a frontend developer based in Rotterdam with a background that most people
						don't expect. Before writing a single line of production code, I spent 14 years as a
						practising architect in Athens, managing projects from concept through to construction.
					</p>
					<p>
						That background didn't disappear when I switched careers — it sharpened how I approach
						frontend work. The same thinking that goes into a building's spatial hierarchy, material
						consistency, and structural integrity maps directly onto component architecture, design
						systems, and performant, maintainable code.
					</p>
					<p>
						I've been living in Rotterdam for around 7 years now, and I work primarily in
						TypeScript, Svelte/SvelteKit, and React — building interfaces that are as considered
						under the hood as they look on screen.
					</p>
				</div>
			</div>

			<div class="intro-photo">
				<div class="photo-frame">
					<img
						src="/images/nikolas.jpg"
						alt="Nikolas Kotsikos — frontend developer"
						loading="eager"
					/>
				</div>
				<div class="photo-tag">
					<span class="photo-tag__dot"></span>
					Rotterdam, NL
				</div>
			</div>
		</section>

		<hr class="divider" />

		<!-- ── Skills ─────────────────────────────── -->
		<section class="section">
			<div class="section-label">
				<p class="eyebrow">Skills</p>
			</div>
			<div class="section-content">
				<div class="skills-grid">
					{#each Object.entries(skills) as [level, items] (level)}
						<div class="skill-group">
							<p class="skill-level">{level}</p>
							<ul class="skill-list">
								{#each items as skill (skill)}
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
				<p class="eyebrow">Experience</p>
			</div>
			<div class="section-content">
				<ol class="timeline">
					{#each experience as job, i (job.company)}
						<li class="timeline-item" class:timeline-item--arch={i === experience.length - 1}>
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
				<p class="eyebrow">Education</p>
			</div>
			<div class="section-content">
				<ol class="edu-list">
					{#each education as item (item.degree)}
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
				<p class="eyebrow">Outside of work</p>
			</div>
			<div class="section-content">
				<p class="personal-text">
					I really enjoy listening to good music, and playing some of it on my guitar. 
					Computing is also a hobby for me as I enjoy building PCs, watching coding & tech videos, 
					and gaming quite a lot. I become a voracious reader	during the summer months and I am 
					always interested in watching a good film on the big screen.
				</p>
				<p class="personal-text">
					I also like cooking, and I am known amongst friends for my bolognese and pizza nights.
					Last but not least, being a bit of a geek I also like to do some hobby moddeling and 
					miniature painting from time to time, something that ties neatly with my love for board 
					games.
				</p>			
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
