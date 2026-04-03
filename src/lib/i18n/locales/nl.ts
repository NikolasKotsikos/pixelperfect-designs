import type { Translations } from '../types';

export const nl: Translations = {
	nav: {
		about: 'Over mij',
		projects: 'Projecten',
		services: 'Diensten',
		cta: 'Neem contact op',
		home: 'Home',
		contact: 'Contact',
		ariaLabel: 'Hoofdnavigatie',
		mobileAriaLabel: 'Mobiele navigatie'
	},
	header: {
		logoAriaLabel: 'PixelPerfect Designs — home',
		logoAlt: 'PixelPerfect Designs logo',
		openMenu: 'Menu openen',
		closeMenu: 'Menu sluiten',
		switchToEnglish: 'Schakel naar Engels',
		switchToDutch: 'Schakel naar Nederlands'
	},
	footer: {
		logoAriaLabel: 'Pixel Perfect Designs — home',
		logoAlt: 'PixelPerfect Designs logo',
		copyright: '© {year} Pixel Perfect Designs',
		socialsAriaLabel: 'Sociale links',
		socialAriaLabel: '{name} — opent in nieuw tabblad'
	},
	hero: {
		eyebrow: 'Frontend Development & Design',
		headline: 'Pixel perfecte websites voor',
		headlineAccent: 'ambitieuze merken',
		sub: 'Gevestigd in Rotterdam. Ik ontwerp en bouw snelle, mooie, conversiegerichte websites — van concept tot productieklare code.',
		ctaPrimary: 'Bekijk mijn werk',
		ctaSecondary: 'Neem contact op',
		statsAriaLabel: 'Snelle feiten',
		stats: [
			{ number: '14+', label: 'Jaar in design' },
			{ number: '3+', label: 'Jaar in dev' },
			{ number: '20+', label: 'Opgeleverde projecten' }
		],
		badges: ['Front-end', 'UX/UI Design', 'Full-stack'],
		scroll: 'scroll'
	},
	projectGrid: {
		eyebrow: 'Geselecteerd werk',
		title: 'Projecten die ertoe doen',
		viewAll: 'Alle projecten bekijken'
	},
	projectCard: {
		liveSiteAriaLabel: 'Bezoek {title} live site',
		liveSiteLabel: 'Live site',
		privateWork: 'Vertrouwelijk werk',
		techsAriaLabel: 'Gebruikte technologieën',
		viewLive: 'Bekijk live site',
		viewLiveAriaLabel: 'Bezoek {title} — opent in nieuw tabblad'
	},
	meta: {
		home: {
			title: 'Pixel Perfect Designs — Frontend Development & Design',
			description:
				'Pixel perfecte websites voor ambitieuze merken. Frontend developer gevestigd in Rotterdam.'
		},
		about: {
			title: 'Over mij — Pixel Perfect Designs',
			description:
				'Frontend developer gevestigd in Rotterdam. Voormalig architect omgeschoold tot developer met 3+ jaar ervaring met het bouwen van responsieve webapplicaties.'
		},
		contact: {
			title: 'Contact — PixelPerfect Designs',
			description:
				'Neem contact op met Nikolas — frontend developer gevestigd in Rotterdam. Beschikbaar voor freelance projecten en fulltime functies.'
		},
		projects: {
			title: 'Projecten — Pixel Perfect Designs',
			description: 'Frontend development en design projecten door Nikolas.'
		},
		services: {
			title: 'Diensten — Pixel Perfect Designs',
			description:
				'Frontend development, UX/UI design en visuele communicatiediensten van Nikolas Kotsikos — gevestigd in Rotterdam.'
		}
	},
	about: {
		eyebrow: 'Over mij',
		headline: 'Van architect tot',
		headlineLine2: 'frontend developer',
		bio: [
			'Ik ben Nikolas — een frontend developer gevestigd in Rotterdam met een achtergrond die de meeste mensen niet verwachten. Voordat ik mijn eerste regel productiecode schreef, heb ik 14 jaar gewerkt als architect in Athene, waarbij ik projecten beheerde van concept tot oplevering.',
			'Die achtergrond is niet verdwenen toen ik van carrière wisselde — het heeft mijn aanpak van frontend werk aangescherpt. Hetzelfde denken dat in de ruimtelijke hiërarchie, materiaalconsistentie en structurele integriteit van een gebouw gaat, vertaalt zich direct naar componentarchitectuur, designsystemen en performante, onderhoudbare code.',
			'Ik woon nu al zo\'n 7 jaar in Rotterdam en werk voornamelijk in TypeScript, Svelte/SvelteKit en React — en bouw interfaces die net zo doordacht zijn onder de motorkap als ze eruitzien op het scherm.'
		],
		photoAlt: 'Nikolas Kotsikos — frontend developer',
		location: 'Rotterdam, NL',
		skillsEyebrow: 'Vaardigheden',
		experienceEyebrow: 'Ervaring',
		educationEyebrow: 'Opleiding',
		personalEyebrow: 'Buiten het werk',
		personal: [
			'Ik luister graag naar goede muziek en speel een deel daarvan zelf op mijn gitaar. Computing is ook een hobby van mij: ik bouw graag pc\'s, kijk coding & tech video\'s en game behoorlijk veel. In de zomermaanden ben ik een fervent lezer en ga ik altijd graag naar een goede film in de bioscoop.',
			'Ik kook ook graag en sta bij vrienden bekend om mijn bolognese en pizza-avonden. Tot slot doe ik als echte nerd graag aan hobby-modelbouw en miniatuurverf van tijd tot tijd, wat mooi aansluit bij mijn liefde voor bordspellen.'
		],
		skills: [
			{
				label: 'Expert',
				items: ['HTML5', 'CSS3 / SCSS', 'JavaScript', 'TypeScript', 'Svelte / SvelteKit', 'Git']
			},
			{ label: 'Gevorderd', items: ['React', 'Figma', 'Storybook', 'jQuery', 'PHP'] },
			{ label: 'Werkende kennis', items: ['Python', 'WordPress', 'Jenkins'] },
			{ label: 'Tools', items: ['VS Code', 'Jira', 'ClickUp', 'Adobe CS'] }
		],
		experience: [
			{
				period: 'Aug 2024 – Aug 2025',
				role: 'Front-end Developer',
				company: 'Meta-Skills',
				location: 'Utrecht, NL',
				type: 'Fulltime · Contract',
				highlights: [
					'Ontworpen en gebouwd responsieve frontend componenten voor de publieke marketingsite.',
					'UX/UI design en prototyping geleid in Figma voor de eigen webapplicatie van het bedrijf.',
					'Type-veilige Svelte/SvelteKit componenten ontwikkeld in TypeScript, waardoor bugrapporten verminderd door strikte typeringsstandaarden.',
					'Visuele regressietests geïmplementeerd met svelte-csf in Storybook, waardoor componentconsistentie gewaarborgd werd over releases.'
				]
			},
			{
				period: 'Feb 2022 – Dec 2023',
				role: 'Front-end Developer',
				company: 'SIDES Benelux',
				location: 'Bosschenhoofd, NL',
				type: 'Fulltime · Vast',
				highlights: [
					'15+ webshop frontends opgeleverd voor restaurantklanten, consistent binnen 2-weekse sprintcycli.',
					'Mobiele winkelwagen-verlating met 25% verminderd door responsieve verbeteringen.',
					'Frontend development van webshops, mobiele apps en zelfbestellingsterminals in HTML/PHTML, SASS & jQuery.',
					'Deployment, code review en mergen.'
				]
			},
			{
				period: 'Sep 2021 – Feb 2022',
				role: 'Front-end Developer',
				company: 'Online Drumles',
				location: 'Den Haag, NL',
				type: 'Fulltime · Stage',
				highlights: [
					'Laadtijd van het platform met 35% geoptimaliseerd door CSS-refactoring en JavaScript-optimalisatie.',
					'Frontend development van het Onlinedrumles educatieve platform.',
					'Aangepaste widget-creatie in PHP en WordPress plugin-onderhoud.'
				]
			},
			{
				period: '2006 – 2018',
				role: 'Architect & Mede-eigenaar',
				company: 'K+K Architects',
				location: 'Athene, Griekenland',
				type: 'Fulltime · Freelance',
				highlights: [
					'20+ architectuurprojecten beheerd en opgeleverd van concept tot voltooiing.',
					'Sterke projectmanagement- en klantcommunicatievaardigheden ontwikkeld die nu direct worden toegepast op ontwikkelwerk.'
				]
			}
		],
		education: [
			{
				period: '2020 – 2021',
				degree: 'Full Stack Web Developer Diploma',
				institution: 'Code Institute',
				location: 'Dublin, Ierland'
			},
			{
				period: '2002 – 2004',
				degree: 'M.Sc. Architectuur — Ecologisch & Duurzaam Ontwerp',
				institution: 'South Bank University',
				location: 'Londen, Engeland'
			},
			{
				period: '1997 – 2002',
				degree: 'B.A. & P.G. Dip. in Architectuur',
				institution: 'South Bank University',
				location: 'Londen, Engeland'
			}
		]
	},
	contact: {
		eyebrow: 'Neem contact op',
		headline: 'Laten we samenwerken',
		intro: 'Heb je een project in gedachten, of wil je gewoon hallo zeggen? Stuur me een berichtje en ik kom binnen één werkdag bij je terug.',
		successTitle: 'Bericht verzonden',
		successSub: 'Bedankt, ik neem binnenkort contact met je op.',
		errorGeneric: 'Uw bericht kon niet worden verzonden. Probeer het opnieuw.',
		errorNetwork:
			'Uw bericht kon niet worden verzonden. Controleer uw verbinding en probeer het opnieuw.',
		labelName: 'Naam',
		placeholderName: 'Jouw naam',
		labelEmail: 'E-mail',
		placeholderEmail: 'jouw@email.com',
		labelMessage: 'Bericht',
		placeholderMessage: 'Vertel me over je project…',
		submit: 'Verstuur bericht',
		submitting: 'Verzenden…',
		detailEmail: 'E-mail',
		detailBasedIn: 'Gevestigd in',
		detailBasedInValue: 'Rotterdam, Nederland',
		detailAvailability: 'Beschikbaarheid',
		detailAvailabilityValue: 'Open voor freelance & fulltime',
		detailLinks: 'Links'
	},
	projects: {
		eyebrow: 'Werk',
		headline: 'Alle projecten',
		intro: 'Een selectie professioneel werk in SaaS-platformen, e-commerce en marketingsites.',
		filterAll: 'Alle',
		filterAriaLabel: 'Projecten filteren op technologie'
	},
	services: {
		eyebrow: 'Wat ik aanbied',
		headline: 'Diensten',
		intro: 'Een gerichte set disciplines — elk geïnformeerd door de anderen. Design informeert de code. Architectuur informeert het design. Het resultaat is werk dat van begin tot eind samenhangt.',
		ctaTitle: 'Heb je een project in gedachten?',
		ctaSub: 'Of je nu een volledige build, een design-vernieuwing of gewoon een tweede mening nodig hebt — ik hoor er graag over.',
		ctaBtn: 'Neem contact op',
		items: [
			{
				number: '01',
				title: 'Softwareontwikkeling',
				description:
					'End-to-end webapplicatieontwikkeling gebouwd op moderne frameworks en TypeScript. Van architectuurbeslissingen tot productie-deployment — schone, onderhoudbare code die schaalt.',
				deliverables: [
					'SvelteKit & React applicaties',
					'TypeScript & strikte type veiligheid',
					'REST & API integratie',
					'Prestatie-optimalisatie',
					'Code review & refactoring'
				]
			},
			{
				number: '02',
				title: 'UX/UI Design',
				description:
					'Gebruikersgericht ontwerp dat onderzoek en implementatie verbindt. Geïnformeerd door een architectonische achtergrond in ruimtelijk redeneren en hiërarchie — interfaces die even goed aanvoelen als ze eruitzien.',
				deliverables: [
					'Wireframing & prototyping',
					'Figma design & componentbibliotheken',
					'Gebruiksbaarheidstesten',
					'Interactieontwerp',
					'Design handoff & documentatie'
				]
			},
			{
				number: '03',
				title: 'Frontend Design',
				description:
					'Pixel-nauwkeurige implementatie van designs in levende, ademende interfaces. De kloof tussen een Figma-bestand en een afgewerkt product — volledig gedicht, met aandacht voor beweging, toegankelijkheid en responsiviteit.',
				deliverables: [
					'Responsieve, mobile-first layouts',
					'CSS designsystemen & tokens',
					'Animatie & micro-interacties',
					'Toegankelijkheid (WCAG 2.1)',
					'Cross-browser compatibiliteit'
				]
			},
			{
				number: '04',
				title: 'Grafisch Design & Visuele Communicatie',
				description:
					'Visuele identiteit en communicatiedesign met het oog voor consistentie van een developer. Middelen die werken over digitaal en print, gebouwd rond een coherente merktaal.',
				deliverables: [
					'Merkidentiteit & logo-ontwerp',
					'Marketing & printmaterialen',
					'Social media assets',
					'Presentatieontwerp',
					'Adobe Creative Suite'
				]
			}
		]
	},
	projectsData: {
		'meta-skills-website': {
			title: 'Marketingwebsite',
			description:
				"De publieke marketingsite ontwikkeld en onderhouden, waarbij herbruikbare UI-componenten werden gebouwd die de immersieve leerproposie van het platform communiceren aan potentiële klanten.",
			role: 'Frontend Developer'
		},
		'meta-skills-dashboard': {
			title: 'Analytics Dashboard',
			description:
				'Het interne analytics dashboard gebouwd dat door cursusadministrators wordt gebruikt om de voortgang van leerders, voltooiingspercentages en betrokkenheidsstatistieken bij te houden.',
			role: 'Frontend Developer'
		},
		'meta-skills-app': {
			title: 'Leerplatform',
			description:
				'Bijgedragen aan de kern lerende-gerichte applicatie — een immersief softskills trainingstool. Gefocust op componentarchitectuur, toegankelijkheid en prestaties op apparaten.',
			role: 'Frontend Developer'
		},
		tacomundo: {
			title: 'E-commerce Webshop',
			description:
				'Een volledige e-commerce webshop ontworpen en gebouwd voor een Rotterdams foodmerk, waardoor het verlaten van de mobiele winkelwagen met 25% werd verminderd door UX-verbeteringen en prestatie-optimalisatie.',
			role: 'Frontend Developer'
		},
		zazalu: {
			title: 'E-commerce Webshop',
			description:
				'Gewerkt aan de frontend van een hospitality management SaaS, waarbij 30+ herbruikbare componenten werden gebouwd voor een interne componentenbibliotheek die wordt gebruikt over meerdere klantimplementaties.',
			role: 'Frontend Developer'
		}
	}
};
