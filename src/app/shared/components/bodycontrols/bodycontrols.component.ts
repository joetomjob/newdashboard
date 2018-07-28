import { Component, OnInit } from '@angular/core';
import { BodyControlService } from '../../services/body-controls.service';
import {BodyControl} from '../../models/body-controls-model';

@Component({
  selector: 'app-bodycontrols',
  templateUrl: './bodycontrols.component.html',
  styleUrls: ['./bodycontrols.component.css']
})
export class BodycontrolsComponent implements OnInit {
  key: string = 'bodyControl';
  _bodyControls: BodyControl;
  _sunroof: boolean = false;
  _doors: boolean = false;
  _chargeport: boolean = false;
  _windows: boolean = false;
  _windowstext: string = '';
  _doorstext: string = '';
  _doorsfl: boolean = false;
  _doorsfr: boolean = false;
  _doorsbl: boolean = false;
  _doorsbr: boolean = false;
  _trunk: boolean = false;
  _frunk: boolean = false;
  _windowfl: number = 1;
  _windowfr: number = 1;
  _windowbl: number = 1;
  _windowbr: number = 1;
  _windowfltext: string = '';
  _windowfrtext: string = '';
  _windowbltext: string = '';
  _windowbrtext: string = '';

  constructor(public _myService: BodyControlService) { }

  ngOnInit() {
    this.refreshData();
    setInterval(() => this.refreshData(), 10000);
  }

  public refreshData() {
    if (localStorage.getItem(this.key) && localStorage.getItem(this.key).length > 0) {
      this._bodyControls = <BodyControl> JSON.parse(localStorage.getItem(this.key));
      // this._doors = this._bodyControls.doors;
      // this._windows = this._bodyControls.windows;
      this._sunroof = this._bodyControls.sunroof;
      this._chargeport = this._bodyControls.chargeport;
      this._doorsfl = this._bodyControls.doorsfl;
      this._doorsfr = this._bodyControls.doorsfr;
      this._doorsbl = this._bodyControls.doorsbl;
      this._doorsbr = this._bodyControls.doorsbr;
      this._trunk = this._bodyControls.trunk;
      this._frunk = this._bodyControls.frunk;
      this._windowfl = this._bodyControls.windowfl;
      this._windowfr = this._bodyControls.windowfr;
      this._windowbl = this._bodyControls.windowbl;
      this._windowbr = this._bodyControls.windowbr;
      this.changeWindow();
      if (this._doorsfl || this._doorsfr || this._doorsbl || this._doorsbr || this._trunk || this._frunk) {
        this._doors = true;
      } else {
        this._doors = false;
      }
    } else {
      this._myService.getBodyControlsInfo()
        .subscribe((bc: BodyControl) => {
          this._bodyControls = bc;
          this._sunroof = this._bodyControls.sunroof;
          // this._doors = this._bodyControls.doors;
          // this._windows = this._bodyControls.windows;
          this._chargeport = this._bodyControls.chargeport;
          this._doorsfl = this._bodyControls.doorsfl;
          this._doorsfr = this._bodyControls.doorsfr;
          this._doorsbl = this._bodyControls.doorsbl;
          this._doorsbr = this._bodyControls.doorsbr;
          this._trunk = this._bodyControls.trunk;
          this._frunk = this._bodyControls.frunk;
          this._windowfl = this._bodyControls.windowfl;
          this._windowfr = this._bodyControls.windowfr;
          this._windowbl = this._bodyControls.windowbl;
          this._windowbr = this._bodyControls.windowbr;
          this.changeWindow();
          if (this._doorsfl || this._doorsfr || this._doorsbl || this._doorsbr || this._trunk || this._frunk) {
            this._doors = true;
          } else {
            this._doors = false;
          }
        }, (err: any) => {
          console.log(err);
        });
    }
  }

  public bodyControlChange() {
    this._bodyControls.sunroof = this._sunroof;
    // this._bodyControls.doors = this._doors;
    this._bodyControls.chargeport = this._chargeport;
    this._bodyControls.windows = this._windows;
    this._bodyControls.doorsfl = this._doorsfl;
    this._bodyControls.doorsfr = this._doorsfr;
    this._bodyControls.doorsbl = this._doorsbl;
    this._bodyControls.doorsbr = this._doorsbr;
    this._bodyControls.trunk = this._trunk;
    this._bodyControls.frunk = this._frunk;
    this._bodyControls.windowfl = this._windowfl;
    this._bodyControls.windowfr = this._windowfr;
    this._bodyControls.windowbl = this._windowbl;
    this._bodyControls.windowbr = this._windowbr;
    this.changeWindow();
    if (this._doorsfl || this._doorsfr || this._doorsbl || this._doorsbr || this._trunk || this._frunk) {
      this._doors = true;
    } else {
      this._doors = false;
    }
    if (this._windowfltext || this._windowfrtext || this._windowbltext || this._windowbrtext) {
      this._windows = true;
    } else {
      this._windows = false;
    }

    localStorage.setItem(this.key, JSON.stringify(this._bodyControls));
  }

  public changeWindow() {
    if (this._windowfl <= 1) {
      this._windowfltext = '';
    } else {
      this._windowfltext = 'OPEN';
    }
    if (this._windowfr <= 1) {
      this._windowfrtext = '';
    } else {
      this._windowfrtext = 'OPEN';
    }
    if (this._windowbl <= 1) {
      this._windowbltext = '';
    } else {
      this._windowbltext = 'OPEN';
    }
    if (this._windowbr <= 1) {
      this._windowbrtext = '';
    } else {
      this._windowbrtext = 'OPEN';
    }

    if (this._windowfltext || this._windowfrtext || this._windowbltext || this._windowbrtext) {
      this._windows = true;
    } else {
      this._windows = false;
    }
  }
}
