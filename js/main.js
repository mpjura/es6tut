import Mortgage from './mortgage';

document.getElementById('calcBtn').addEventListener('click', () => {
    // get the form field values
    let principal = document.getElementById('principal').value;
    let years = document.getElementById('years').value;
    let rate = document.getElementById('rate').value;

    // create a new mortgage
    let mortgage = new Mortgage(principal, years, rate);

    // insert monthly payment and rate
    document.getElementById('monthlyPayment').innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById('monthlyRate').innerHTML = (rate / 12).toFixed(2);

    let html = `
        <thead>
            <tr>
                <th>Year</td>
                <th>Principal</th>
                <th>Bar Chart</th>
                <th>Interest</th>
                <th>Balance</th>
            </tr>
        </thead>
    `;
    // loop over amortization array
    mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="flex">
                    <div class="bar principal"
                        style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                    </div>
                    <div class="bar interest"
                        style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                    </div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);

    document.getElementById('amortization').innerHTML = html;
});
