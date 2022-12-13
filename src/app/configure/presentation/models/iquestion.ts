import { IAnswer } from "./ianswer";

export interface IQuestion {
    value: string;
    answers: IAnswer[];
}