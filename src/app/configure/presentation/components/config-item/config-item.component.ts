import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IQuestion } from "../../models/iquestion";

@Component({
    selector: 'app-config-item',
    templateUrl: './config-item.component.html',
    styleUrls: ['./config-item.component.scss'],
})
export class ConfigItemComponent implements OnInit {

    @Input() public question: IQuestion;
    @Output() public onClickDelete: EventEmitter<any> = new EventEmitter();
    @Output() public onChange: EventEmitter<any> = new EventEmitter();

    public ngOnInit(): void {
        
    }

    public deleteQuestion(): void {
        this.onClickDelete.emit();
    }

    public addAnswer(): void {
        this.question.answers.push({
            value: ''
        });
    }

    public removeAnswer(i: number): void {
        this.question.answers.splice(i, 1);
    }

    public answerValueChange(e: KeyboardEvent, i: number): void {
        const input = e.target as HTMLInputElement;
        if (input.value.length && i == this.question.answers.length - 1) {
            this.addAnswer();
        }
        this.onChange.emit();
    }

    public answerFocusOut(e: FocusEvent, i: number): void {
        const input = e.target as HTMLInputElement;
        if (!input.value.length && i < this.question.answers.length - 1) {
            this.removeAnswer(i);
        }
    }

}