export type Locale = 'en' | 'nl';

export type ExperienceItem = {
	period: string;
	role: string;
	company: string;
	location: string;
	type: string;
	highlights: string[];
};

export type EducationItem = {
	period: string;
	degree: string;
	institution: string;
	location: string;
};

export type SkillGroup = {
	label: string;
	items: string[];
};

export type ServiceItem = {
	number: string;
	title: string;
	description: string;
	deliverables: string[];
};

export type ProjectTranslation = {
	title: string;
	description: string;
	role: string;
};

export type Translations = {
	nav: {
		about: string;
		projects: string;
		services: string;
		cta: string;
		home: string;
		contact: string;
		ariaLabel: string;
		mobileAriaLabel: string;
	};
	header: {
		logoAriaLabel: string;
		logoAlt: string;
		openMenu: string;
		closeMenu: string;
		switchToEnglish: string;
		switchToDutch: string;
	};
	footer: {
		logoAriaLabel: string;
		logoAlt: string;
		copyright: string; // contains {year} placeholder
		socialsAriaLabel: string;
		socialAriaLabel: string; // contains {name} placeholder
	};
	hero: {
		eyebrow: string;
		headline: string;
		headlineAccent: string;
		sub: string;
		ctaPrimary: string;
		ctaSecondary: string;
		statsAriaLabel: string;
		stats: Array<{ number: string; label: string }>;
		badges: string[];
		scroll: string;
	};
	projectGrid: {
		eyebrow: string;
		title: string;
		viewAll: string;
	};
	projectCard: {
		liveSiteAriaLabel: string; // contains {title} placeholder
		liveSiteLabel: string;
		privateWork: string;
		techsAriaLabel: string;
		viewLive: string;
		viewLiveAriaLabel: string; // contains {title} placeholder
	};
	meta: {
		home: { title: string; description: string };
		about: { title: string; description: string };
		contact: { title: string; description: string };
		projects: { title: string; description: string };
		services: { title: string; description: string };
	};
	about: {
		eyebrow: string;
		headline: string;
		headlineLine2: string;
		bio: string[];
		photoAlt: string;
		location: string;
		skillsEyebrow: string;
		experienceEyebrow: string;
		educationEyebrow: string;
		personalEyebrow: string;
		personal: string[];
		skills: SkillGroup[];
		experience: ExperienceItem[];
		education: EducationItem[];
	};
	contact: {
		eyebrow: string;
		headline: string;
		intro: string;
		successTitle: string;
		successSub: string;
		errorGeneric: string;
		errorNetwork: string;
		labelName: string;
		placeholderName: string;
		labelEmail: string;
		placeholderEmail: string;
		labelMessage: string;
		placeholderMessage: string;
		submit: string;
		submitting: string;
		detailEmail: string;
		detailBasedIn: string;
		detailBasedInValue: string;
		detailAvailability: string;
		detailAvailabilityValue: string;
		detailLinks: string;
	};
	projects: {
		eyebrow: string;
		headline: string;
		intro: string;
		filterAll: string;
		filterAriaLabel: string;
	};
	services: {
		eyebrow: string;
		headline: string;
		intro: string;
		ctaTitle: string;
		ctaSub: string;
		ctaBtn: string;
		items: ServiceItem[];
	};
	projectsData: Record<string, ProjectTranslation>;
};
