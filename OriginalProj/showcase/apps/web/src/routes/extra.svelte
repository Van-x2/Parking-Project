<script>
	/*
	This is an example of using Svelte features with Leaflet. Original blog post here: https://imfeld.dev/writing/leaflet_with_svelte
	
	The toolbar and the marker popups are both implemented by embedding Svelte components inside Leaflet elements. The marker and lines are toggled by updating the map from reactive statements.
	
	Any questions? Ask me at dimfeld on Twitter!
	
	Thanks to heroicons.dev for all the icons used here.
	*/

	//Importing Libraries
	import L from 'leaflet';
	

	//Setting some variables
	let map;
	let center = [48,-73];
	let parkingImgURL = 'https://i.ibb.co/NxWs8Dh/Parking-Lots.png';
	const initialView = [7/*0*/, -73];
	let imageBounds = [[-700, -200], [120, 88]];
	let zoomBounds = [[100,75], [-65,-200]];
	//Creating map
	function createMap() {

		//Creates the map itself
	  let m = L.map(imagemap, {preferCanvas: true }, { zoomControl: false }).setView(initialView, 3);
		m.setMaxBounds(zoomBounds);
		m.setMaxZoom(3)
		m.setMinZoom(3)

		
		

		

		//Adds parkinglot graphic to map
		L.imageOverlay(parkingImgURL, imageBounds).addTo(m);

		//Configures all custom icons for markers
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
              iconSize: [22, 48],
              iconAnchor: [13, 40],
              popupAnchor: [-3, -76]
            });
		
		//Adds car markers to map
		//L.marker(center).addTo(m)

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
                let currentMarker = L.marker([heightPlace, currentPlace], { icon: vacantIcon }).addTo(m);
                currentMarker.bindPopup(curLetter + curNumber); // Initial popup text
                markers.push({ name: currentName, marker: currentMarker }); // Store name and marker in array
                colCount++;
                currentPlace += placeChangeAmount;
              }

              return markers; // Return the array of markers
            }

		//creates marker array object
		var markersObject = {};


		//creates all markers
            			markersObject['A'] = markerRowPlacer("A", 20, -125.441, 4.237, 80.1);
					  	markersObject['B'] = markerRowPlacer("B", 18, -112.78, 4.237, 76.97);
						//close distance down -3.17
						markersObject['C'] = markerRowPlacer("C", 18, -112.78, 4.237, 73.8);
						//far distance down -5.15
						markersObject['D'] = markerRowPlacer("D", 19, -112.78, 4.237, 68.65);
						markersObject['E'] = markerRowPlacer("E", 19, -112.78, 4.237, 63.6);
						markersObject['F'] = markerRowPlacer("F", 24, -121.3, 4.237, 55.5);
						markersObject['G'] = markerRowPlacer("G", 25, -121.3, 4.237, 35.5);
						markersObject['H'] = markerRowPlacer("H", 21, -112.826, 4.237, 21.4);
						markersObject['I'] = markerRowPlacer("I", 21, -112.826, 4.237, 9.3);
						markersObject['J'] = markerRowPlacer("J", 21, -112.826, 4.237, -6.7);
						markersObject['K'] = markerRowPlacer("K", 21, -112.826, 4.237, -18.8);
						markersObject['L'] = markerRowPlacer("L", 27, -121.35, 4.237, -33.5);
					





		
		

 



    return m;
  }

	function resizeMap() {
	  if(map) { map.invalidateSize(); }
  }
	function mapAction(container) {
    map = createMap(container); 	
 		}

</script>
<svelte:window on:resize={resizeMap} />

<style>
	.map :global(.marker-text) {
		width:100%;
		text-align:center;
		font-weight:600;
		background-color:#444;
		color:#EEE;
		border-radius:0.5rem;
	}
	
	.map :global(.map-marker) {
		width:30px;
		transform:translateX(-50%) translateY(-25%);
	}

</style>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
<div class="map" style="height:100%;width:100%" use:mapAction />