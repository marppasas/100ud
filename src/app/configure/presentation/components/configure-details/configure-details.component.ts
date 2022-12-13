import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/core/services/config.service";
import { IQuestion } from "../../models/iquestion";

@Component({
    selector: 'app-config',
    templateUrl: './configure-details.component.html',
    styleUrls: [ './configure-details.component.scss' ],
})
export class ConfigureDetailsComponent implements OnInit {

    public questions: IQuestion[] = [];
    public unsavedConfig: boolean = false;

    constructor(
        private configService: ConfigService
    ) {}

    public get canExport(): boolean { return this.questions.filter(t => t.value.trim().length && t.answers.filter(x => x.value.trim().length).length).length > 0; }

    public ngOnInit(): void {
        this.questions = this.configService.load();
        for (let q of this.questions) {
            q.answers.push({
                value: '',
            });
        }
    }

    public addQuestion(): void {
        this.questions.push({
            value: '',
            answers: [
                { value: '' }
            ],
        });
        this.unsavedConfig = true;
    }

    public deleteQuestion(i: number) {
        this.questions.splice(i, 1);
        this.unsavedConfig = true;
    }

    public questionChanged(): void {
        this.unsavedConfig = true;
    }

    public save(): void {
        this.questions = this.questions.filter(t => t.value.trim().length);
        this.configService.save(this.questions);
        this.unsavedConfig = false;
    }

    public export(): void {
        if (this.canExport) {
            this.configService.export(this.questions);
        }
    }

    public import(): void {
        this.configService.import((e) => {
            for (let q of e) {
                q.answers.push({
                    value: '',
                });
            }
            this.questions = e;
            this.unsavedConfig = true;
        });
    }

    public clear(): void {
        if (!confirm("¿Estás seguro de que querés eliminar la configuración?")) {
            return;
        }

        this.questions = [];
        this.unsavedConfig = true;
    }

}