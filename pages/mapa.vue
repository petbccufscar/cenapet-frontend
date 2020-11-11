<template>
  <div class="container-fluid min-75">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Mapa PET</h1>
      </div>
    </div>
    <div class="container mt-3">
      <DynamicZone
        v-for="content in grupos.conteudo"
        :key="content.id"
        :content="content"
        class="my-3"
      />
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import DynamicZone from "@/components/DynamicZone.vue";
import axios from "axios";
import mapboxgl from "mapbox-gl";

export default {
  data() {
    return {
      map: {},
    };
  },
  components: {
    DynamicZone,
  },
  head() {
    return {
      title: "Mapa dos grupos",
      link: [
        {
          rel: "stylesheet",
          href: `https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css`,
        },
      ],
    };
  },
  asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios.get(process.env.baseURL + `/grupos`).then((res) => {
      return { grupos: res.data };
    });
  },
  mounted() {
    const mapboxgl = require("mapbox-gl");

    let map = this.map;

    map = new mapboxgl.Map({
      accessToken: process.env.mbToken,
      container: "map", // <div id="map"></div>
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-52.8448484, -15.028203],
      zoom: 3,
    });

    map.on("load", function () {
      map.addSource("grupos", {
        type: "geojson",
        data: process.env.baseURL + `/geojson`, // backend
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      // pesquisar se existem marcadores diferentes
      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "grupos",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#0288d1",
            15,
            "#0277bd",
            50,
            "#01579b",
          ],
          "circle-radius": ["step", ["get", "point_count"], 15, 15, 20, 50, 25],
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "grupos",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-size": 12,
        },
        paint: {
          "text-color": "#ffffff",
        },
      });

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "grupos",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#039be5",
          "circle-radius": 10,
        },
      });

      map.on("click", "clusters", function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        var clusterId = features[0].properties.cluster_id;
        map
          .getSource("grupos")
          .getClusterExpansionZoom(clusterId, function (err, zoom) {
            if (err) return;

            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
      });

      map.on("click", "unclustered-point", function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var mag = e.features[0].properties.mag;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        const nomePet = `<a href="/pets/${e.features[0].properties.id}">${e.features[0].properties.nome}</a>`;

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(nomePet)
          .addTo(map);
      });

      map.addControl(new mapboxgl.NavigationControl());

      map.on("mouseenter", "clusters", function () {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "clusters", function () {
        map.getCanvas().style.cursor = "";
      });

      map.on("wheel", (event) => {
        if (event.originalEvent.ctrlKey) {
          // Check if CTRL key is pressed
          event.originalEvent.preventDefault(); // Prevent chrome/firefox default behavior
          if (!map.scrollZoom._enabled) map.scrollZoom.enable(); // Enable zoom only if it's disabled
        } else {
          if (map.scrollZoom._enabled) map.scrollZoom.disable(); // Disable zoom only if it's enabled
        }
      });
    });
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 70vh;
}

#map .mapboxgl-popup .mapboxgl-popup-tip {
  border-top-color: #505659;
}

#map .mapboxgl-popup .mapboxgl-popup-content {
  background-color: #2d3031;
  padding: 1rem 1rem 0.8rem 1rem;
}

#map .mapboxgl-popup .mapboxgl-popup-content .mapboxgl-popup-close-button {
  color: #fff;
}

#map .mapboxgl-popup .mapboxgl-popup-content .mapboxgl-popup-close-button:hover {
  background-color: #ffffff22;
  border-bottom-left-radius: 4px;
}

#map .mapboxgl-popup .mapboxgl-popup-content a {
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

#map .mapboxgl-popup .mapboxgl-popup-content a:hover {
  color: var(--text-accent);
}
</style>
