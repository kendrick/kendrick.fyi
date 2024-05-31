'use client';

import { useSectionInView } from '@/lib/hooks';
import styles from './styles.module.css';
export default function KindWords() {
	const { ref } = useSectionInView('Kind Words');

	const recUrl = `https://www.linkedin.com/in/kendrickarnett/details/recommendations/`;

	return (
		<section id="kind-words" ref={ref} className={styles['kind-words']}>
			<h2>Kind Words</h2>
			{/* https://www.linkedin.com/in/kendrickarnett/details/recommendations */}
			<ul>
				<li>
					<p>Amy</p>
					<blockquote cite={recUrl}>
						Working with Kendrick and his team was a dream from start to finish.
					</blockquote>

					<blockquote cite={recUrl}>
						In my conversations with Kendrick, he listened as I described the
						vision and was able to ask the right questions, deploy the exact
						needed team resources, and partner with me throughout to ensure that
						we were on track
					</blockquote>

					{/* <blockquote cite={recUrl}>
						I was grateful for a partnership with Kendrick and his team that was
						frank, but kind; collaborative, but driven by their subject matter
						expertise; innovative, but not overcomplicated; and communicative,
						but not burdensome.
					</blockquote> */}
				</li>
				<li>
					<p>Sydney</p>
					<ul>
						{/* <li>
							<blockquote cite={recUrl}>
								He focuses his team on design best practices informed by his
								many years as a designer. Then he layers in approachable
								leadership that builds trust among his team—where there is idea
								sharing and candid feedback and ideas improve.
							</blockquote>
						</li> */}
						{/* <li>
							<blockquote cite={recUrl}>
								He is extremely collaborative with stakeholders by sharing what
								informed a design decision and then inviting feedback.
							</blockquote>
						</li> */}
						{/* <li>
							<blockquote cite={recUrl}>
								Kendrick has an approachable, collaborative and informed
								leadership style.
							</blockquote>
						</li> */}
						<li>
							<blockquote cite={recUrl}>
								His design perspectives [are] "strongly informed but loosely
								held." I appreciate Kendrick’s ability to state his perspective
								that is based on user research, yet consider opposing views and
								discuss the best option for the end user.
							</blockquote>
						</li>
						{/* <li>
							<blockquote cite={recUrl}>
								He also consistently works to improve his teams’ ability to
								focus on UX Design that leans into product development based on
								an obsession with designing a positive user experience.
							</blockquote>
						</li> */}
						<li>
							<blockquote cite={recUrl}>
								Kendrick embodies this informed, approachable and collaborative
								style in his work and leadership. Through this style and his
								care for both stakeholders and users, he is a delight to work
								with.
							</blockquote>
						</li>
						{/* <li>
							<blockquote cite={recUrl}>
								I can confidently say that anyone would be grateful for the
								opportunity to work with Kendrick and I am personally on the top
								of that list.
							</blockquote>
						</li> */}
					</ul>
				</li>

				<li>
					<p>Steven</p>
					<ul>
						<li>
							<blockquote cite={recUrl}>
								Kendrick went above and beyond what would be expected in his
								role. Even just in terms of technical knowledge he was always
								more than willing to give his expertise and hands on effort when
								we needed it.
							</blockquote>
						</li>
						{/* <li>
							<blockquote cite={recUrl}>
								[He] sincerely cared about us both as individuals and as an
								entire team. Whether it was investing in our professional
								development by providing us books and other resources to learn
								and grow from, and also simply by believing in us to do our job
								well.
							</blockquote>
						</li> */}
						{/* <li>
							<blockquote cite={recUrl}>
								He has such a heart in serving others teams outside our own and
								the collaboration that he was able to foster helped so much at
								every turn not just for us but really throughout the
								organization.
							</blockquote>
						</li> */}
						<li>
							<blockquote cite={recUrl}>
								I can’t stress enough how effective and genuine of a leader he
								is, and how much of a gift you’ll have in him.
							</blockquote>
						</li>
					</ul>
				</li>
				<li>
					<p>Laura</p>
					<ul>
						<li>
							<blockquote cite={recUrl}>
								As my manager there wasn't a moment he wasn't my biggest
								cheerleader, trusting me with projects that were stretch
								experiences and giving me the tools I needed to thrive.
							</blockquote>
						</li>
						{/* <li>
							<blockquote cite={recUrl}>
								When I [shifted] into UX Design, Kendrick was there.
								Recommending books, teaching me about accessibility and IA,
								helping me in my design work.
							</blockquote>
						</li> */}
						{/* <li>
							<blockquote cite={recUrl}>
								If you want a boss that believes in you, empowers you, and
								thinks you can learn and do anything you set your mind to… look
								no further.
							</blockquote>
						</li> */}
						<li>
							<blockquote cite={recUrl}>
								If you're looking for a leader who creates teams that are
								close-knit, supportive and can get anything done that needs done
								because they do it together… you're looking for Kendrick.
							</blockquote>
						</li>
					</ul>
				</li>
				<li>
					<p>Jeff</p>
					<figure>
						<blockquote cite="https://developer.mozilla.org/samples/html/figure.html">
							Quotes, parts of poems can also be a part of figure.
						</blockquote>
						<figcaption>
							<a href={recUrl}>Jeff Haddox on LinkedIn</a>
						</figcaption>
					</figure>

					<ul>
						<li>
							<blockquote cite={recUrl}>
								His skillset is unique in that he is both customer centric and
								technical. […] He is focused on designing the most appropriate
								user experience possible given the target customer.
							</blockquote>
						</li>
						{/* <li>
							<blockquote cite={recUrl}>
								Kendrick’s technical skills are also strong as he is able to
								translate his design into an experience […] across many
								different platforms and code languages.
							</blockquote>
						</li> */}
						<li>
							<blockquote cite={recUrl}>
								Kendrick’s approach to business is collaborative. His desire to
								work cross-functionally in an effort to understand each business
								unit’s needs is tenacious.
							</blockquote>
						</li>
						{/* <li>
							<blockquote cite={recUrl}>
								Kendrick is a strong leader and contributor; he would be an
								asset to any business.
							</blockquote>
						</li> */}
					</ul>
				</li>
			</ul>
		</section>
	);
}
