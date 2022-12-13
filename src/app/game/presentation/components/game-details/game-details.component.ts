import { Component, OnInit } from "@angular/core";
import { IQuestion } from "src/app/configure/presentation/models/iquestion";
import { ConfigService } from "src/app/core/services/config.service";

@Component({
    selector: 'app-game-details',
    templateUrl: './game-details.component.html',
    styleUrls: [ './game-details.component.scss' ]
})
export class GameDetailsComponent implements OnInit {

    public questions: IQuestion[];
    public currentQuestionIdx: number = 0;

    constructor(
        private configService: ConfigService
    ) {}

    public get question(): IQuestion { return this.questions[this.currentQuestionIdx]; }

    public ngOnInit(): void {
        this.questions = this.configService.load();
    }

    public clickAnswer(e: Event): void {
        const el = e.target as HTMLElement;
        el.classList.toggle('show');
    }

    public nextQuestion(): void {
        this.currentQuestionIdx++;
    }

    public prevQuestion(): void {
        this.currentQuestionIdx--;
    }
    
}