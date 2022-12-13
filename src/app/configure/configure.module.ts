import { NgModule } from "@angular/core";
import { ConfigureRoutingModule } from "./configure-routing.module";
import { PresentationModule } from "./presentation/presentation.module";

@NgModule({
    imports: [
        ConfigureRoutingModule,
        PresentationModule,
    ]
})
export class ConfigureModule {}