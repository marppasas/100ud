import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(t => t.HomeModule) },
    { path: 'config', loadChildren: () => import('./configure/configure.module').then(t => t.ConfigureModule) },
    { path: 'game', loadChildren: () => import('./game/game.module').then(t => t.GameModule) },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}