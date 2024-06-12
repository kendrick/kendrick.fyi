export const validateString = (
	value: unknown,
	maxLength: number,
): value is string => {
	if (!value || typeof value !== 'string' || value.length > maxLength) {
		return false;
	}

	return true;
};

export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === 'object' && 'message' in error) {
		message = String(error.message);
	} else if (typeof error === 'string') {
		message = error;
	} else {
		message = 'Something went wrong';
	}

	return message;
};

import breakpoints from '@/tokens/js/breakpoints';
const bp = breakpoints.values;
const bpUnit = breakpoints.unit;
export const imageSizes = `(max-width: 320px) 320px, (max-width: ${bp.sm}${bpUnit}) ${bp.sm}${bpUnit}, (max-width: ${bp.md}${bpUnit}) ${bp.md}${bpUnit}, (max-width: ${bp.lg}${bpUnit}) ${bp.lg}${bpUnit}, (max-width: ${bp.xl}${bpUnit}) ${bp.xl}${bpUnit}, (max-width: ${bp.xxl}${bpUnit}) ${bp.xxl}${bpUnit}, (min-width: ${bp.xxl + 1}${bpUnit}) 1920px`;
