<script>
    //imports utils for onMount and on Destroy
    import { onMount, onDestroy } from 'svelte';

    //grabs data object from server-side
    export let data;

    //defines map variable used in leaflet
    let map;

    //imports svelte components 
    import Navbar from './Navbar.svelte'
    import SpaceGui from './SpaceGUI.svelte';


    //Activates function upon the client rendering the page
    onMount(() => {

      //checks if the window is defined
      if (typeof window !== 'undefined') {

        //imports leaflet dynamicly
        import('leaflet').then(L => {

        //sets some custom icons

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
                iconUrl: 'https://i.ibb.co/xq4K2C0/Truckdown.png',
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
                iconSize: [21, 48],
                iconAnchor: [13, 40],
                popupAnchor: [-3, -76]
              });
              var vacantIcon = L.icon({
                iconUrl: 'https://i.ibb.co/XF8cSD4/Vacant2.png',
                iconSize: [21, 48],
                iconAnchor: [13, 40],
                popupAnchor: [-3, -76]
              });
        
        //defines some helpfull variables
        let center = [48,-73];
        let parkingImgURL = 'https://i.ibb.co/NxWs8Dh/Parking-Lots.png';
        const initialView = [55, -73];
        let imageBounds = [[-700, -200], [120, 88]];
        let zoomBounds = [[100,75], [-65,-200]];

        //creates map under the 'map' id
        map = L.map('map').setView(initialView, 3);
        
        //adds backround image to the map
        L.imageOverlay(parkingImgURL, imageBounds).addTo(map);

        //sets up some map properties
        map.setMaxZoom(3)
        map.setMinZoom(3)
        map.removeControl(map.zoomControl);

        //creates a function to place ALL parking space markers
        function markerRowPlacer(rowLetter, maxColNum, startingPlace, placeChangeAmount, heightPlace) {

                //defines variables used to index the markers properly
                let colCount = 1;
                let currentPlace = startingPlace;

                //creates object to hold all the custom markers, so that they can be easily accessed later
                let markers = []; 


                //creates a looping function
                while (colCount <= maxColNum) {

                  //formats variables to be used while creating each marker
                  let curLetter = rowLetter;
                  let curNumber = colCount;
                  let curNumberString = colCount.toString(2);
                  let currentName = curLetter + curNumberString;

                  //creates the data request setup dynamically based on current indexed info
                  let currentparkingRequest = ("data.parking." + (curLetter.toLowerCase()) + "[" + (curNumber -1) + "]")

                  // Create marker and add to the array
                  let currentMarker = L.marker([heightPlace, currentPlace], { icon: vacantIcon }).addTo(map);

                  //defines the pop-up content for the current marker
                  var popupContent = document.createElement('div');
                  //sets the popup content variable to the SpaceGUI component, whilst also sending the important properties for creating the popup content
                  var SpaceGUI = new SpaceGui({
                      target: popupContent,
                      props: {
                          data: data,
                          localStatus: (eval(currentparkingRequest + ".status")),
                          localId: (eval(currentparkingRequest + ".id")),
                          localEmail: (eval(currentparkingRequest + ".email")),
                          localCol: (eval(currentparkingRequest + ".column")),
                          localRow: (eval(currentparkingRequest + ".row")),
                          localName: (eval(currentparkingRequest + ".ownername"))
                      }
                  });

                  //adds the 'popupContent' object to the bindPopup property of the marker (That is holding the given SpaceGUI component for the given marker)
                  currentMarker.bindPopup(
                    popupContent
                  );

                  //if the user is signed in, the marker with the current user's email will openup automaticly 
                  if (data.profile) {
                    if ((eval(currentparkingRequest + ".email")) == data.profile.email) {
                    console.log(data.profile.email)
                    currentMarker.openPopup()
                    }
                  }
                  

                  
                  

                  //handles icon orientation (so vehicles  display facing the correct directions automatically)                  

                  //Sets the Icon of the current marker
                  //status guide:1=vacant 2=unknown 3=car 4=truck
                  function orientVehicle () {
                    if (curLetter == "A" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconUp)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconUp)
                      }
                    }
                    if (curLetter == "B" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconDown)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconDown)
                      }
                    }
                    if (curLetter == "C" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconUp)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconUp)
                      }
                    }
                    if (curLetter == "D" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconDown)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconDown)
                      }
                    }
                    if (curLetter == "E" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconUp)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconUp)
                      }
                    }
                    if (curLetter == "F" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconDown)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconDown)
                      }
                    }
                    if (curLetter == "G" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconUp)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconUp)
                      }
                    }
                    if (curLetter == "H" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconDown)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconDown)
                      }
                    }
                    if (curLetter == "I" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconUp)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconUp)
                      }
                    }
                    if (curLetter == "J" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconDown)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconDown)
                      }
                    }
                    if (curLetter == "K" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconUp)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconUp)
                      }
                    }
                    if (curLetter == "L" ) {
                      if (eval(currentparkingRequest + ".status") == 1) {
                        currentMarker.setIcon(vacantIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 2) {
                        currentMarker.setIcon(unknownIcon)
                      }
                      if (eval(currentparkingRequest + ".status") == 3) {
                        currentMarker.setIcon(carIconDown)
                      }
                      if (eval(currentparkingRequest + ".status") == 4) {
                        currentMarker.setIcon(truckIconDown)
                      }
                    }
                  }
                  orientVehicle()


                  //Stores the Markers in an array
                  markers.push({ name: currentName, marker: currentMarker });
                  colCount++;
                  currentPlace += placeChangeAmount;
                }

                return markers; // Return the array of markers
              }
      
              //sets the markersObject object
              var markersObject = {};

              //calls the markers function all the times that are neccesary
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
  

        
        //console logs any errors that happen
        }).catch(error => {
          console.error('Failed to load Leaflet', error);
        });
      }
    });
    
    //when the leaaflet component is destroyed, the map will be removed, if it exists
    onDestroy(() => {
      if (map) {
        map.remove();
      }
    });
  </script>
  

  
  <div id="map" class="w-full h-full "></div>