import { serializeNonPOJOs } from '$lib/utils';
import PocketBase from 'pocketbase'
const parkData = {};
let fullParkData = {};


export const load = async ({ locals }) => {

    try {
        const pb = new PocketBase('https://parkingproject.pockethost.io');
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


    } catch (error) {
        console.error('Error fetching data:', error);
        datapullA = { error: "Error fetching data. Please check the console for details." };
    }


    if (locals.user) {
        return {
            profile: locals.user,
            parking: parkData
        };
    }

	
	else {
		return {
			parking: parkData
		}
	}
	

};
	/*
	return {
		parking: (currentArray)
	}
	*/
