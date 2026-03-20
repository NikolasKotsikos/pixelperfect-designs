export type ProjectVisibility = 'public' | 'private';

export type Project = {
	id: string;
	title: string;
	company: string;
	role: string;
	description: string;
	tags: string[];
	visibility: ProjectVisibility;
	featured: boolean;
	image?: string; // path in /static/images/
	liveUrl?: string;
	period: string;
};

export const projects: Project[] = [
	{
		id: 'meta-skills-website',
		title: 'Marketing Website',
		company: 'Meta-Skills',
		role: 'Frontend Developer',
		description:
			"Developed and maintained the public-facing marketing site, building reusable UI components that communicate the platform's immersive learning proposition to prospective clients.",
		tags: ['TypeScript', 'Svelte', 'SCSS', 'Component Library'],
		visibility: 'public',
		featured: true,
		liveUrl: 'https://meta-skills.io',
		period: '2024 – 2025'
	},
	{
		id: 'meta-skills-dashboard',
		title: 'Analytics Dashboard',
		company: 'Meta-Skills',
		role: 'Frontend Developer',
		description:
			'Built the internal analytics dashboard used by course administrators to track learner progress, completion rates, and engagement metrics across the platform.',
		tags: ['TypeScript', 'Svelte', 'Data Visualisation', 'SvelteKit'],
		visibility: 'private',
		featured: true,
		period: '2024 – 2025'
	},
	{
		id: 'meta-skills-app',
		title: 'Learning Platform',
		company: 'Meta-Skills',
		role: 'Frontend Developer',
		description:
			'Contributed to the core learner-facing application — an immersive soft-skills training tool. Focused on component architecture, accessibility, and performance across devices.',
		tags: ['TypeScript', 'Svelte', 'SCSS', 'Accessibility'],
		visibility: 'private',
		featured: false,
		period: '2024 – 2025'
	},
	{
		id: 'tacomundo',
		title: 'E-commerce Webshop',
		company: 'TacoMundo',
		role: 'Frontend Developer',
		description:
			'Designed and built a full e-commerce storefront for a Rotterdam-based food brand, reducing mobile checkout abandonment by 25% through UX improvements and performance optimisation.',
		tags: ['JavaScript', 'JQuery', 'E-commerce', 'UX'],
		visibility: 'public',
		featured: true,
		image: '/images/tacomundo.jpg',
		period: '2022 – 2023'
	},
	{
		id: 'zazalu',
		title: 'E-commerce Webshop',
		company: 'Zazalu',
		role: 'Frontend Developer',
		description:
			'Worked on the frontend of a hospitality management SaaS, building 30+ reusable components for an internal component library used across multiple client deployments.',
		tags: ['JavaScript', 'JQuery', 'E-commerce', 'UX'],
		visibility: 'public',
		featured: false,
		liveUrl: 'https://zazalu.simplywebshop.de/storedata/listStore',
		period: '2022 – 2023'
	}
];

export const featuredProjects = projects.filter((p) => p.featured);
