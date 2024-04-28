//imports some sveltekit utils
import { error, redirect, alert } from '@sveltejs/kit';


//defines an actions object
export const actions = {

	//creates an action called 'login' that takes in the request, and also the locals object
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		body.email = (body.email.toLowerCase())
		
		//attempts to sign in using email/password authentication
		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);

			//if that check passes, then check if the user's acount is verrified
			if (!locals.pb?.authStore?.model?.verified) {
				
				//if the user's acount isnt verrified, then clear the authentication token in the locals object (AKA sign out user)
				locals.pb.authStore.clear();

				//then return the the value of 'notVerified' to inform the user to verrify their acount through email
				return {
					notVerified: true
				};
			}

		//if anyting goes wrong with the logging into the acount, send return an error and also console log it, and also return a value 'incorrect' to the webpage
		} catch (error) {
			
			console.log('Error: ', error);

			return {
				incorrect: true
			};			
		}

		//if it all goes well, then redirect the user to the root page
		throw redirect(303, '/');
	}
};