var GM = {
    init: function () {
        this.initMap();
    },

    initMap: function () {
        var coordinates = {lat: 55.708539, lng: 37.653521},
            markerImage = 'img/marker.png',
            zoom = 16,

            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true, // элементы управления
                scrollwheel: true
            }),

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });

            var styles = 
            [
                {
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#212121"
                    }
                  ]
                },
                {
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#212121"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#757575"
                    },
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative.country",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative.country",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "administrative.neighborhood",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative.province",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.man_made",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.landcover",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.landcover",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.landcover",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.terrain",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.terrain",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.attraction",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.business",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.government",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.medical",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#181818"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#1b1b1b"
                    }
                  ]
                },
                {
                  "featureType": "poi.place_of_worship",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.school",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.sports_complex",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#2c2c2c"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#8a8a8a"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#373737"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#3c3c3c"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#4e4e4e"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#000000"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#3d3d3d"
                    }
                  ]
                }
              ]
            map.setOptions({styles: styles});
    }
};

$(document).ready(function() {
    GM.init();
});