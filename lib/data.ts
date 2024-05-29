import corpcommentImg from '@/public/corpcomment.png';
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
		name: 'Testimonials',
		hash: '#testimonials',
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
		description: 'Description.',
		tags: ['One', 'Two', 'Three'],
		imageUrl: corpcommentImg,
		imageAltText: 'Compassion Design System screenshot',
		projectPage: 'compassion-design-system',
	},
] as const;

export const skillsData = [
	'Design Thinking',
	'Usability Testing',
	'Ideation',
	'Wireframing',
	'Visual Design',
	'Design Systems',
	'UX Research',
	'Accessibility',
	'Responsive Web Design',
	'Interaction Design',
	'Figma',
	'Prototyping',
	'Agile Methodologies',
	'A-B/Multivariate Testing',
	'Conversion Rate Optimization (CRO)',
	'HTML5',
	'CSS',
	'SCSS',
	'JavaScript',
	'ReactJS',
	'Public Speaking',
] as const;

export const testimonialsData = [
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
