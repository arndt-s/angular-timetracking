export class Period {
  from: number;
  to: number;
  reported: boolean;

  constructor() {
    this.from = Date.now();
    this.to = null;
    this.reported = false;
  }
}
