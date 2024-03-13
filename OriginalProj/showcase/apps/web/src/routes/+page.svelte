
<!DOCTYPE svelte>
<html lang="en">

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>KSM Parking</title>
    
    <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script src="https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@latest/dist/pocketbase.umd.js"></script>
    <style>
      html, body {
        height: 100%;
        margin: 0;
      }
      .leaflet-container {
        height: 400px;
        width: 600px;
        max-width: 100%;
        max-height: 100%;
      }
    </style>

<script>
  //Request data from pocketbase
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
      } catch (error) {
        console.error('Error fetching data:', error);
        data = { error: "Error fetching data. Please check the console for details." };
      }
    }
</script>


  </head>
  

  <body>


  
  <div id="map" style="width: 100%; height: 100%;"></div>


  <script>
    //Defines a few helpfull variables
    let center = [48,-73];
    let parkingImgURL = 'https://i.ibb.co/NxWs8Dh/Parking-Lots.png';
    const initialView = [55, -73];
    let imageBounds = [[-700, -200], [120, 88]];
    let zoomBounds = [[100,75], [-65,-200]];

    //test function
    function handleClick(num) {
      count = count + num;
    }

    //Creates map data
    const map = L.map('map').setView(initialView, 3);
    map.setMaxBounds(zoomBounds);
    map.setMaxZoom(3)
    map.setMinZoom(3)
    map.removeControl(map.zoomControl);

    L.imageOverlay(parkingImgURL, imageBounds).addTo(map);


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
      
              var markersObject = {};
              markersObject['A'] = markerRowPlacer("A", 20, -125.441, 4.237, 80.1);
              markersObject['B'] = markerRowPlacer("B", 18, -112.78, 4.237, 76.97);
              markersObject['C'] = markerRowPlacer("C", 18, -112.78, 4.237, 73.8);
              markersObject['D'] = markerRowPlacer("D", 19, -112.78, 4.237, 68.65);
              markersObject['E'] = markerRowPlacer("E", 19, -112.78, 4.237, 63.6);
              markersObject['F'] = markerRowPlacer("F", 24, -121.3, 4.237, 55.5);
              markersObject['G'] = markerRowPlacer("G", 25, -121.3, 4.237, 35.5);
              markersObject['H'] = markerRowPlacer("H", 21, -112.826, 4.237, 21.4);
              markersObject['I'] = markerRowPlacer("I", 21, -112.826, 4.237, 9.3);
              markersObject['J'] = markerRowPlacer("J", 21, -112.826, 4.237, -6.7);
              markersObject['K'] = markerRowPlacer("K", 21, -112.826, 4.237, -18.8);
              markersObject['L'] = markerRowPlacer("L", 27, -121.35, 4.237, -33.5);

    

  </script>




  </body>

</html>