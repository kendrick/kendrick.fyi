import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" {...props}>
		<path
			d="M50 300a50 50 0 0 0 50-50v-50H50a50 50 0 0 0 0 100z"
			style={{
				fill: '#0acf83',
			}}
		/>
		<path
			d="M0 150a50 50 0 0 1 50-50h50v100H50a50 50 0 0 1-50-50z"
			style={{
				fill: '#a259ff',
			}}
		/>
		<path
			d="M0 50A50 50 0 0 1 50 0h50v100H50A50 50 0 0 1 0 50z"
			style={{
				fill: '#f24e1e',
			}}
		/>
		<path
			d="M100 0h50a50 50 0 0 1 0 100h-50V0z"
			style={{
				fill: '#ff7262',
			}}
		/>
		<path
			d="M200 150a50 50 0 1 1-100 0 50 50 0 0 1 100 0z"
			style={{
				fill: '#1abcfe',
			}}
		/>
	</svg>
);
export default SvgComponent;
