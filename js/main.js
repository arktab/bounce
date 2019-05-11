'use strict';
//map initalistion
function initMap() {
  var coords, map, marker, content, info, styles;

  styles = [{
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#c9edc5"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f4f3f0"
      }]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }]
    },
    {
      "featureType": "landscape.natural.terrain",
      "elementType": "geometry.fill",
      "stylers": [{
          "visibility": "on"
        },
        {
          "color": "#bcdfb8"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c8eec4"
      }]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#c9edc5"
      }]
    },
    {
      "featureType": "poi.sports_complex",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c8eec4"
      }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
          "lightness": 100
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [{
        "weight": "1"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
          "lightness": "0"
        },
        {
          "color": "#ffe492"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
          "color": "#ffffff"
        },
        {
          "weight": "2.53"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "on"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [{
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "weight": "0.50"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
          "visibility": "on"
        },
        {
          "lightness": 700
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#7dcdcd"
      }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#abd9ee"
      }]
    }
  ];

  content = '<h1 class="title">Beetroot Academy</h1>';
  //beetrot academy coords
  coords = {
    lat: 49.568506,
    lng: 34.585511
  };

  map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 16,
      center: coords,
      styles: styles,
      gestureHandling: 'cooperative'
    });

  info = new google.maps.InfoWindow({
    content: content
  });

  marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: 'images/marker.png',
    //move marker
    draggable: false
  });

  marker.addListener('click', function() {
    info.open(map, marker);
  });
}

(function($) {
  $(document).ready(function() {
    // slick slider--------------------------
    $('.team__slider').slick({
      infinite: true,
      slidesToShow: 1,
      dots: true,
      arrows: false
    });
    $('.testimonials__slider').slick({
			 infinite: true,
      slidesToShow: 1,
      dots: true,
      arrows: false
    });

    //isotope grid---------------------------
    $('.blocks').isotope({
      itemSelector: '.blocks__img',
      percentPosition: true,
      masonry: {
        gutter: 10
      }
    });
    $('.filters').on('click', 'li', function() {
      var val = $(this).data('filter');
      $('.blocks').isotope({
        filter: val
      })
    });

  });
})(jQuery);
