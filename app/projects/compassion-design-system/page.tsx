'use client';

import sharedProjectStyles from '@/app/projects/project.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import 'yet-another-react-lightbox/styles.css';
import styles from './styles.module.css';

import DeviceFrame from '@/lib/DeviceFrame';
import EmbedFacade from '@/lib/EmbedFacade';
import FYIGrid from '@/lib/FYIGrid';
import Reel from '@/lib/layout/Reel';
import Stack from '@/lib/layout/Stack';
import Switcher from '@/lib/layout/Switcher';
import WithSidebar from '@/lib/layout/WithSidebar';

import { imageSizes } from '@/lib/utils';
import images from './images';

import FigmaLogo from '@/lib/LogoFigma';

import useIsTouchCapable from '@/lib/hooks/useIsTouchCapable';

import PullQuote from '@/components/PullQuote';
import { useDarkModeContext } from '@/lib/DarkModeContext';

export default function DesignSystem() {
	const isTouchCapable = useIsTouchCapable();
	const zoomRef = React.useRef(null);

	const imgWidthInSidebar = 'clamp(20rem, 18rem + 10vw, 30rem)';
	const n2nFfBackground = '#3268fa';
	const n2nSfBackground = '#fbf8f4';

	const {
		isDarkMode,
		ternaryDarkMode,
		setTernaryDarkMode,
		toggleTernaryDarkMode,
	} = useDarkModeContext();

	return (
		<main className={clsx(sharedProjectStyles.project, styles.project)}>
			<Image
				sizes={imageSizes}
				alt=""
				src="https://picsum.photos/800/200"
				height={200}
				width={800}
			/>
			<h1>Compassion Design System</h1>

			<section className={sharedProjectStyles['project__section']}>
				<h2>Introduction</h2>
				<Stack>
					<p>
						Scaling a unified brand identity was a significant challenge at
						Compassion International, a global organization with 13 independent
						fundraising offices. As the Senior Manager of UX, I envisioned and
						architected a token-based, multi-brand design system. We built the
						Compassion Design System to accelerate the design and development
						process and address fragmentation across Compassion’s diverse global
						offices.
					</p>
				</Stack>
			</section>

			<section className={sharedProjectStyles['project__section']}>
				<h2>Problem Statement</h2>
				<span>Unraveling the Challenges</span>
				<Stack>
					<p>
						Compassion’s decentralized corporate structure makes coordination
						among offices challenging. While it allows each office to nimbly
						adapt to its local conditions, it also leaves each office
						individually responsible for interpreting and implementing
						Compassion’s brand. Over time, this isolation resulted in a
						fragmented brand and visual identity that left Compassion as a whole
						less capable of leveraging its internal design and development
						expertise because teams constantly reinvented the wheel.
						Compassion’s ongoing multi-year brand overhaul compounded this
						issue, which called for a unified global voice to solidify its brand
						identity.
					</p>
					<FYIGrid
						images={images.fragmentationImages}
						itemWidth="6rem"
						caption="Eight homepages, eight brands."
					></FYIGrid>
				</Stack>
			</section>

			<section className={sharedProjectStyles['project__section']}>
				<h2>Research and Discovery</h2>
				<span>Delving into the Details</span>
				<Stack>
					<WithSidebar sidebarOnRight sidebarWidth={imgWidthInSidebar}>
						<p>
							To fully grasp the complexity of this global challenge, we
							embarked on an extensive research phase. We gathered feedback from
							development, design, and marketing teams across the globe through
							surveys and one-on-one interviews. This research revealed a
							diverse landscape: some offices had fully staffed design and
							development teams, while others consisted of just one or two
							marketers who juggled multiple roles, including web management. At
							the extreme, one office had only a full-time staff of two for all
							operations, including fundraising and events.
						</p>
						<FYIGrid
							images={[{ src: images.interviews01, alt: '' }]}
							caption="Analysis of one-on-one user interviews."
						></FYIGrid>
					</WithSidebar>
					<Stack>
						<p>
							We followed this with a global component and technology audit,
							which further underscored the extent of the existing
							fragmentation. Some partners used React, others were on WordPress,
							and one was on .NET. Many had plans to migrate to NextJS or to
							introduce a mobile app. This diversity underscored the need for a
							flexible and adaptable design system.
						</p>
						<Switcher>
							<PullQuote>109 Button component styles</PullQuote>
							<PullQuote>23 Card component styles</PullQuote>
							{/* <DeviceFrame
								src={images.audit01}
								alt=""
								deviceType="desktop"
								isDarkMode={isDarkMode}
								style={{ aspectRatio: '16 / 9' }}
								title="Global Component Audit • 109 Button styles"
							></DeviceFrame> */}
							{/* <DeviceFrame
								src={images.audit02}
								alt=""
								deviceType="desktop"
								isDarkMode={isDarkMode}
								style={{ aspectRatio: '16 / 9' }}
								title="Global Component Audit • 23 Card styles"
							></DeviceFrame> */}
						</Switcher>
					</Stack>
				</Stack>
			</section>

			<section className={sharedProjectStyles['project__section']}>
				<h2>Strategic Vision</h2>
				<span>Crafting the Design System Blueprint</span>
				<Stack>
					<p>
						Our strategy was clear: we aimed to create a design system with vast
						flexibility and adaptability. This system was architected to empower
						marketers’ creativity across Compassion’s global network while
						setting a clear vision for unification. Given the ongoing brand
						overhaul, the system needed to be adaptable, allowing for effortless
						flow from design to development as the brand evolved. Design tokens
						emerged as a critical enabler of our solution, ensuring the system
						was genuinely future-proof and enabling flexibility where designers
						needed it.
					</p>
					<WithSidebar sidebarOnRight>
						<Stack>
							<aside className={clsx(sharedProjectStyles.aside, styles.aside)}>
								<h3 className={sharedProjectStyles.aside__heading}>
									What are Design Tokens?
								</h3>
								<p>
									Design tokens are the tiniest pieces of a design system that
									store design-related information. Think of them as variables
									that define and store the values for design elements, such as
									colors, typography, spacing, and more. They help bridge design
									and development, ensuring the same design decisions are
									implemented consistently across different tools, platforms,
									and devices.
								</p>
							</aside>
						</Stack>
						<PullQuote>
							Design tokens emerged as a critical enabler of our solution.
						</PullQuote>
					</WithSidebar>
				</Stack>
			</section>

			<section className={sharedProjectStyles['project__section']}>
				<h2>Building Buy-In</h2>
				<span>Steering the Cruise Ship</span>
				<Stack>
					<p>
						The design and development of the Compassion Design System was
						user-centered and iterative. We conducted additional user interviews
						to understand the needs of our global teams and what would make the
						components most flexible, both in Figma and in code. The team
						carefully considered the most minor details, like naming design
						tokens, to ensure clarity and consistency.
					</p>
					<Switcher threshold="80ch">
						<p>
							We partnered with teams across Compassion to establish a robust
							governance model and a streamlined design-to-development workflow.
							This workflow included tools and processes such as Figma for
							design, Tokens Studio for managing design tokens, GitHub for
							version control, Style Dictionary for transforming tokens into
							usable formats, coded components, Storybook for documentation, and
							an npm package for developers. This comprehensive approach
							facilitated a seamless workflow between designers and developers.
						</p>
						<FYIGrid
							images={[{ src: images.building01, alt: '' }]}
							caption="A unified design & development workflow."
						></FYIGrid>
					</Switcher>
				</Stack>
			</section>

			<section className={sharedProjectStyles['project__section']}>
				<h2>Bringing the Vision to Life</h2>
				<span>Understanding Our Users</span>
				<Stack>
					<p>
						In the implementation phase, we built a comprehensive library of
						Figma components and distributed them across the organization as a
						shared library. We created a lighthearted onboarding Figma file to
						introduce the system to designers worldwide. Working closely with
						stakeholder development teams, we built robust coded components for
						React and HTML/SCSS. We then gathered and incorporated feedback from
						additional development teams to inform the creation of React Native
						components. The team implemented automated visual regression testing
						to maintain consistency and quality across frameworks, ensuring our
						design system performed reliably across all platforms.
					</p>
					<div className={styles['figma-embed__wrap']}>
						<EmbedFacade
							width="100%"
							aspectRatio="16 / 10"
							className={styles['figma-embed']}
						>
							<div className={styles['figma-embed__facade']}>
								<Image
									src={images.visionToLife.visionToLife03}
									alt=""
									sizes={imageSizes}
									fill={true}
									className={styles['facade__image']}
								/>
								<div className={styles['facade__text']}>
									{isTouchCapable ? `Tap` : `Click`} to browse the Compassion
									Design System UI Kit
									<FigmaLogo className={styles['figma-logo']}></FigmaLogo>
								</div>
							</div>
							<iframe
								src="https://www.figma.com/embed?embed_host=share&community_viewer=true&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FQmnNQopuJ2fvI5uBXJtMCI%2FUI-Kit-(cds-light)%3Ft%3DMHRLCVSKCtspjkCT-1"
								allowFullScreen
							></iframe>
						</EmbedFacade>
					</div>
					<WithSidebar className={styles.dwc} sidebarWidth="400px">
						<DeviceFrame
							src={images.visionToLife.visionToLife01}
							alt=""
							imageVerticalMargin="1rem"
						/>
						<DeviceFrame
							src={images.visionToLife.visionToLife02}
							alt=""
							deviceType="desktop"
							isDarkMode={isDarkMode}
							style={{ aspectRatio: '16 / 9' }}
						></DeviceFrame>
					</WithSidebar>
				</Stack>
			</section>

			<section>
				<div className={sharedProjectStyles['project__section']}>
					<h2>Impact and Outcomes</h2>
					<span>Measuring Success</span>
					<Stack>
						<p>
							The design system had significant positive outcomes, and teams
							across the organization are in various stages of adoption,
							including Compassion Canada, Compassion Netherlands, Compassion’s
							Global Marketing team, and its innovation team, Compassion
							Ventures Group. Notably, the Compassion Design System was used in
							the Field Strategies app, a crucial tool in a $1.4 billion
							multi-year fundraising effort, as well as many global campaign
							sites and marketing landing pages.
						</p>
						<p>
							The qualitative benefits of the Compassion Design System were
							substantial. The system improved design consistency, reduced
							development cycles, and enhanced collaboration between design and
							development teams. While formal metrics were unavailable, the
							positive feedback from adopting teams and the visible improvements
							in design efficiency and consistency demonstrated the system’s
							value.
						</p>
						<div className={styles['on-the-cds__grid']}>
							<DeviceFrame
								deviceType="desktop"
								isDarkMode={isDarkMode}
								className={clsx(
									styles['device--desktop'],
									styles['grid--desktop1'],
								)}
								src={images.onTheCds.mwc.desktop.src}
								alt={images.onTheCds.mwc.desktop.alt}
							/>
							<DeviceFrame
								deviceType="desktop"
								isDarkMode={isDarkMode}
								className={clsx(
									styles['device--desktop'],
									styles['grid--desktop2'],
								)}
								src={images.onTheCds.n2nSupporterHome.desktop.src}
								alt={images.onTheCds.n2nSupporterHome.desktop.alt}
							/>
							<DeviceFrame
								imageVerticalMargin="1rem"
								background={n2nSfBackground}
								className={clsx(
									styles['device--mobile'],
									styles['grid--mobile2'],
								)}
								src={images.onTheCds.n2nSupporterCauseDetail.mobile.src}
								alt={images.onTheCds.n2nSupporterCauseDetail.mobile.alt}
							/>
							<DeviceFrame
								className={clsx(
									styles['device--mobile'],
									styles['grid--mobile1'],
								)}
								src={images.onTheCds.playToHeal.mobile.src}
								alt={images.onTheCds.playToHeal.mobile.alt}
							/>
						</div>
					</Stack>
				</div>
				<div className={sharedProjectStyles['full-width']}>
					<Reel className={clsx(styles['on-the-cds__reel'])}>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={clsx(
								styles['device--brand-platform--intro'],
								styles['device--desktop'],
							)}
							style={{ aspectRatio: '700 / 494', alignSelf: 'baseline' }}
							src={images.onTheCds.mwc.magicLink.src}
							alt={images.onTheCds.mwc.magicLink.alt}
						/>
						<DeviceFrame
							className={clsx(
								styles['device--n2n--mobile'],
								styles['device--mobile'],
							)}
							src={images.onTheCds.n2nSupporterHome.mobile.src}
							alt={images.onTheCds.n2nSupporterHome.mobile.alt}
						/>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.playToHeal.desktop.src}
							alt={images.onTheCds.playToHeal.desktop.alt}
						/>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.n2nSupporterCauseDetail.desktop.src}
							alt={images.onTheCds.n2nSupporterCauseDetail.desktop.alt}
						/>
						{/* AOG */}
						<DeviceFrame
							src={images.onTheCds.aog.mobile.src}
							alt={images.onTheCds.aog.mobile.alt}
						/>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.aog.desktop.src}
							alt={images.onTheCds.aog.desktop.alt}
						/>
						{/* N2N Field */}
						<DeviceFrame
							background={n2nFfBackground}
							imageVerticalMargin="1rem"
							src={images.onTheCds.n2nField._01.src}
							alt={images.onTheCds.n2nField._01.alt}
						/>
						<DeviceFrame
							imageVerticalMargin="1rem"
							src={images.onTheCds.n2nField._03.src}
							alt={images.onTheCds.n2nField._03.alt}
						/>
						<DeviceFrame
							background={n2nFfBackground}
							imageVerticalMargin="1rem"
							src={images.onTheCds.n2nField._04.src}
							alt={images.onTheCds.n2nField._04.alt}
						/>
						{/* Targeted Response */}
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.tr.home.src}
							alt={images.onTheCds.tr.home.alt}
						/>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.tr.global.src}
							alt={images.onTheCds.tr.global.alt}
						/>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.tr.country.src}
							alt={images.onTheCds.tr.country.alt}
						/>
						{/* Compassion Campaigns */}
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.compassionCampaigns.desktop.src}
							alt={images.onTheCds.compassionCampaigns.desktop.alt}
						/>
						{/* White-label Campaign Hub */}
						<DeviceFrame
							imageVerticalMargin="2rem"
							src={images.onTheCds.wch.mobile01.src}
							alt={images.onTheCds.wch.mobile01.alt}
						/>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.wch.desktop01.src}
							alt={images.onTheCds.wch.desktop01.alt}
						/>
						<DeviceFrame
							imageVerticalMargin="2rem"
							src={images.onTheCds.wch.mobile02.src}
							alt={images.onTheCds.wch.mobile02.alt}
						/>
						<DeviceFrame
							deviceType="desktop"
							isDarkMode={isDarkMode}
							className={styles['device--desktop']}
							style={{ aspectRatio: '16 / 10' }}
							src={images.onTheCds.wch.desktop02.src}
							alt={images.onTheCds.wch.desktop02.alt}
						/>
					</Reel>
				</div>
			</section>

			<section className={sharedProjectStyles['project__section']}>
				<h2>Key Insights</h2>
				<span>Lessons Learned and Future Directions</span>
				<Stack>
					<WithSidebar sidebarOnRight>
						<p>
							The project highlighted several vital lessons. One critical
							insight was the necessity of solid alignment and endorsement from
							leadership to achieve widespread adoption. Despite the robust
							grassroots support from many teams, top-down commitment and
							advocacy would have been crucial in ensuring the design system’s
							success and integration across the entire organization. This
							knowledge equipped the team to navigate similar situations in the
							future with greater confidence and effectiveness.
						</p>
						<PullQuote>
							Top-down commitment and advocacy would have been crucial.
						</PullQuote>
					</WithSidebar>
					<Stack>
						<p>
							Looking ahead, we identified potential improvements, such as
							applying the tokens to a library like Ariakit or ShadCN UI to
							accelerate the maintenance of accessible coded components even
							further. This approach would enhance efficiency and scalability,
							allowing our design and development partner teams to focus even
							more on driving innovation with the Compassion Design System.
						</p>
					</Stack>
				</Stack>
			</section>
		</main>
	);
}
