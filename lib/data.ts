// import React from 'react';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Kind Words',
		hash: '#kind-words',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

const year = new Date().getFullYear();

export const experiencesData = [
	{
		title: 'Role One',
		location: 'Location',
		description: 'Lorem ipsum.',
		// icon: React.createElement(LuGraduationCap),
		date: year,
	},
	{
		title: 'Role Two',
		location: 'Location',
		description: 'Lorem ipsum.',
		// icon: React.createElement(CgWorkAlt),
		date: year,
	},
	{
		title: 'Role Three',
		location: 'Location',
		description: 'Lorem ipsum.',
		// icon: React.createElement(FaReact),
		date: year,
	},
] as const;

export const projectsData = [
	{
		title: 'Compassion Design System',
		description:
			'Compassion International revolutionized its global brand identity with a cutting-edge, token-based multi-brand design system, dramatically enhancing design consistency, slashing development times, and fostering seamless collaboration across 13 independent fundraising offices.',
		// tags: ['One', 'Two', 'Three'],
		projectPage: 'compassion-design-system',
	},
] as const;

export const skillsData = [
	'Design Thinking',
	'Google Design Sprints',
	'Design Systems',
	'UX Research',
	'Usability Testing',
	'Accessibility',
	'Ideation',
	'Interaction Design',
	'Prototyping',
	'Wireframing',
	'Responsive Web Design',
	'Visual Design',
	'Figma',
	'Agile Methodologies',
	'HTML5',
	'CSS',
	'SCSS',
	'TypeScript',
	'JavaScript',
	'ReactJS',
	'A-B/Multivariate Testing',
	'Conversion Rate Optimization (CRO)',
	'Public Speaking',
] as const;

export const kindWordsData = [
	'Design Systems',
	'UX Research',
	'Usability Testing',
	'Design Thinking',
	'Ideation',
	'Interaction Design',
	'Figma',
	'Wireframing',
	'Visual Design',
	'Prototyping',
	'Agile Methodologies',
	'Responsive Web Design',
	'A/B Testing',
	'Conversion Rate Optimization (CRO)',
	'Accessibility',
	'HTML5',
	'CSS',
	'SCSS',
	'JavaScript',
	'ReactJS',
	'Public Speaking',
] as const;
