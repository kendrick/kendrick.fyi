import LogoCompassion from './logos/compassion';
import LogoP1 from './logos/pier1';
import LogoSlalom from './logos/slalom';
import LogoThomson from './logos/tr';

import styles from './logos.module.css';

export default function Logos() {
	const logoHeight = 36;

	return (
		<section className={styles.logos}>
			<LogoCompassion
				height={logoHeight * 1.33}
				aria-label="Compassion International logo."
			></LogoCompassion>
			<LogoP1 height={logoHeight} aria-label="Pier 1 Imports logo."></LogoP1>
			<LogoSlalom
				height={logoHeight}
				aria-label="Slalom Consulting logo."
			></LogoSlalom>
			<LogoThomson
				height={logoHeight}
				aria-label="Thomson Reuters logo."
			></LogoThomson>
		</section>
	);
}
