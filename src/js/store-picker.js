/* eslint-disable no-undef */
// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
	Element.prototype.remove = () => {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}

mapboxgl.accessToken = 'pk.eyJ1IjoicmFkdGtldCIsImEiOiJjamVoYTBrdnEwaXhqMzNvZzEyZ215MG04In0.D98pv5P9HqrB16SbdjKNRA';

// This adds the map
const map = new mapboxgl.Map({
	// container id specified in the HTML
	container: 'map',
	// style URL
	style: 'mapbox://styles/mapbox/light-v9',
	// initial position in [long, lat] format
	center: [-112.0089, 43.5372],
	// initial zoom
	zoom: 13,
});

const stores = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-121.4020693, 38.5281596],
			},
			properties: {
				storeManager: 'Eric Entz',
				country: 'United States',
				address: '5294 83rd St',
				city: 'Sacramento',
				state: 'CA',
				postalCode: '95826',
				phone: '(916) 383-2266',
				fax: '(916) 383-7643',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-122.3864545, 40.5295995],
			},
			properties: {
				storeManager: 'Alan Shufelberger',
				country: 'United States',
				address: '5858 Westside Rd',
				city: 'Redding',
				state: 'CA',
				postalCode: '96001',
				phone: '(530) 241-1615',
				fax: '(530) 244-5043',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-124.1268216, 40.804262],
			},
			properties: {
				storeManager: 'Nick Rice',
				country: 'United States',
				address: '3810 Jacobs Ave',
				city: 'Eureka',
				state: 'CA',
				postalCode: '95501',
				phone: '(707) 442-1515',
				fax: '(707) 442-1565',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-120.6271997, 35.1187176],
			},
			properties: {
				storeManager: 'Steve May',
				country: 'United States',
				address: '390 Manhattan Ave',
				city: 'Grover Beach',
				state: 'CA',
				postalCode: '93433',
				phone: '(805) 473-2080',
				fax: '(805) 473-2084',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-121.7634313, 36.7665869],
			},
			properties: {
				storeManager: 'John Roach',
				country: 'United States',
				address: '10450 Tembladera St',
				city: 'Castroville',
				state: 'CA',
				postalCode: '95012',
				phone: '(831) 633-1715',
				fax: '(831) 633-0176',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-119.7468835, 36.7586539],
			},
			properties: {
				storeManager: 'Joe Davis',
				country: 'United States',
				address: '1266 N Maple Ave',
				city: 'Fresno',
				state: 'CA',
				postalCode: '93703',
				phone: '(559) 499-1615',
				fax: '(559) 499-1010',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-121.8525207, 39.8030791],
			},
			properties: {
				storeManager: 'Randy Togstad',
				country: 'United States',
				address: '1060 Marauder St',
				city: 'Chico',
				state: 'CA',
				postalCode: '95973',
				phone: '(530) 343-1418',
				fax: '(530)  343-7796',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-122.8569657, 42.3858899],
			},
			properties: {
				storeManager: 'Luke Morey',
				country: 'United States',
				address: '4768 Crater Lake Ave',
				city: 'Medford',
				state: 'OR',
				postalCode: '97504',
				phone: '(541) 770-1615',
				fax: '(541) 773-9555',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-115.1904969, 36.0873417],
			},
			properties: {
				storeManager: 'Kevin Shields',
				country: 'United States',
				address: '5655 Procyon St',
				city: 'Las Vegas',
				state: 'NV',
				postalCode: '89118',
				phone: '(702) 597-1615',
				fax: '(702) 740-7470',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-115.7667917, 40.8287597],
			},
			properties: {
				storeManager: 'Ed Small',
				country: 'United States',
				address: '120 Main St',
				city: 'Elko',
				state: 'NV',
				postalCode: '89801',
				phone: '(775) 738-1615',
				fax: '(775) 738-1636',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-116.282575, 43.5781749],
			},
			properties: {
				storeManager: 'Dan Kaufman',
				country: 'United States',
				address: '7880 W Mossy Cup St',
				city: 'Boise',
				state: 'ID',
				postalCode: '83709',
				phone: '(208) 362-1900',
				fax: '(208) 362-8930',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-114.4847617, 42.5502319],
			},
			properties: {
				storeManager: 'Tony Haines',
				country: 'United States',
				address: '250 S Park Ave W',
				city: 'Twin Falls',
				state: 'ID',
				postalCode: '83301',
				phone: '(208) 735-2400',
				fax: '(208) 735-0400',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-112.0089447, 43.5372459],
			},
			properties: {
				storeManager: 'Tory Woodling',
				country: 'United States',
				address: '4610 N Haroldsen Dr',
				city: 'Idaho Falls',
				state: 'ID',
				postalCode: '83401',
				phone: '(208) 552-5858',
				fax: '(208) 552-2776',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-108.553074, 45.7628232],
			},
			properties: {
				storeManager: 'Joe Conner',
				country: 'United States',
				address: '1345 Monad Rd',
				city: 'Billings',
				state: 'MT',
				postalCode: '59101',
				phone: '(406) 252-1626',
				fax: '(406) 252-3119',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-114.0606757, 46.9134356],
			},
			properties: {
				storeManager: 'Denise Galland',
				country: 'United States',
				address: '4480 Expressway',
				city: 'Missoula',
				state: 'MT',
				postalCode: '59808',
				phone: '(406) 549-5050',
				fax: '(406)-542-3782',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-111.1078329, 45.6704887],
			},
			properties: {
				storeManager: 'Emily Barton',
				country: 'United States',
				address: '860 Winnow Cir',
				city: 'Bozeman',
				state: 'MT',
				postalCode: '59718',
				phone: '(406) 582-1615',
				fax: '(406) 582-8231',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-111.3524731, 47.5145559],
			},
			properties: {
				storeManager: 'Chad Such',
				country: 'United States',
				address: '2224 Vaughn Rd',
				city: 'Great Falls',
				state: 'MT',
				postalCode: '59404',
				phone: '(406) 452-5411',
				fax: '(406) 452-5418',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-97.5749517, 35.4628613],
			},
			properties: {
				storeManager: 'Clay Curtis',
				country: 'United States',
				address: '3200 W Reno Ave',
				city: 'Oklahoma City',
				state: 'OK',
				postalCode: '73107',
				phone: '(405) 602-1999',
				fax: '(405) 601-3060',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-95.8915946, 36.1054053],
			},
			properties: {
				storeManager: 'Scott Campbell',
				country: 'United States',
				address: '7727 E 41st St',
				city: 'Tulsa',
				state: 'OK',
				postalCode: '74145',
				phone: '(918) 794-1999',
				fax: '(918) 794-6063',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-97.5749517, 35.4628613],
			},
			properties: {
				storeManager: 'Jody Roberts',
				country: 'United States',
				address: '3300 Industrial Dr',
				city: 'Wichita Falls',
				state: 'TX',
				postalCode: '76306',
				phone: '(940) 767-1615',
				fax: '(940) 716-9644',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-97.6157785, 33.2622892],
			},
			properties: {
				storeManager: 'Steve Garske',
				country: 'United States',
				address: '2023 US-287',
				city: 'Decatur',
				state: 'TX',
				postalCode: '76234',
				phone: '(940) 627-1600',
				fax: '(940) 627-1765',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-114.3404627, 34.5085364],
			},
			properties: {
				storeManager: 'Mike Buxton',
				country: 'United States',
				address: '2225 N Kiowa Blvd',
				city: 'Lake Havasu City',
				state: 'AZ',
				postalCode: '86403',
				phone: '(928) 680-1589',
				fax: '(928) 680-1636',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-114.0087177, 35.2238684],
			},
			properties: {
				storeManager: 'Tony Corona',
				country: 'United States',
				address: '3463 Townsend St',
				city: 'Kingman',
				state: 'AZ',
				postalCode: '86409',
				phone: '(928) 757-1615',
				fax: '(928) 757-0148',
			},
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-111.5984855, 35.2138263],
			},
			properties: {
				storeManager: 'Ben Allen',
				country: 'United States',
				address: '3585 E Industrial Dr',
				city: 'Flagstaff',
				state: 'AZ',
				postalCode: '86004',
				phone: '(928) 526-2615',
				fax: '(928) 526-5466',
			},
		},
	],
};

