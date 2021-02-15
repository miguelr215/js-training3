class Plane {
    constructor(
        maker,
        model,
        passengerMax,
        currentPassCount,
        currentLocation,
        destination
    ) {
        this.maker = maker;
        this.model = model;
        this.passengerMax = passengerMax;
        this.currentPassCount = currentPassCount;
        this.currentLocation = currentLocation;
        this.destination = destination;
    }

    updatePassCount(newCount) {
        this.currentPassCount = newCount;
    }

    updateDestination(newDest) {
        this.destination = newDest;
    }
}

export default Plane;