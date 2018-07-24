import { Routes, RouterModule } from '@angular/router';
import { ChallengeComponent } from './challenge/challenge.component';


const CHALLENGE_ROUTES: Routes = [
    {
        path: '',
        component: ChallengeComponent
    }
];

export const ChallengeRouter = RouterModule.forChild(CHALLENGE_ROUTES);
