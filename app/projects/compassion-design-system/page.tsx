import Content from './content';

const meta: HeadMetadataProps = {
	name: 'Kendrick Arnett',
	title: `Kendrick Arnett | Compassion Design System`,
	description:
		'Enhancing design consistency, slashing development time, and fostering seamless collaboration with a cutting edge, token-driven design system.',
	path: '/projects/compassion-design-system',
	imagePath: '/og/projects/compassion-design-system.jpg',
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const url =
	!meta.path.startsWith('/') ?
		`${BASE_URL}/${meta.path}`
	:	`${BASE_URL}${meta.path}`;

const imageUrl =
	!meta.imagePath.startsWith('/') ?
		`${BASE_URL}/${meta.imagePath}`
	:	`${BASE_URL}${meta.imagePath}`;

export const metadata = {
	title: meta.title,
	description: meta.description,
	keywords: ['UX leadership', 'UX design'],
	authors: [{ name: meta.name, url: url }],
	creator: 'Kendrick Arnett',
	openGraph: {
		title: meta.title,
		description: meta.description,
		url: url,
		siteName: 'kendrick.fyi',
		images: [
			{
				url: imageUrl,
				width: 1200,
				height: 675,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: meta.title,
		description: meta.description,
		creator: '@kendrick',
		images: [imageUrl],
	},
};

const Projects = () => {
	return <Content />;
};

export default Projects;
