import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmLeadComponent } from './components/adm-lead/adm-lead.component';
import { NewLeadComponent } from './components/new-lead/new-lead.component';

const routes: Routes = [
  {path: 'adm-lead', component: AdmLeadComponent},
  {path: 'new-lead', component: NewLeadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
