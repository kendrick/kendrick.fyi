import dashify from 'dashify';

function customPropertiesFromVars(
	customPropertyPrefix?: string | undefined | null,
	existingStyle?: React.CSSProperties,
	...args: Record<string, string | number | undefined>[]
): React.CSSProperties {
	let styles: React.CSSProperties = {};

	const prefix =
		customPropertyPrefix ?
			customPropertyPrefix.endsWith('-') ?
				customPropertyPrefix
			:	`${customPropertyPrefix}-`
		:	'';

	args.forEach((obj) => {
		Object.keys(obj).forEach((key: string) => {
			const value = obj[key];
			if (value !== undefined) {
				styles[`--${prefix}${dashify(key)}`] = value;
			}
		});
	});

	if (existingStyle) {
		styles = {
			...styles,
			...existingStyle,
		};
	}

	return styles;
}

export default customPropertiesFromVars;
