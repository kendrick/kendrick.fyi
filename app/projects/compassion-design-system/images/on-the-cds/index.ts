import aogDesktop from './aog-desktop.png';
import aogMobile from './aog-mobile.png';
import ccDesktop from './cc-desktop.png';
import mwcDesktop from './mwc-desktop.png';
import mwcMagicLink from './mwc-magiclink.png';
import n2nFf_01 from './n2n-ff-01-resourcing.png';
import n2nFf_02 from './n2n-ff-02-photo-upload.png';
import n2nFf_03 from './n2n-ff-03-photo-upload.png';
import n2nFf_04 from './n2n-ff-04-photo-upload.png';
import n2nFf_05 from './n2n-ff-05-community-mapping.png';
import n2nSfDetailDesktop from './n2n-sf-cause-detail-desktop.png';
import n2nSfDetailMobile from './n2n-sf-cause-detail-mobile.png';
import n2nSfHomeDesktop from './n2n-sf-home-desktop.png';
import n2nSfHomeMobile from './n2n-sf-home-mobile.png';
import pthDesktop from './pth-desktop.jpeg';
import pthMobile from './pth-mobile.jpeg';
import trCountry from './tr-country.png';
import trGlobal from './tr-global.png';
import trHome from './tr-home.png';
import wchDesktop01 from './wch-desktop-01.png';
import wchDesktop02 from './wch-desktop-02.png';
import wchMobile01 from './wch-mobile-01.png';
import wchMobile02 from './wch-mobile-02.png';

const images = {
	aog: {
		mobile: { src: aogMobile, alt: '' },
		desktop: { src: aogDesktop, alt: '' },
	},
	compassionCampaigns: {
		desktop: { src: ccDesktop, alt: '' },
	},
	mwc: {
		desktop: { src: mwcDesktop, alt: '' },
		magicLink: { src: mwcMagicLink, alt: '' },
	},
	n2nSupporterHome: {
		mobile: { src: n2nSfHomeMobile, alt: '' },
		desktop: { src: n2nSfHomeDesktop, alt: '' },
	},
	n2nSupporterCauseDetail: {
		mobile: { src: n2nSfDetailMobile, alt: '' },
		desktop: { src: n2nSfDetailDesktop, alt: '' },
	},
	n2nField: {
		_01: { src: n2nFf_01, alt: '' },
		_02: { src: n2nFf_02, alt: '' },
		_03: { src: n2nFf_03, alt: '' },
		_04: { src: n2nFf_04, alt: '' },
		_05: { src: n2nFf_05, alt: '' },
	},
	playToHeal: {
		mobile: { src: pthMobile, alt: '' },
		desktop: { src: pthDesktop, alt: '' },
	},
	tr: {
		home: { src: trHome, alt: '' },
		global: { src: trGlobal, alt: '' },
		country: { src: trCountry, alt: '' },
	},
	wch: {
		mobile01: { src: wchMobile01, alt: '' },
		mobile02: { src: wchMobile02, alt: '' },
		desktop01: { src: wchDesktop01, alt: '' },
		desktop02: { src: wchDesktop02, alt: '' },
	},
};

export default images;
