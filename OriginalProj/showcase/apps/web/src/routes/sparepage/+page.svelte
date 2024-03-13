<head>

    <meta charset="utf-8"/><title>KSM Parking</title><meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="Webflow" name="generator"/>
    <link href="https://assets.website-files.com/64645ba385e9d702c46ecbd4/css/pan-zoom-image.webflow.633b51e84.css" rel="stylesheet" type="text/css"/>
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif]-->
    <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
    <link href="https://assets.website-files.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/><link href="https://assets.website-files.com/img/webclip.png" rel="apple-touch-icon"/>    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
</head>
<body>
    <div>
      <button onclick="requestData">
        test
      </button>
      <p>test</p>
    </div>
    <div>
    <div id="image-map" class="image-frame">
    </div>
    <div class="div-block">
        <div class="w-richtext">
        <ul role="list">
        <li>
        </li>
        </ul>
    </div>
    </div>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64645ba385e9d702c46ecbd4" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://assets.website-files.com/64645ba385e9d702c46ecbd4/js/webflow.24a563ff7.js" type="text/javascript"></script>
    </div>
    <script>
              function requestData() {
                fetch
              }
  
              $(function() {
            function markerRowPlacer(rowLetter, maxColNum, startingPlace, placeChangeAmount, heightPlace) {
              let colCount = 1;
              let currentPlace = startingPlace;
              let markers = []; // Array to store markers

              while (colCount <= maxColNum) {
                let curLetter = rowLetter;
                let curNumber = colCount;
                let curNumberString = colCount.toString(2);
                let currentName = curLetter + curNumberString;

                // Create marker and add to the array
                let currentMarker = L.marker([heightPlace, currentPlace], { icon: vacantIcon }).addTo(map);
                currentMarker.bindPopup(curLetter + curNumber); // Initial popup text
                markers.push({ name: currentName, marker: currentMarker }); // Store name and marker in array
                colCount++;
                currentPlace += placeChangeAmount;
              }

              return markers; // Return the array of markers
            }

            const width = 8000;
            const height = 12000;
            var imageUrl = 'https://i.ibb.co/NxWs8Dh/Parking-Lots.png';
            var imageBounds = [[0, 0], [height, width]]; 

            var map = L.map('image-map', {
              crs: L.CRS.Simple,
              minZoom: -2,
              maxZoom: 0.7,
              zoom: -1, 
              center: [13000.5, 20000],
              maxBounds: L.latLngBounds(L.latLng(0, 0), L.latLng(height, width))
            });




            //Set Icons
            var carIconDown = L.icon({
              iconUrl: 'https://i.ibb.co/P5qN64B/CarDown.png',
              iconSize: [21, 48],
              iconAnchor: [13, 40],
              popupAnchor: [-3, -76]
            });

            var carIconUp = L.icon({
              iconUrl: 'https://i.ibb.co/Cm1bSs5/CarUp.png',
              iconSize: [21, 48],
              iconAnchor: [13, 40],
              popupAnchor: [-3, -76]
            });

            var truckIconDown = L.icon({
              iconUrl: 'https://i.ibb.co/P5qN64B/CarDown.png',
              iconSize: [21, 48],
              iconAnchor: [13, 40],
              popupAnchor: [-3, -76]
            });

            var truckIconUp = L.icon({
              iconUrl: 'https://i.ibb.co/pL1WBBV/Truckup.png',
              iconSize: [21, 48],
              iconAnchor: [13, 40],
              popupAnchor: [-3, -76]
            });

            var unknownIcon = L.icon({
              iconUrl: 'https://i.ibb.co/QY9p8KX/Possibly-Vacant.png',
              iconSize: [31, 48],
              iconAnchor: [13, 40],
              popupAnchor: [-3, -76]
            });

            var vacantIcon = L.icon({
              iconUrl: 'https://i.ibb.co/XF8cSD4/Vacant2.png',
              iconSize: [21, 48],
              iconAnchor: [13, 40],
              popupAnchor: [-3, -76]
            });

            
            // Dynamically create an object to store arrays of markers based on row letter
            var markersObject = {};

            // Spawns all needed parking markers for first parkinglot
            //bototm up; bigGap 580, smallGap 375
            markersObject['A'] = markerRowPlacer("A", 20, 2060.5, 117.5, 10700);
            markersObject['B'] = markerRowPlacer("B", 18, 2413, 117.5, 10175);
            markersObject['C'] = markerRowPlacer("C", 18, 2413, 117.5, 9800);
            markersObject['D'] = markerRowPlacer("D", 19, 2413, 117.5, 9220);
            markersObject['E'] = markerRowPlacer("E", 19, 2413, 117.5, 8845);
            markersObject['F'] = markerRowPlacer("F", 24, 2178, 117.5, 8260);
            markersObject['G'] = markerRowPlacer("G", 25, 2178, 117.5, 7325);
            markersObject['H'] = markerRowPlacer("H", 21, 2413, 117.5, 6760);
            markersObject['I'] = markerRowPlacer("I", 21, 2413, 117.5, 6385);
            markersObject['J'] = markerRowPlacer("J", 21, 2413, 117.5, 5805);
            markersObject['K'] = markerRowPlacer("K", 21, 2413, 117.5, 5420);
            markersObject['L'] = markerRowPlacer("L", 27, 2178, 117.5, 4840);


            L.imageOverlay(imageUrl, imageBounds).addTo(map);
            map.fitBounds(imageBounds);


            // Access and modify the popup text for marker 12 on row A
            markersObject['A'][11].marker.bindPopup('<button on:click={requestData}>Fetch Data</button>');

            //Changing Icon for specific markers
            markersObject['B'][12].marker.setIcon(carIconDown);
            markersObject['C'][13].marker.setIcon(truckIconUp);
            markersObject['C'][10].marker.setIcon(carIconUp);

            //sets propper PocketBase vars
            const pocketBaseUrl = "https://parkingproject.pockethost.io";
            const pb = new PocketBase(pocketBaseUrl);

            //requests data
            async function requestData() {
            const pocketBaseUrl = "https://parkingproject.pockethost.io/api/collections/parkingarray/records";
            const pb = new PocketBase('https://parkingproject.pockethost.io');
        
            try {
              const authData = await pb.admins.authWithPassword('vannsiphers.lego@gmail.com', 'Vtech808!');
              const response = await fetch(pocketBaseUrl);
        
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
        
              data = await response.json();
              markersObject['C'][10].marker.bindPopup(data);
            } catch (error) {
              console.error('Error fetching data:', error);
              data = { error: "Error fetching data. Please check the console for details." };

            }}


            markersObject['C'][10].marker.bindPopup(recordcurrent);


          




            });  

            


                    
        </script>

        <style>
          /* Customize Leaflet Popup Styles */
          .leaflet-pane.leaflet-popup-pane {
            
          }

          .leaflet-popup-content-wrapper {
              display: flex;
              background-color: #fff; /* Background color */
              color: #333; /* Text color */
              padding: 3px; /* Padding */
              border-radius: 20px; /* Border radius */
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* Box shadow */
              /*position:relative; left:0px; bottom:-50px;*/
          }
          .leaflet-popup-close-button {
            display: flex;
          }

          .leaflet-popup-tip-container {
              display: none; /* Hide the default triangle tip */
          }
        </style>
</body>