import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { AdmLeadComponent } from './components/adm-lead/adm-lead.component';
import { NewLeadComponent } from './components/new-lead/new-lead.component';

import { DragDropModule } from '@angular/cdk/drag-drop'


@NgModule({
  declarations: [AdmLeadComponent, NewLeadComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    DragDropModule
  ],
  exports: [
    AdmLeadComponent, 
    NewLeadComponent
  ]
})
export class LeadsModule { }
