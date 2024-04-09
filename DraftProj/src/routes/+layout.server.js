import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }) => {
	if (locals.user) {
		return {
			profile: (locals.user)
		};
	}
};