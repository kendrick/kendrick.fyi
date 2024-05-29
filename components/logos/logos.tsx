import LogoCompassion from './logos/compassion';
import LogoP1 from './logos/pier1';
import LogoSlalom from './logos/slalom';
import LogoThomson from './logos/tr';

import Cluster from '../layout/Cluster';
import styles from './logos.module.css';

export default function Logos() {
	return (
		<section>
			<Cluster className={styles.logos}>
				<LogoCompassion aria-label="Compassion International logo."></LogoCompassion>
				<LogoP1 aria-label="Pier 1 Imports logo."></LogoP1>
				<LogoSlalom aria-label="Slalom Consulting logo."></LogoSlalom>
				<LogoThomson aria-label="Thomson Reuters logo."></LogoThomson>
			</Cluster>
		</section>
	);
}
