import { error, redirect, alert } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		body.email = (body.email.toLowerCase())
		
		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			
			console.log('Error: ', err);

			return {
				incorrect: true
			};
			/*
			throw error(500, 'Something went wrong logging in');
			*/
			
		}

		throw redirect(303, '/');
	}
};