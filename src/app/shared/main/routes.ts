import { Routes } from "@angular/router";
import { HomePage } from "src/app/modules/rats/presentation/pages/home/home.component";

/**
 * P.S: routes don't begin with '/'
 */
export const routes: Routes = [{
    path: '', component: HomePage,
}];