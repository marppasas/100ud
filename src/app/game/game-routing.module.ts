import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameDetailsComponent } from "./presentation/components";

const routes: Routes = [
    { path: '', component: GameDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class GameRoutingModule { }