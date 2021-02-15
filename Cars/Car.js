class Car {
    constructor(
        year,
        make,
        model,
        color,
        radioActive
    ) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
        this.radioActive = radioActive;
    }

    toggleRadio(radioStatus) {
        this.radioActive = radioStatus;
    }

    paintJob(newColor) {
        this.color = newColor;
    }
}