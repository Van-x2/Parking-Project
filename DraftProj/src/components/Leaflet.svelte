<script>
    import { onMount, onDestroy } from 'svelte';
    export let data;
    let map;
    import Navbar from './Navbar.svelte'
    import SpaceGui from './SpaceGUI.svelte';

  
    onMount(() => {
      if (typeof window !== 'undefined') {
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
        
        //sets some helpfull variables
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
        //map.setMaxBounds(zoomBounds);
        map.setMaxZoom(3)
        map.setMinZoom(3)
        map.removeControl(map.zoomControl);

        //function to create markers
        function markerRowPlacer(rowLetter, maxColNum, startingPlace, placeChangeAmount, heightPlace) {
                let colCount = 1;
                let currentPlace = startingPlace;
                let markers = []; // Array to store markers

                while (colCount <= maxColNum) {
                  let curLetter = rowLetter;
                  let curNumber = colCount;
                  let curNumberString = colCount.toString(2);
                  let currentName = curLetter + curNumberString;
                  let currentparkingRequest = ("data.parking." + (curLetter.toLowerCase()) + "[" + (curNumber -1) + "]")

                  // Create marker and add to the array
                  let currentMarker = L.marker([heightPlace, currentPlace], { icon: vacantIcon }).addTo(map);

                  var popupContent = document.createElement('div');
                  var SpaceGUI = new SpaceGui({
                      target: popupContent,
                      props: {
                          data: data,
                          localStatus: (eval(currentparkingRequest + ".status")),
                          localId: (eval(currentparkingRequest + ".id")),
                          localEmail: (eval(currentparkingRequest + ".email")),
                          localCol: (eval(currentparkingRequest + ".column")),
                          localRow: (eval(currentparkingRequest + ".row"))
                      }
                  });

                  //Adds the Popup text to current marker (placeholder text for now)
                  currentMarker.bindPopup(
                    popupContent
                  );
                  //autoOpen Popup for development
                  /*
                  if ((eval(currentparkingRequest + ".id")) == "000000000000B06") {
                    currentMarker.openPopup()
                  }
                  */


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


                  //currentMarker.setIcon(carIconDown);


                  //Stores the Markers in an array
                  markers.push({ name: currentName, marker: currentMarker });
                  colCount++;
                  currentPlace += placeChangeAmount;

                }

                return markers; // Return the array of markers
              }
      
              //sets the markersObject object
              var markersObject = {};

              //calls function when needed
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
              
              //markersObject['A'][19].marker.setIcon(carIconDown);



        

        }).catch(error => {
          console.error('Failed to load Leaflet', error);
        });
      }
    });
  
    onDestroy(() => {
      if (map) {
        map.remove();
      }
    });
  </script>
  

  
  <div id="map" class="w-full h-full "></div>
  