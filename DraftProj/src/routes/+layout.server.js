//+layout.server.js everytime you load a page, and the load function is used to pass returned data into the 'data' object

//imports utility for serializing
import { serializeNonPOJOs } from '$lib/utils';
//imports PB
import PocketBase from 'pocketbase'

//sets up some usefull objects
const parkData = {};
let fullParkData = {};

//defines load function that takes in the locals object
export const load = async ({ locals }) => {

    //creates new instance of PocketBase defined as pb
    const pb = new PocketBase('https://parkingproject.pockethost.io');
    
    
    //attempts to make a PocketBase request to access every parking spot data entry, and sort them into the parkData object defined earlier
    try {
        fullParkData = await pb.collection('parkingarray').getList( 1, 255, {sort: 'id'});

        parkData.a = fullParkData.items.slice(0, 20);
        parkData.b = fullParkData.items.slice(20, 38);
        parkData.c = fullParkData.items.slice(38, 56);
        parkData.d = fullParkData.items.slice(56, 75);
        parkData.e = fullParkData.items.slice(75, 94);
        parkData.f = fullParkData.items.slice(94, 119);
        parkData.g = fullParkData.items.slice(119, 144);
        parkData.h = fullParkData.items.slice(144, 165);
        parkData.i = fullParkData.items.slice(165, 186);
        parkData.j = fullParkData.items.slice(186, 207);
        parkData.k = fullParkData.items.slice(207, 228);
        parkData.l = fullParkData.items.slice(228, 255);

    //if the request fails, get the 'error' data from the failure, and add it to a console log
    } catch (error) {
        console.error('Error fetching data:', error);
        datapullA = { error: "Error fetching data. Please check the console for details." };
    }

    //if the user has the locals.user property (AKA signed in), it will return a 'data' object with the relvent data
    if (locals.user) {
        const record = await pb.collection('users').getOne(locals.user.id);
        record.email = locals.user.email
        return {
            profile: record,
            parking: parkData
        };
    }

	//same returning of data here, except if the user isnt signed in
	else {
		return {
			parking: parkData
		}
	}
	

};
