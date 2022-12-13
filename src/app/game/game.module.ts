import { NgModule } from "@angular/core";
import { GameRoutingModule } from "./game-routing.module";
import { PresentationModule } from "./presentation/presentation.module";

@NgModule({
    imports: [
        GameRoutingModule,
        PresentationModule
    ]
})
export class GameModule { }