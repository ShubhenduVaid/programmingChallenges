import { Routes, RouterModule } from '@angular/router';

import { GridComponent } from './grid/grid.component';

const GRID_ROUTES: Routes = [
  {
    path: 'grid',
    component: GridComponent
  }
];

export const GridRouter = RouterModule.forChild(GRID_ROUTES);
