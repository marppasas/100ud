import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfigureDetailsComponent } from "./presentation/components/configure-details/configure-details.component";

const routes: Routes = [
    { path: '', component: ConfigureDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ConfigureRoutingModule {}