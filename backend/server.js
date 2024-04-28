// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());


// Use dynamic import to import the pocketbase module
import('pocketbase').then(({ default: PocketBase }) => {
    // Initialize PocketBase with your database URL
    const pb = new PocketBase('https://parkingproject.pockethost.io');

    // Define API endpoint to handle database update
    app.post('/update-parking-spot', (req, res) => {
        // Extract data from request body
        const { localId, localCol, localRow, localEmail, localVehicle, localUserData} = req.body;
        const currentTime = new Date().getTime(); // Current time in milliseconds
        const delayInMs = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
        //const delayInMs = 30 * 60 * 1000
        const targetTime = currentTime + delayInMs; // Target time after 24 hours
        const delayUntilTarget = targetTime - currentTime;

        // Perform database update logic here
        async function takeLocalParkingSpot(){
            const pb = new PocketBase('https://parkingproject.pockethost.io');
            
            if ((localVehicle) == 'car') {
              const sendData = {
                "column": localCol,
                "row": localRow,
                "email": localEmail,
                "status": 3,
                "orientstatus": 1,
                "time": "2022-01-01 10:00:00.123Z",
                "ownername": localUserData.name
              }
            const record = await pb.collection('parkingarray').update(localId, sendData);
            
                };
            
            if ((localVehicle) == 'truck') {
              const sendData = {
                "column": localCol,
                "row": localRow,
                "email": localEmail,
                "status": 4,
                "orientstatus": 1,
                "time": "2022-01-01 10:00:00.123Z",
                "ownername": localUserData.name
              }
            const record = await pb.collection('parkingarray').update(localId, sendData);
                };
                console.log('Updated Spot:' + localId)
              }
        async function resetLocalParkingSpot(){
            const pb = new PocketBase('https://parkingproject.pockethost.io');
            const sendData = {
                "column": localCol,
                "row": localRow,
                "email": 'blank@ksbe.edu',
                "status": 1,
                "orientstatus": 1,
                "time": "2022-01-01 10:00:00.123Z",
                "ownername": ''
              }
            const record = await pb.collection('parkingarray').update(localId, sendData);
            console.log('resettedSpot:' + localId)
        }
        async function addSpotOwning(){
            const pb = new PocketBase('https://parkingproject.pockethost.io');

            const sendData = {
                "owningSpot": true
            };
            
            const record = await pb.collection('users').update((localUserData.id), sendData);


        }
        async function removeSpotOwning(){
            const pb = new PocketBase('https://parkingproject.pockethost.io');

            const sendData = {
                "owningSpot": false
            };
            
            const record = await pb.collection('users').update((localUserData.id), sendData);


        }
        takeLocalParkingSpot()
        addSpotOwning()
        setTimeout(resetLocalParkingSpot, delayUntilTarget);
        setTimeout(removeSpotOwning, delayUntilTarget);
        
        
        




        // Send response
        res.status(200).json({ success: true });
    });


}).catch(err => {
    console.error('Error importing pocketbase:', err);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`24 Hour Wait setup`) );