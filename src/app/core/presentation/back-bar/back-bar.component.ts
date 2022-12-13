import { Location } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-back-bar',
    templateUrl: './back-bar.component.html',
    styleUrls: [ './back-bar.component.scss' ]
})
export class BackBarComponent {

    @Input() title: string = 'Atrás';

    constructor(
        private location: Location
    ) {}

    public goBack(): void {
        this.location.back();
    }

}