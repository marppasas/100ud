import { NgModule } from "@angular/core";
import { BackBarComponent } from "./back-bar/back-bar.component";

@NgModule({
    declarations: [
        BackBarComponent,
    ],
    exports: [
        BackBarComponent,
    ],
})
export class PresentationModule {}