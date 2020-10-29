import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-adm-lead',
  templateUrl: './adm-lead.component.html',
  styleUrls: ['./adm-lead.component.css']
})
export class AdmLeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clientePot = [
    'C&A',
    'McDonalds',
  ];

  dadosConfirm = [
    'Honda',
    'Banco do Brasil'
  ]

  reuniaoAg = [
    'Petrobras'
  ]


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
