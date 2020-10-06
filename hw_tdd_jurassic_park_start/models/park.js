const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
}

Park.prototype.add = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.remove = function(dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur)
    if (index > -1) {
        this.dinosaurs.splice(index, 1);
    };
};

Park.prototype.findMostAttractiveDinosaur = function () {
    let mostAttractiveDinosaur = this.dinosaurs[0];
    for (currentDinosaur of this.dinosaurs) {
        if (currentDinosaur.guestsAttractedPerDay > mostAttractiveDinosaur.guestsAttractedPerDay) {
            mostAttractiveDinosaur = currentDinosaur;
        };
    };
    return mostAttractiveDinosaur;
};

Park.prototype.findBySpecies = function(species) {
    const dinosaursBySpecies = []
    for (currentDinosaur of this.dinosaurs) {
        if (currentDinosaur.species === species) {
            dinosaursBySpecies.push(currentDinosaur);
        };
    };
    return dinosaursBySpecies;
};

Park.prototype.calculateAverageVisitorsPerDay = function () {
    let averageVisitorsPerDay = 0
    for (currentDinosaur of this.dinosaurs) {
        averageVisitorsPerDay += currentDinosaur.guestsAttractedPerDay;
    };
    return averageVisitorsPerDay;
};

Park.prototype.calculateAverageVisitorsPerYear = function () {
    const averageVisitorsPerYear = this.calculateAverageVisitorsPerDay() * 365;
    return averageVisitorsPerYear;
};

Park.prototype.calculateAverageYearlyRevenue = function () {
    const averageYearlyRevenue = this.calculateAverageVisitorsPerYear() * this.ticketPrice;
    return averageYearlyRevenue;
};

// Park. prototype.removeBySpecies = function (species) {
//     for (currentDinosaur of this.dinosaurs) {
//         if (currentDinosaur.species === species) {
//             let index = this.dinosaurs.indexOf(currentDinosaur);
//             this.dinosaurs.splice(index, 1);
//         };
//     };
//     return this.dinosaurs;
// };

module.exports = Park;