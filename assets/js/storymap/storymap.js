    (function ($) {
    'use strict';


    $.fn.storymap = function(options) {

        var defaults = {
            selector: '[data-place]',
            createMap: function () {
                // create a map in the "map" div, set the view to a given place and zoom
                var map = L.map('map').setView([28, 0], 2);

                L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	                 attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                }).addTo(map);

                return map;
            }
        };

        var settings = $.extend(defaults, options);


        if (typeof(L) === 'undefined') {
            throw new Error('Storymap requires Laeaflet');
        }
        if (typeof(_) === 'undefined') {
            throw new Error('Storymap requires underscore.js');
        }

        function getDistanceToTop(elem, top) {
            var docViewTop = $(window).scrollTop();

            var elemTop = $(elem).offset().top;

            var dist = elemTop - docViewTop;

            var d1 = top - dist;

            if (d1 < 0) {
                return $(document).height();
            }
            return d1;

        }

        function highlightTopPara(paragraphs, top) {

            var distances = _.map(paragraphs, function (element) {
                var dist = getDistanceToTop(element, top);
                return {el: $(element), distance: dist};
            });

            var closest = _.min(distances, function (dist) {
                return dist.distance;
            });

            _.each(paragraphs, function (element) {
                var paragraph = $(element);
                if (paragraph[0] !== closest.el[0]) {
                    paragraph.trigger('notviewing');
                }
            });

            if (!closest.el.hasClass('viewing')) {
                closest.el.trigger('viewing');
            }
        }

        function watchHighlight(element, searchfor, top) {
            var paragraphs = element.find(searchfor);
            highlightTopPara(paragraphs, top);
            $(window).scroll(function () {
                highlightTopPara(paragraphs, top);
            });
        }

        var makeStoryMap = function (element, markers, paths) {
            var top = $(window).height()/3;
            var searchfor = settings.selector;
            var paragraphs = element.find(searchfor);
            paragraphs.on('viewing', function () {
                $(this).addClass('viewing');
            });
            
            paragraphs.on('notviewing', function () {
                $(this).removeClass('viewing');
            });

            watchHighlight(element, searchfor, top);
            
            var map = settings.createMap();
            map.on('zoomend', onMapZoomEnd);
            map.on('zoomstart', onMapZoomStart);

            var initPoint = map.getCenter();
            var initZoom = map.getZoom();

            var fg = L.featureGroup().addTo(map);
            var pathgroup = L.featureGroup().addTo(map);
            var zoomTo = map.getZoom();

            for (var i = 0; i < paths.length ; i++) {
              pathgroup.addLayer(paths[i]);
            }

            function onMapZoomStart(e) {
              if (zoomTo - map.getZoom() > 4){
                map.removeLayer(pathgroup);
              }
            }

            function onMapZoomEnd(e) {
              map.addLayer(pathgroup);
            }

            function showMapView(key) {

                fg.clearLayers();
                if (key === 'overview') {
                    zoomTo = initZoom;
                    map.flyTo(initPoint, initZoom, true);
                } else if (markers[key]) {
                    var marker = markers[key];
                    var layer = marker.layer;
                    if(typeof layer !== 'undefined'){
                      fg.addLayer(layer);
                    };
                    zoomTo = marker.zoom;
                    fg.addLayer(L.marker([marker.lat, marker.lon]));
                    map.flyTo([marker.lat, marker.lon], marker.zoom);
                }
            }

            paragraphs.on('viewing', function () {
                showMapView($(this).data('place'));
            });
        };

        makeStoryMap(this, settings.markers, settings.paths);

        return this;
    }

}(jQuery));