function flyToStore(currentFeature) {
	map.flyTo({
		center: currentFeature.geometry.coordinates,
		zoom: 15,
	});
}

function createPopUp(currentFeature) {
	const popUps = document.getElementsByClassName('mapboxgl-popup');
	if (popUps[0]) {
		popUps[0].remove();
	}

	new mapboxgl.Popup({
		closeOnClick: false,
	})
		.setLngLat(currentFeature.geometry.coordinates)
		.setHTML(
			`
		<h3>${currentFeature.properties.city}, ${currentFeature.properties.state}</h3>
		<ul>
			<li>${currentFeature.properties.address}. <br>${currentFeature.properties.city}, ${currentFeature.properties.state} ${
				currentFeature.properties.postalCode
			}</li>
			<li class="icon-list icon-list-phone">${currentFeature.properties.phone}</li>
			<li class="icon-list icon-list-fax">${currentFeature.properties.fax}</li>
		</ul>
		`
		)
		.addTo(map);
}

function stripPhoneNumber(number) {
	return number.replace(/[^\d]/g, '');
}

function buildLocationList(data) {
	for (let i = 0; i < data.features.length; i += 1) {
		const currentFeature = data.features[i];
		const prop = currentFeature.properties;

		const listings = document.getElementById('listings');
		const listing = listings.appendChild(document.createElement('div'));
		listing.className = 'item';
		listing.id = `listing-${i}`;

		const link = listing.appendChild(document.createElement('a'));
		link.href = '#';
		link.className = 'title';
		link.dataPosition = i;
		link.innerHTML = `${prop.city}, ${prop.state}`;

		const details = listing.appendChild(document.createElement('div'));
		details.className = 'details';
		details.innerHTML = `
		<ul>
			<li><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 48"><path d="M17.5 0C7.9 0 0 7.8 0 17.4c0 11.9 15.7 29.4 16.3 30.1.6.7 1.7.7 2.3 0 .7-.8 16.4-18.2 16.4-30.1C35 7.8 27.1 0 17.5 0zm0 26.1c-4.9 0-8.8-3.9-8.8-8.7s3.9-8.7 8.8-8.7 8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7z"/></svg></span>${
				prop.address
			}. ${prop.city}, ${prop.state} ${prop.postalCode}</li>
		</ul>
		<ul style="display: inline-block">
			<li><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 347.3"><path d="M340.3 274.7l-53.8-53.8c-10.7-10.6-28.4-10.3-39.5.8l-27.1 27-5.3-2.9c-17.1-9.5-40.5-22.5-65.2-47.1s-37.7-48.2-47.2-65.3c-1-1.8-1.9-3.6-2.9-5.2l18.2-18.2 8.9-8.9c11.1-11.1 11.4-28.8.7-39.5L73.4 7.8C62.7-2.9 45-2.6 33.9 8.5L18.7 23.8l.4.4a87.5 87.5 0 0 0-12.4 22 86.8 86.8 0 0 0-5.6 22.3C-6 127.4 20.9 181.2 93.9 254.1 194.7 355 276 347.4 279.5 347a90.4 90.4 0 0 0 44.4-18l.3.3 15.4-15.1c11-11.1 11.4-28.8.7-39.5z"/></svg></span>
				<a href="tel:+1${stripPhoneNumber(prop.phone)}" rel="nofollow" name="Call R&S Supply ${prop.city} at ${prop.phone}">
					${prop.phone}
				</a>
			</li>
			<li><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.73 31.73"><path d="M0 29.66h2.537V9.571H0V29.66zM28.549 9.571V.917H15.871v8.654H10.91v20.09h20.82V9.571h-3.181zm-8.926 15.908h-2.447v-2.446h2.447v2.446zm0-4.045h-2.447V18.99h2.447v2.444zm0-3.855h-2.447v-2.446h2.447v2.446zm4.516 7.9h-2.447v-2.446h2.447v2.446zm0-4.045h-2.447V18.99h2.447v2.444zm0-3.855h-2.447v-2.446h2.447v2.446zm4.513 7.9h-2.445v-2.446h2.445v2.446zm0-4.045h-2.445V18.99h2.445v2.444zm0-3.855h-2.445v-2.446h2.445v2.446zm1.506-4.574H14.26V10.84h1.611v1.082h12.678V10.84h1.609v2.165zM3.535 30.813h6.398V7.332H3.535v23.481zm23.33-27.486h-9.029V2.48h9.029v.847zm0 2.256h-9.029v-.844h9.029v.844z"/></svg></span>
				<a href="fax:+1${stripPhoneNumber(prop.fax)}" rel="nofollow" name="Fax R&S Supply ${prop.city} at ${prop.fax}">
					${prop.fax}
				</a>
			</li>
		</ul>
		<dl class="store__manager"><dt>Store Manager</dt><dd>${prop.storeManager}</dd></dl>

		`;

		if (prop.distance) {
			const roundedDistance = Math.round(prop.distance * 100) / 100;
			details.innerHTML += `<p><strong>${roundedDistance} miles away</strong></p>`;
		}

		link.addEventListener('click', function() {
			// Update the currentFeature to the store associated with the clicked link
			const clickedListing = data.features[this.dataPosition];

			// 1. Fly to the point
			flyToStore(clickedListing);

			// 2. Close all other popups and display popup for clicked store
			createPopUp(clickedListing);

			// 3. Highlight listing in sidebar (and remove highlight for all other listings)
			const activeItem = document.getElementsByClassName('active');

			if (activeItem[0]) {
				activeItem[0].classList.remove('active');
			}
			this.parentNode.classList.add('active');
		});
	}
}

