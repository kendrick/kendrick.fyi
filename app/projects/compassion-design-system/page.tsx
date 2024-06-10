'use client';

import sharedProjectStyles from '@/app/projects/project.module.css';
import Prose from '@/components/layout/Prose';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import 'yet-another-react-lightbox/styles.css';
import styles from './styles.module.css';

import usePlatform from '@/lib/hooks/usePlatform';

import fragmentation01 from './images/fragmentation/01.png';
import fragmentation02 from './images/fragmentation/02.png';
import fragmentation03 from './images/fragmentation/03.png';
import fragmentation04 from './images/fragmentation/04.png';
import fragmentation05 from './images/fragmentation/05.png';
import fragmentation06 from './images/fragmentation/06.png';
import fragmentation07 from './images/fragmentation/07.png';
import fragmentation08 from './images/fragmentation/08.png';

import building01 from './images/building-the-cds/workflow.jpg';

import audit01 from './images/research-discovery/cds-audit-buttons.png';
import audit02 from './images/research-discovery/cds-audit-cards.png';

import interviews01 from './images/research-discovery/cds-user-interviews-highlights.png';

import visionToLife02 from './images/vision-to-life/dwc-desktop.png';
import visionToLife01 from './images/vision-to-life/dwc-mobile.png';

import FYIGrid from '@/components/FYIGrid';
import Switcher from '@/components/layout/Switcher';
import WithSidebar from '@/components/layout/WithSidebar';

