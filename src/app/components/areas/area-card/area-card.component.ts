import { Component, Input } from '@angular/core';
import { AreaKnowledge } from 'src/app/models/areaknowledge.model';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent {

  @Input() areaknowledge!: AreaKnowledge;

}
