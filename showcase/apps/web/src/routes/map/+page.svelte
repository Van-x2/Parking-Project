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
  
        $(function() {

          function markerRowPlacer(rowLetter, maxColNum, startingPlace, placeChangeAmount, heightPlace) {
            let colCount = 1;
            //Takes the starting horizontal position from user and converts it into current place
            let currentPlace = startingPlace;
            while (colCount <= maxColNum) {

              //Formulates Proper Naming Scheme
              let currentName = String(rowLetter) + String(colCount);
              var marker = L.marker([heightPlace, currentPlace], { icon: customIcon }).addTo(map);
              colCount = colCount + 1;
              //Moves horizontal position of placing to the right by an amount specified by "placeChangeAmount"
              //This code isnt the issue
              currentPlace = currentPlace + placeChangeAmount;
            }
          }
          
          // Image dimensions
          const width = 8000;
          const height = 12000;
          var imageUrl = 'http://127.0.0.1:5173/src/lib/assets/ParkingLots.png?t=1708729231934';
          
          var imageBounds = [[0, 0], [height, width]]; 
        
          var map = L.map('image-map', {
            crs: L.CRS.Simple,
            minZoom: -1.8,
            maxZoom: 0.7,
            zoom: -1, 
            maxBounds: L.latLngBounds(
                L.latLng(0, 0), 
                L.latLng(height, width))
          });
        
          // Define custom icon
          var customIcon = L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/128/810/810035.png', // Link to your custom icon
            iconSize:     [40, 50],  // Size of the icon
            iconAnchor:   [22, 50],  // Point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76]  // Point from which the popup should open relative to the iconAnchor
          });
        
          // Adding markers
          
          
        //markerRowPlacer(rowLetter, maxColNum, startingPlace, placeChangeAmount, heightPlace)
          markerRowPlacer(    "B",       18,        2413,           117.5,              10175);

        
          
          
        //marker.bindPopup("<b>Hello world!</b> <a href='/' style='color:blue;'> Claim this spot</a>");
          // Add a popup to your marker
          //marker.bindPopup("<b>Hello world!</b> <a href='/' style='color:blue;'> Claim this spot</a>");
        
          L.imageOverlay(imageUrl, imageBounds).addTo(map);
        
          map.fitBounds(imageBounds);

          
          
        })
        
        </script>
</body>