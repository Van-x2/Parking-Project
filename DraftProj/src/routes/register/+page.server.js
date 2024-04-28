//imports utilities
import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '../../lib/utils';

//defines the actions used in the +page.svelte
export const actions = {
	//creates an action defined as 'register', taking in the request, as well as the 'locals'
	register: async ({ locals, request }) => {

		//creates a 'body' object from the form data extracted from the request variable, filling it with form data
		const body = Object.fromEntries(await request.formData());
		body.email = (body.email.toLowerCase())
		body.vehicle = 'car'

		//randomly generates username from inputed name
		let username = generateUsername(body.name.split(' ').join('')).toLowerCase();

		//tries to create an acount with the form data
		try {
			await locals.pb.collection('users').create({ username, ...body });
			//sends verification email automaticly to all users once their acount is created
			await locals.pb.collection('users').requestVerification(body.email);
		} 
		
		//if the acount creation fails, return error and console log it
		catch (error) {
			console.log('Error: ', error);
			throw error(500, 'Something went wrong');
		}

		//if the action succeeds, redirect to the login page
		throw redirect(303, '/login');
	}
};
