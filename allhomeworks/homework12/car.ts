export class CarItaly {
  constructor(
    protected model: string,
    protected country: string,
    protected wheels: number,
    protected maxSpeed: string,
  ) {
    this.model = model;
    this.country = country;
    this.wheels = wheels;
    this.maxSpeed = maxSpeed;
  }
}
