'use strict';

import * as service from './rate-service-mock';

service.findAll()
	.then(rates => {
		let html = '<thead><tr><th>Name</th><th>Years</th><th>Rate</th></tr></thead>';
		rates.forEach(rate => html += `
			<tr>
				<td>${rate.name}</td>
				<td>${rate.years}</td>
				<td>${rate.rate}</td>
			</tr>
		`);
		document.getElementById('rates').innerHTML = html;
	})
	.catch(e => console.log(e));
