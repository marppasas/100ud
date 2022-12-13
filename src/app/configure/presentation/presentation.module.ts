import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { ConfigService } from "src/app/core/services/config.service";
import { ConfigItemComponent } from "./components/config-item/config-item.component";
import { ConfigureDetailsComponent } from "./components/configure-details/configure-details.component";

@NgModule({
    imports: [
        FormsModule,
        CoreModule,
    ],
    declarations: [
        ConfigureDetailsComponent,
        ConfigItemComponent,
    ],
    exports: [
        ConfigureDetailsComponent,
        ConfigItemComponent,
    ],
    providers: [
        ConfigService,
    ]
})
export class PresentationModule {}