import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  DepartmentComponent,
  DepartmentDetailComponent,
  DepartmentUpdateComponent,
  DepartmentDeletePopupComponent,
  DepartmentDeleteDialogComponent,
  departmentRoute,
  departmentPopupRoute
} from './';

const ENTITY_STATES = [...departmentRoute, ...departmentPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DepartmentComponent,
    DepartmentDetailComponent,
    DepartmentUpdateComponent,
    DepartmentDeleteDialogComponent,
    DepartmentDeletePopupComponent
  ],
  entryComponents: [DepartmentComponent, DepartmentUpdateComponent, DepartmentDeleteDialogComponent, DepartmentDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationDepartmentModule {}
