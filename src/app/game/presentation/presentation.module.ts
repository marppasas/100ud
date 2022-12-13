import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { ConfigService } from "src/app/core/services/config.service";
import { GameDetailsComponent } from "./components";

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: [
        GameDetailsComponent,
    ],
    exports: [
        GameDetailsComponent,
    ],
    providers: [
        ConfigService
    ]
})
export class PresentationModule {}