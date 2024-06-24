<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import iconurl from '$lib/images/marker-icon.png';
	import 'leaflet/dist/leaflet.css';

	let mapContainer;
	let map;
	let latlng = [13.13828, 123.73654];
	let latlng2 = [13.13842, 123.73647];

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');
			map = leaflet.map(mapContainer, { scrollWheelZoom: false }).setView(latlng, 25);

			// Add the tile layer
			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			var LeafIcon = leaflet.Icon.extend({
				options: {
					iconSize: [25, 41],
					iconAnchor: [12, 41],
					popupAnchor: [1, -34],
					tooltipAnchor: [16, -28],
					shadowSize: [41, 41]
				}
			});

			var customIcon = new LeafIcon({ iconUrl: iconurl });

			// Add a marker to the map
			leaflet.marker(latlng, { icon: customIcon }).addTo(map);
			leaflet
				.tooltip(latlng2, {
					content: 'HANUL Korean Language Center',
					permanent: true,
					direction: 'left'
				})
				.addTo(map);
			leaflet.circle(latlng, { radius: 15 }).addTo(map);
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<div bind:this={mapContainer}></div>

<style>
	div {
		height: 400px;
	}
	@media (min-width: 768px) {
		div {
			height: 600px;
		}
	}
</style>
