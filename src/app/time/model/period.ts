export class Period {
  from: number;
  to: number;
  reported: boolean;
  isReporting: boolean;

  constructor() {
    this.from = Date.now();
    this.to = null;
    this.reported = false;
    this.isReporting = false;
  }
}
