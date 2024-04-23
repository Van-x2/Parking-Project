// src/routes/update-parking-spot.js

import { post } from '@sveltejs/kit/http';
import PocketBase from 'pocketbase';

export const post = async (request) => {
    const { localId, localCol, localRow, email, vehicle } = request.body;

    // Perform database update logic here
    // Example: Update parking spot status to active

    return {
        status: 200,
        body: { success: true }
    };
};
