'use strict';

export default class Mortgage {

    constructor(principal, years, rate) {
        this.principal = principal;
        this.years = years;
        this.rate = rate;
    }

    get monthlyRate() {
        return this.rate / 100 / 12;
    }

    get monthlyPayment() {
        let monthlyRate = this.monthlyRate;

        return this.principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), this.years * 12)));
    }

    get amortization() {
        let balance = this.principal;
        let amortization = [];

        for (let y = 0; y<this.years; y++) {
            let interestY = 0;
            let principalY = 0;

            for (let m=0; m<12; m++) {
                let interestM = balance * this.monthlyRate;
                let principalM = this.monthlyPayment - interestM;

                interestY += interestM;
                principalY += principalM;
                balance -= principalM;
            }

            amortization.push({principalY, interestY, balance});
        }

        return amortization;
    }
}
