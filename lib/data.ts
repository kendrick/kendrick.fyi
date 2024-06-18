// import React from 'react';

export const pageLinks = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Projects',
		href: '/projects',
	},
	{
		name: 'Kind Words',
		href: '/kind-words',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
	{
		name: 'Résumé',
		href: '/resume',
	},
];

export const year = new Date().getFullYear();

export const projectsData = [
	{
		title: 'Compassion Design System',
		description:
			'Compassion International revolutionized its global brand identity with a cutting-edge, token-based multi-brand design system, dramatically enhancing design consistency, slashing development times, and fostering seamless collaboration across 13 independent fundraising offices.',
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
	'A/B & Multivariate Testing',
	'Conversion Rate Optimization (CRO)',
	'Public Speaking',
] as const;

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
