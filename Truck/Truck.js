class Truck {
    constructor(
        year,
        make,
        model,
        color,
        haulingActive,
        haulLoad
    ) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
        this.haulingActive = haulingActive;
        this.haulLoad = haulLoad;
    }

    toggleHauling(haulingStatus) {
        this.haulingActive = haulingStatus;
    }

    updateHaulLoad(newLoad) {
        this.haulLoad = newLoad;
    }
}

export default Truck;