// This adds the data to the map
map.on('load', () => {
	// This is where your '.addLayer()' used to be, instead add only the source without styling a layer
	map.addSource('places', {
		type: 'geojson',
		data: stores,
	});
	// Initialize the list
	buildLocationList(stores);

	const geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		bbox: [-77.210763, 38.803367, -76.853675, 39.052643],
	});

	map.addControl(geocoder, 'top-left');

	map.addSource('single-point', {
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: [], // Notice that initially there are no features
		},
	});

	map.addLayer({
		id: 'point',
		source: 'single-point',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#007cbf',
			'circle-stroke-width': 3,
			'circle-stroke-color': '#fff',
		},
	});

	geocoder.on('result', ev => {
		const searchResult = ev.result.geometry;
		map.getSource('single-point').setData(searchResult);

		const options = {
			units: 'miles',
		};
		stores.features.forEach(store => {
			Object.defineProperty(store.properties, 'distance', {
				value: turf.distance(searchResult, store.geometry, options),
				writable: true,
				enumerable: true,
				configurable: true,
			});
		});

		stores.features.sort((a, b) => {
			if (a.properties.distance > b.properties.distance) {
				return 1;
			}
			if (a.properties.distance < b.properties.distance) {
				return -1;
			}
			// a must be equal to b
			return 0;
		});

		const listings = document.getElementById('listings');
		while (listings.firstChild) {
			listings.removeChild(listings.firstChild);
		}

		buildLocationList(stores);

		function sortLonLat(storeIdentifier) {
			const lats = [stores.features[storeIdentifier].geometry.coordinates[1], searchResult.coordinates[1]];
			const lons = [stores.features[storeIdentifier].geometry.coordinates[0], searchResult.coordinates[0]];

			const sortedLons = lons.sort((a, b) => {
				if (a > b) {
					return 1;
				}
				if (a.distance < b.distance) {
					return -1;
				}
				return 0;
			});
			const sortedLats = lats.sort((a, b) => {
				if (a > b) {
					return 1;
				}
				if (a.distance < b.distance) {
					return -1;
				}
				return 0;
			});

			map.fitBounds([[sortedLons[0], sortedLats[0]], [sortedLons[1], sortedLats[1]]], {
				padding: 100,
			});
		}

		sortLonLat(0);
		createPopUp(stores.features[0]);
	});
});

// Map Bounds
const bounds = new mapboxgl.LngLatBounds();

// This is where your interactions with the symbol layer used to be
// Now you have interactions with DOM markers instead
stores.features.forEach((marker, i) => {
	// Create an img element for the marker
	const el = document.createElement('div');
	el.id = `marker-${i}`;
	el.className = 'marker';
	// Add markers to the map at all points
	new mapboxgl.Marker(el, {
		offset: [0, -23],
	})
		.setLngLat(marker.geometry.coordinates)
		.addTo(map);

	bounds.extend(marker.geometry.coordinates);

	map.fitBounds(bounds, {
		padding: {
			top: 24,
			bottom: 24,
			left: 24,
			right: 24,
		},
	});
	el.addEventListener('click', e => {
		// 1. Fly to the point
		flyToStore(marker);

		// 2. Close all other popups and display popup for clicked store
		createPopUp(marker);

		// 3. Highlight listing in sidebar (and remove highlight for all other listings)
		const activeItem = document.getElementsByClassName('active');

		e.stopPropagation();
		if (activeItem[0]) {
			activeItem[0].classList.remove('active');
		}

		const listing = document.getElementById(`listing-${i}`);
		listing.classList.add('active');
	});
});
