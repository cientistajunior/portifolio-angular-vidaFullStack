import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowLedge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conecimento de HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conecimento de CSS3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conecimento de JS',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conecimento de NodeJS',
    },
  ]);
}
