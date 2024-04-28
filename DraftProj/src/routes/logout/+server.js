//server-side executable used to sign out the user

//imports redirect from sveltekit
import { redirect } from '@sveltejs/kit';

//upon activation, it sends a POST operation that also takes in the locals object
export const POST = ({ locals }) => {


	//clears authstore of locals.pb (AKA signing user out)
	locals.pb.authStore.clear();
	locals.user = undefined;

	//redirects logged out user to log in page
	throw redirect(303, '/login');
};