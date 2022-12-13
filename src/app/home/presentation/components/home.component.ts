import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IQuestion } from "src/app/configure/presentation/models/iquestion";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {

    public hasQuestions: boolean = false;

    constructor(
        private router: Router
    ) {}

    public ngOnInit(): void {
        const json: string | null = localStorage.getItem('config');
        if (json == null) return;

        try {
            const questions: IQuestion[] = JSON.parse(json);
            this.hasQuestions = questions != null && questions.length > 0;
        } catch (e) { }
    }

    public goConfig(): void {
        this.router.navigate([ '/config' ]);
    }

    public goPlay(): void {
        this.router.navigate([ '/game' ]);
    }

}