// Meant to define a route to backend server

//importing
import { post } from '@sveltejs/kit/http';
import PocketBase from 'pocketbase';

//sends POST request via the route with the given variables
export const post = async (request) => {
    const { localId, localCol, localRow, email, vehicle } = request.body;



//if it is succsessfull, it returs a 200 status, and returns the 'body' object with a key of success and a value of true

    return {
        status: 200,
        body: { success: true }
    };
};