export default function DesignSystem() {
	const zoomRef = React.useRef(null);

	const imagesFragmentation = [
		{
			src: fragmentation01,
			alt: '',
		},
		{
			src: fragmentation02,
			alt: '',
		},
		{
			src: fragmentation03,
			alt: '',
		},
		{
			src: fragmentation04,
			alt: '',
		},
		{
			src: fragmentation05,
			alt: '',
		},
		{
			src: fragmentation06,
			alt: '',
		},
		{
			src: fragmentation07,
			alt: '',
		},
		{
			src: fragmentation08,
			alt: '',
		},
	];

	const imagesBuilding = [{ src: building01, alt: '' }];

	const imagesInterviews = [{ src: interviews01, alt: '' }];

	const imagesAudit = [
		{ src: audit01, alt: '' },
		{ src: audit02, alt: '' },
	];

	const imagesVisionToLife = [
		{ src: visionToLife01, alt: '' },
		{ src: visionToLife02, alt: '' },
	];

	const imgWidthInSidebar = 'clamp(20rem, 18rem + 10vw, 30rem)';
	const platform = usePlatform();
	return (
		<main className={clsx([sharedProjectStyles.project, styles.project])}>
			<Prose>
				<Image
					alt=""
					src="https://picsum.photos/800/200"
					height={200}
					width={800}
				/>
				<h1>Compassion Design System</h1>
				<h2>Introduction</h2>
				<p>
					Scaling a unified brand identity was a significant challenge at
					Compassion International, a global organization with 13 independent
					fundraising offices. As the Senior Manager of UX, I envisioned and
					architected a token-based, multi-brand design system. We built the
					Compassion Design System to accelerate the design and development
					process and address fragmentation across Compassion’s diverse global
					offices.
				</p>
				<h2>Problem Statement</h2>
				<span>Unraveling the Challenges</span>
				<p>
					Compassion’s decentralized corporate structure makes coordination
					among offices challenging. While it allows each office to nimbly adapt
					to its local conditions, it also leaves each office responsible for
					interpreting and implementing Compassion’s brand. Over time, this
					resulted in a fragmented brand and visual identity that left
					Compassion as a whole less capable of leveraging its internal design
					and development expertise because teams constantly reinvented the
					wheel. Compassion’s ongoing multi-year brand overhaul compounded this
					issue, which called for a unified global voice to solidify its brand
					identity.
				</p>
				<FYIGrid
					images={imagesFragmentation}
					itemWidth="6rem"
					caption="Eight homepages, eight brands."
				></FYIGrid>
				<h2>Research and Discovery</h2>
				<span>Delving into the Details</span>
				<WithSidebar sidebarOnRight sidebarWidth={imgWidthInSidebar}>
					<p>
						To fully grasp the complexity of this global challenge, we embarked
						on an extensive research phase. We gathered feedback from
						development, design, and marketing teams across the globe through
						surveys and one-on-one interviews. This research revealed a diverse
						landscape: some offices had fully staffed design and development
						teams, while others consisted of just one or two marketers who
						juggled multiple roles, including web management. One office even
						had only a full-time staff of two for all operations, including
						fundraising and events.
					</p>
					<FYIGrid
						images={imagesInterviews}
						caption="Analysis of one-on-one user interviews."
					></FYIGrid>
				</WithSidebar>
				<p>
					We followed this with a global component and technology audit, which
					further underscored the extent of the existing fragmentation. Some
					partners used React, others were on WordPress, and one was on .NET.
					Many had plans to migrate to NextJS or to introduce a mobile app. This
					diversity underscored the need for a flexible and adaptable design
					system.
				</p>
				<Switcher threshold="992px">
					<div
						style={{ aspectRatio: '16 / 9' }}
						className={clsx(
							styles['app-frame'],
							platform === 'Mac' ? styles.mac : styles.win,
							styles.scrolling,
							styles.centered,
						)}
						data-title="Component Audit • 109 Button styles"
					>
						<div style={{ padding: 0 }}>
							<Image src={audit01} alt="" />
						</div>
					</div>
					<div
						style={{ aspectRatio: '16 / 9' }}
						className={clsx(
							styles['app-frame'],
							platform === 'Mac' ? styles.mac : styles.win,
							styles.scrolling,
							styles.centered,
						)}
						data-title="Component Audit • 23 Card styles"
					>
						<div style={{ padding: 0 }}>
							<Image src={audit02} alt="" />
						</div>
					</div>
					{/* <OverflowContainer
						src={audit01}
						alt="Project Image"
						containerHeight={812}
						containerWidth={375}
					/>
					<FYIGrid
						// images={imagesAudit}
						images={[audit02]}
						itemWidth="6rem"
						caption="Partial audit results: 109 Button styles,  homepages, 23 Card styles."
					></FYIGrid> */}
				</Switcher>
				<h2>Strategic Vision</h2>
				<span>Crafting the Design System Blueprint</span>
				<p>
					Our strategy was clear: we aimed to create a design system with vast
					flexibility and adaptability. This system was architected to empower
					marketers’ creativity across Compassion’s global network while setting
					a clear vision for unification. Given the ongoing brand overhaul, the
					system needed to be adaptable, allowing for effortless flow from
					design to development as the brand evolved. Design tokens emerged as a
					critical enabler of our solution, ensuring the system was genuinely
					future-proof and enabling flexibility where designers needed it.
				</p>
				<WithSidebar sidebarOnRight sidebarWidth={imgWidthInSidebar}>
					<aside className={sharedProjectStyles.aside}>
						<h3 className={sharedProjectStyles.aside__heading}>
							What are Design Tokens?
						</h3>
						<p>
							Design tokens are the tiniest pieces of a design system that store
							design-related information. Think of them as variables that define
							and store the values for design elements, such as colors,
							typography, spacing, and more. They help bridge design and
							development, ensuring the same design decisions are implemented
							consistently across different tools, platforms, and devices.
						</p>
					</aside>
					<div className={styles.hero__image}>====== Tokens ======</div>
				</WithSidebar>
				<h2>Building Buy-In</h2>
				<span>Steering the Cruise Ship</span>
				<p>
					The design and development of the Compassion Design System was
					user-centered and iterative. We conducted additional user interviews
					to understand the needs of our global teams and what would make the
					components most flexible, both in Figma and in code. The team
					carefully considered the most minor details, like naming design
					tokens, to ensure clarity and consistency.
				</p>
				<p>
					We partnered with teams across Compassion to establish a robust
					governance model and a streamlined design-to-development workflow.
					This workflow included tools and processes such as Figma for design,
					Tokens Studio for managing design tokens, GitHub for version control,
					Style Dictionary for transforming tokens into usable formats, coded
					components, Storybook for documentation, and an npm package for
					developers. This comprehensive approach facilitated a seamless
					workflow between designers and developers.
				</p>
				<FYIGrid
					images={imagesBuilding}
					caption="A unified design & development workflow."
				></FYIGrid>
				<h2>Bringing the Vision to Life</h2>
				<span>Understanding Our Users</span>
				<p>
					In the implementation phase, we built a comprehensive library of Figma
					components and distributed them across the organization as a shared
					library. We created a lighthearted onboarding Figma file to introduce
					the system to designers worldwide. Working closely with stakeholder
					development teams, we built robust coded components for React and
					HTML/SCSS. We then gathered and incorporated feedback from additional
					development teams to inform the creation of React Native components.
					The team implemented automated visual regression testing to maintain
					consistency and quality across frameworks, ensuring our design system
					performed reliably across all platforms.
				</p>{' '}
				<iframe
					style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
					width="100%"
					height="600px"
					src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FoahZHU1NfEJMbrhwnqJnIJ%2Fkendrick.fyi%3Fnode-id%3D1-2%26t%3DKAemp2k1MI78UZr8-1"
					allowFullScreen
				></iframe>
				<div className={styles.hero__image}>====== Figma UI kit ======</div>
				<WithSidebar className={styles.dwc} sidebarWidth="400px">
					<div
						className={clsx(styles['device'], styles['device-iphone-14-pro'])}
					>
						<div className={styles['device-frame--mod']}>
							<Image
								className={styles['device-screen--mod']}
								src={visionToLife01}
								alt=""
							/>
							<div className={styles['device-btns']}></div>
							{/* <div className={styles['device-power']}></div> */}
						</div>
					</div>
					<div
						style={{ aspectRatio: '16 / 9' }}
						className={clsx(
							styles['app-frame'],
							platform === 'Mac' ? styles.mac : styles.win,
							styles.scrolling,
							styles.centered,
						)}
						data-title="Design with Compassion | Marketing Site"
					>
						<div style={{ padding: 0 }}>
							<Image src={visionToLife02} alt="" />
						</div>
					</div>
				</WithSidebar>
				<h2>Impact and Outcomes</h2>
				<span>Measuring Success</span>
				<p>
					The design system had significant positive outcomes, and teams across
					the organization are in various stages of adoption, including
					Compassion Canada, Compassion Netherlands, Compassion’s Global
					Marketing team, and its innovation team, Compassion Ventures Group.
					Notably, the Compassion Design System was used in the Field Strategies
					app, a crucial tool in a $1.4 billion multi-year fundraising effort,
					as well as many global campaign sites and marketing landing pages.
				</p>{' '}
				<div className={styles.hero__image}>
					================ Apps on the CDS ================
				</div>
				<p>
					The qualitative benefits of the Compassion Design System were
					substantial. The design system improved design consistency, reduced
					development cycles, and enhanced collaboration between design and
					development teams. While formal metrics were unavailable, the positive
					feedback from adopting teams and the visible improvements in design
					efficiency and consistency demonstrated the system’s value.
				</p>
				<h2>Key Insights</h2>
				<span>Lessons Learned and Future Directions</span>
				<p>
					The project highlighted several vital lessons. One critical insight
					was the necessity of solid alignment and endorsement from leadership
					to achieve widespread adoption. Despite the robust grassroots support
					from many teams, top-down commitment and advocacy would have been
					crucial in ensuring the design system’s success and integration across
					the entire organization. This knowledge equipped the team to navigate
					similar situations in the future with greater confidence and
					effectiveness.
				</p>
				<p>
					Looking ahead, we identified potential improvements, such as applying
					the tokens to a library like Ariakit or ShadCN UI to accelerate the
					maintenance of accessible coded components even further. This approach
					would enhance efficiency and scalability, allowing our design and
					development partner teams to focus even more on driving innovation
					with the Compassion Design System.
				</p>
			</Prose>
		</main>
	);
}
