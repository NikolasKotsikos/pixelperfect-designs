import type { Translations } from '../types';

export const en: Translations = {
	nav: {
		about: 'About',
		projects: 'Projects',
		services: 'Services',
		cta: "Let's talk",
		home: 'Home',
		contact: 'Contact',
		ariaLabel: 'Main navigation',
		mobileAriaLabel: 'Mobile navigation'
	},
	header: {
		logoAriaLabel: 'PixelPerfect Designs — home',
		logoAlt: 'PixelPerfect Designs logo',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		switchToEnglish: 'Switch to English',
		switchToDutch: 'Switch to Dutch'
	},
	footer: {
		logoAriaLabel: 'Pixel Perfect Designs — home',
		logoAlt: 'PixelPerfect Designs logo',
		copyright: '© {year} Pixel Perfect Designs',
		socialsAriaLabel: 'Social links',
		socialAriaLabel: '{name} — opens in new tab'
	},
	hero: {
		eyebrow: 'Frontend Development & Design',
		headline: 'Pixel perfect websites for',
		headlineAccent: 'ambitious brands',
		sub: 'Based in Rotterdam. I design and build fast, beautiful, conversion-focused websites — from concept to production-ready code.',
		ctaPrimary: 'View my work',
		ctaSecondary: "Let's talk",
		statsAriaLabel: 'Quick facts',
		stats: [
			{ number: '14+', label: 'Years in design' },
			{ number: '3+', label: 'Years in dev' },
			{ number: '20+', label: 'Projects shipped' }
		],
		badges: ['Front-end', 'UX/UI Design', 'Full-stack'],
		scroll: 'scroll'
	},
	projectGrid: {
		eyebrow: 'Selected work',
		title: 'Projects that matter',
		viewAll: 'View all projects'
	},
	projectCard: {
		liveSiteAriaLabel: 'Visit {title} live site',
		liveSiteLabel: 'Live site',
		privateWork: 'Private work',
		techsAriaLabel: 'Technologies used',
		viewLive: 'View live site',
		viewLiveAriaLabel: 'Visit {title} — opens in new tab'
	},
	meta: {
		home: {
			title: 'Pixel Perfect Designs — Frontend Development & Design',
			description:
				'Pixel perfect websites for ambitious brands. Frontend developer based in Rotterdam.'
		},
		about: {
			title: 'About — Pixel Perfect Designs',
			description:
				'Frontend developer based in Rotterdam. Former architect turned developer with 3+ years building responsive web applications.'
		},
		contact: {
			title: 'Contact — PixelPerfect Designs',
			description:
				'Get in touch with Nikolas — frontend developer based in Rotterdam. Available for freelance projects and full-time roles.'
		},
		projects: {
			title: 'Projects — Pixel Perfect Designs',
			description: 'Frontend development and design projects by Nikolas.'
		},
		services: {
			title: 'Services — Pixel Perfect Designs',
			description:
				'Frontend development, UX/UI design, and visual communications services from Nikolas Kotsikos — based in Rotterdam.'
		}
	},
	about: {
		eyebrow: 'About me',
		headline: 'Architect turned',
		headlineLine2: 'frontend developer',
		bio: [
			"I'm Nikolas — a frontend developer based in Rotterdam with a background that most people don't expect. Before writing a single line of production code, I spent 14 years as a practising architect in Athens, managing projects from concept through to construction.",
			"That background didn't disappear when I switched careers — it sharpened how I approach frontend work. The same thinking that goes into a building's spatial hierarchy, material consistency, and structural integrity maps directly onto component architecture, design systems, and performant, maintainable code.",
			"I've been living in Rotterdam for around 7 years now, and I work primarily in TypeScript, Svelte/SvelteKit, and React — building interfaces that are as considered under the hood as they look on screen."
		],
		photoAlt: 'Nikolas Kotsikos — frontend developer',
		location: 'Rotterdam, NL',
		skillsEyebrow: 'Skills',
		experienceEyebrow: 'Experience',
		educationEyebrow: 'Education',
		personalEyebrow: 'Outside of work',
		personal: [
			'I really enjoy listening to good music, and playing some of it on my guitar. Computing is also a hobby for me as I enjoy building PCs, watching coding & tech videos, and gaming quite a lot. I become a voracious reader during the summer months and I am always interested in watching a good film on the big screen.',
			'I also like cooking, and I am known amongst friends for my bolognese and pizza nights. Last but not least, being a bit of a geek I also like to do some hobby moddeling and miniature painting from time to time, something that ties neatly with my love for board games.'
		],
		skills: [
			{
				label: 'Expert',
				items: ['HTML5', 'CSS3 / SCSS', 'JavaScript', 'TypeScript', 'Svelte / SvelteKit', 'Git']
			},
			{ label: 'Advanced', items: ['React', 'Figma', 'Storybook', 'jQuery', 'PHP'] },
			{ label: 'Working Knowledge', items: ['Python', 'WordPress', 'Jenkins'] },
			{ label: 'Tools', items: ['VS Code', 'Jira', 'ClickUp', 'Adobe CS'] }
		],
		experience: [
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
		],
		education: [
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
		]
	},
	contact: {
		eyebrow: 'Get in touch',
		headline: "Let's work together",
		intro: "Have a project in mind, or just want to say hello? Drop me a message and I'll get back to you within one business day.",
		successTitle: 'Message sent',
		successSub: "Thanks, I'll be in touch shortly.",
		errorGeneric: 'Could not send your message. Please try again.',
		errorNetwork: 'Could not send your message. Please check your connection and try again.',
		labelName: 'Name',
		placeholderName: 'Your name',
		labelEmail: 'Email',
		placeholderEmail: 'your@email.com',
		labelMessage: 'Message',
		placeholderMessage: 'Tell me about your project…',
		submit: 'Send message',
		submitting: 'Sending…',
		detailEmail: 'Email',
		detailBasedIn: 'Based in',
		detailBasedInValue: 'Rotterdam, Netherlands',
		detailAvailability: 'Availability',
		detailAvailabilityValue: 'Open to freelance & full-time',
		detailLinks: 'Links'
	},
	projects: {
		eyebrow: 'Work',
		headline: 'All projects',
		intro: 'A selection of professional work across SaaS platforms, e-commerce, and marketing sites.',
		filterAll: 'All',
		filterAriaLabel: 'Filter projects by technology'
	},
	services: {
		eyebrow: 'What I offer',
		headline: 'Services',
		intro: 'A focused set of disciplines — each one informed by the others. Design informs the code. Architecture informs the design. The result is work that holds together end to end.',
		ctaTitle: 'Have a project in mind?',
		ctaSub: "Whether you need a full build, a design refresh, or just a second opinion — I'd love to hear about it.",
		ctaBtn: 'Get in touch',
		items: [
			{
				number: '01',
				title: 'Software Development',
				description:
					'End-to-end web application development built on modern frameworks and TypeScript. From architecture decisions to production deployment — clean, maintainable code that scales.',
				deliverables: [
					'SvelteKit & React applications',
					'TypeScript & strict type safety',
					'REST & API integration',
					'Performance optimisation',
					'Code review & refactoring'
				]
			},
			{
				number: '02',
				title: 'UX/UI Design',
				description:
					'User-centred design that bridges research and implementation. Informed by an architectural background in spatial reasoning and hierarchy — interfaces that feel as good as they look.',
				deliverables: [
					'Wireframing & prototyping',
					'Figma design & component libraries',
					'Usability testing',
					'Interaction design',
					'Design handoff & documentation'
				]
			},
			{
				number: '03',
				title: 'Frontend Design',
				description:
					'Pixel-precise implementation of designs into living, breathing interfaces. The gap between a Figma file and a finished product — closed completely, with attention to motion, accessibility, and responsiveness.',
				deliverables: [
					'Responsive, mobile-first layouts',
					'CSS design systems & tokens',
					'Animation & micro-interactions',
					'Accessibility (WCAG 2.1)',
					'Cross-browser compatibility'
				]
			},
			{
				number: '04',
				title: 'Graphic Design & Visual Communications',
				description:
					"Visual identity and communication design with a developer's eye for consistency. Assets that work across digital and print, built around a coherent brand language.",
				deliverables: [
					'Brand identity & logo design',
					'Marketing & print materials',
					'Social media assets',
					'Presentation design',
					'Adobe Creative Suite'
				]
			}
		]
	},
	projectsData: {
		'meta-skills-website': {
			title: 'Marketing Website',
			description:
				"Developed and maintained the public-facing marketing site, building reusable UI components that communicate the platform's immersive learning proposition to prospective clients.",
			role: 'Frontend Developer'
		},
		'meta-skills-dashboard': {
			title: 'Analytics Dashboard',
			description:
				'Built the internal analytics dashboard used by course administrators to track learner progress, completion rates, and engagement metrics across the platform.',
			role: 'Frontend Developer'
		},
		'meta-skills-app': {
			title: 'Learning Platform',
			description:
				'Contributed to the core learner-facing application — an immersive soft-skills training tool. Focused on component architecture, accessibility, and performance across devices.',
			role: 'Frontend Developer'
		},
		tacomundo: {
			title: 'E-commerce Webshop',
			description:
				'Designed and built a full e-commerce storefront for a Rotterdam-based food brand, reducing mobile checkout abandonment by 25% through UX improvements and performance optimisation.',
			role: 'Frontend Developer'
		},
		zazalu: {
			title: 'E-commerce Webshop',
			description:
				'Worked on the frontend of a hospitality management SaaS, building 30+ reusable components for an internal component library used across multiple client deployments.',
			role: 'Frontend Developer'
		}
	}
};
