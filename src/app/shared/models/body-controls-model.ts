export class BodyControl {
  sunroof: boolean = false;
  doors: boolean = false;
  chargeport: boolean = false;
  windows: boolean = false;
  doorsfl: boolean = false;
  doorsfr: boolean = false;
  doorsbl: boolean = false;
  doorsbr: boolean = false;
  trunk: boolean = false;
  frunk: boolean = false;

  static asBodyControl (json: any): BodyControl {
    const li: BodyControl = Object.assign(new BodyControl(), json);
    return li;
  }

  static asBodyControls(jsonArray: Array<Object>): BodyControl[] {
    return jsonArray.map((datum) => BodyControl.asBodyControl(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
