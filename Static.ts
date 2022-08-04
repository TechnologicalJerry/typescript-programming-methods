class Circle {
    static pi = 3.14;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius: number): number {
        return 2 * Circle.pi * radius;
    }
}

Circle.calculateArea(5);

let circleObj = new Circle();
circleObj.calculateCircumference(5)  