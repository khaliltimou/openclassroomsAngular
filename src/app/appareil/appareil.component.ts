import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil-services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input () id: number;
  constructor(private _appareilService: AppareilService) {
  }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'OFF') {
      return 'red';
    } else if (this.appareilStatus === 'ON') {
      return 'green';
    }
  }
  onSwitchOn() {
    this._appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    this._appareilService.switchOffOne(this.indexOfAppareil);
  }
}
