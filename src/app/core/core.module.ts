import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PresentationModule } from "./presentation/presentation.module";

@NgModule({
    imports: [
        PresentationModule,
        CommonModule,
    ],
    exports: [
        PresentationModule,
        CommonModule,
    ]
})
export class CoreModule {} 