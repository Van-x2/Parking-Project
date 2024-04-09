//This file processes Incoming Requests to the server. It takes an event object, 
//representing the request and a function, called resolve wich renders the route(the url path basicly) and generates a Response.

//imports pocketbase
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';

export const handle = async ({ event, resolve }) => {
    //creates and exports a function called "handle"
    //It takes in an object
	event.locals.pb = new PocketBase('https://parkingproject.pockethost.io');
    //creates a new instance of PB, and asigns it to a property 'pb' of the 'locals' object, that comes from the 'event' object
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    //attempts to load auth data from a cookie in the request headers. Then, it loads it into the 'authstore' property of the PB instace, created in the line above
	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined
	}
     //Checks if the authentication data extracted from the cookie in the line above is valid. If it is, set the 'user model'stored in the 'authstore' section of pocketbase instance to 'event.local.user'


	const response = await resolve(event);
    //calls the 'resolve' function, whilst also passing in the 'event' object as an argument. It then waits to set the value of response equal to the function


	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
   //Sets a new cookie, under the set-cookie header. Uses the '.exportToCookie' function within the '.event.locals.authstore' object, to export the data into the new cookie.

	return response;
};