import { Component } from '@angular/core';
import { areasknowledges } from 'src/app/data/areaknowledge.data';
import { socialnetworks } from 'src/app/data/socialnetwork.data';

@Component({
  selector: 'app-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrls: ['./cv-summary.component.scss']
})
export class CvSummaryComponent {

  socialNetworks = socialnetworks;
  areasKnowledge = areasknowledges;

}
