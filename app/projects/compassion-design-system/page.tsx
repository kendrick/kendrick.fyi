export default function DesignSystem() {
	return (
		<main className="flex flex-col items-center px-4">
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

			<h2>Problem Statment</h2>
			<h3>Unraveling the Challenges</h3>
			<p>
				Compassion’s decentralized corporate structure makes coordination among
				offices challenging. While it allows each office to be nimble in
				adapting to its local conditions, it also leaves each office responsible
				for interpreting and implementing Compassion’s brand. Over time, this
				resulted in a fragmented brand and visual identity that left Compassion
				as a whole less capable of leveraging its internal design and
				development expertise because teams constantly reinvented the wheel.
				Compassion’s ongoing multi-year brand overhaul compounded this issue,
				which called for a unified global voice to solidify its brand identity.
			</p>

			<h2>Research and Discovery</h2>
			<h3>Delving into the Details</h3>
			<p>
				To fully grasp the complexity of this global challenge, we embarked on
				an extensive research phase. We gathered feedback from development,
				design, and marketing teams across the globe through surveys and
				one-on-one interviews. This research revealed a diverse landscape: some
				offices had fully staffed design and development teams, while others
				consisted of just one or two marketers who juggled multiple roles,
				including web management. One office even had only a full-time staff of
				two for all operations, including fundraising and events.
			</p>
			<p>
				We followed this with a global component and technology audit, which
				further underscored the extent of the existing fragmentation. Some
				partners used React, others were on WordPress, and one was on .NET. Many
				had plans to migrate to NextJS or to introduce a mobile app. This
				diversity underscored the need for a flexible and adaptable design
				system.
			</p>

			<h2>Strategic Vision</h2>
			<h3>Crafting the Design System Blueprint</h3>
			<p>
				Our strategy was clear: we aimed to create a design system with vast
				flexibility and adaptability. This system was architected to empower
				marketers’ creativity across Compassion’s global network while setting a
				clear vision for unification. Given the ongoing brand overhaul, the
				system needed to be adaptable, allowing for effortless flow from design
				to development as the brand evolved. Design tokens emerged as a critical
				enabler of our solution, ensuring the system was genuinely future-proof
				and enabling flexibility where designers needed it.
			</p>
			<p>
				<em>What are Design Tokens?</em> Design tokens are the tiniest pieces of
				a design system that store design-related information. Think of them as
				variables that define and store the values for design elements, such as
				colors, typography, spacing, and more. They help bridge design and
				development, ensuring the same design decisions are implemented
				consistently across different tools, platforms, and devices.
			</p>

			<h2>Building the Compassion Design System</h2>
			<h3>From Concept to Reality</h3>
			<p>
				The design and development of the Compassion Design System was
				user-centered and iterative. We conducted additional user interviews to
				understand the needs of our global teams and what would make the
				components most flexible, both in Figma and in code. The team carefully
				considered the most minor details, like naming design tokens, to ensure
				clarity and consistency.
			</p>
			<p>
				We partnered with teams across Compassion to establish a robust
				governance model and a streamlined design-to-development workflow. This
				workflow included tools and processes such as Figma for design, Tokens
				Studio for managing design tokens, GitHub for version control, Style
				Dictionary for transforming tokens into usable formats, coded
				components, Storybook for documentation, and an npm package for
				developers. This comprehensive approach facilitated a seamless workflow
				between designers and developers.
			</p>

			<h2>Bringing the Vision to Life</h2>
			<h3>Understanding Our Users</h3>
			<p>
				In the implementation phase, we built a comprehensive library of Figma
				components and distributed them across the organization as a shared
				library. We created a lighthearted onboarding Figma file to introduce
				the system to designers worldwide. Working closely with stakeholder
				development teams, we built robust coded components for React and
				HTML/SCSS. We then gathered and incorporated feedback from additional
				development teams to inform the creation of React Native components. The
				team implemented automated visual regression testing to maintain
				consistency and quality across frameworks, ensuring our design system
				performed reliably across all platforms.
			</p>

			<h2>Impact and Outcomes</h2>
			<h3>Measuring Success</h3>
			<p>
				The design system had significant positive outcomes, and teams across
				the organization are in various stages of adoption, including Compassion
				Canada, Compassion Netherlands, Compassion’s Global Marketing team, and
				its innovation team, Compassion Ventures Group. Notably, the Compassion
				Design System was used in the Field Strategies app, a crucial tool in a
				$1.4 billion multi-year fundraising effort, as well as many global
				campaign sites and marketing landing pages.
			</p>
			<p>
				The qualitative benefits of the Compassion Design System were
				substantial. The design system improved design consistency, reduced
				development cycles, and enhanced collaboration between design and
				development teams. While formal metrics were unavailable, the positive
				feedback from adopting teams and the visible improvements in design
				efficiency and consistency demonstrated the system’s value.
			</p>

			<h2>Key Insights</h2>
			<h3>Lessons Learned and Future Directions</h3>
			<p>
				The project highlighted several vital lessons. One critical insight was
				the necessity of solid alignment and endorsement from leadership to
				achieve widespread adoption. Despite the robust grassroots support from
				many teams, top-down commitment and advocacy would have been crucial in
				ensuring the design system’s success and integration across the entire
				organization. This knowledge equipped the team to navigate similar
				situations in the future with greater confidence and effectiveness.
			</p>
			<p>
				Looking ahead, we identified potential improvements, such as applying
				the tokens to a library like Ariakit or ShadCN UI to accelerate the
				maintenance of accessible coded components even further. This approach
				would enhance efficiency and scalability, allowing our design and
				development partner teams to focus even more on driving innovation with
				the Compassion Design System.
			</p>
		</main>
	);
}
