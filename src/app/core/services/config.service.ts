import { Injectable } from "@angular/core";
import { IQuestion } from "src/app/configure/presentation/models/iquestion";

@Injectable()
export class ConfigService {

    private static CONFIG_KEY: string = 'config';

    public save(p: IQuestion[]): void {
        const aux: IQuestion[] = JSON.parse(JSON.stringify(p));
        const e = aux.map(t => {
            t.answers = t.answers.filter(x => x.value.trim().length);
            return t;
        });
        const str: string = JSON.stringify(e);
        localStorage.setItem(ConfigService.CONFIG_KEY, str);
    }

    public load(): IQuestion[] {
        let questions: IQuestion[] = JSON.parse(this.getJson()!);
        return questions ?? [];
    }

    public export(p: IQuestion[]): void {
        const aux: IQuestion[] = JSON.parse(JSON.stringify(p));
        const e = aux.filter(t => t.value.trim().length).map(t => {
            t.answers = t.answers.filter(x => x.value.trim().length);
            return t;
        });

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(e));

        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', '100ud-game.json');

        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    public import(onLoad: (e: IQuestion[]) => void): void {
        var input = document.createElement('input');
        input.type = 'file';

        input.onchange = e => {
            const el = e.target as HTMLInputElement;
            if (el.files == null) return;
            const file = el.files[0];

            const reader = new FileReader();
            reader.readAsText(file,'UTF-8');

            reader.onload = r => {
                if (r.target == null) return;
                const content = r.target.result as string;
                try {
                    const obj: IQuestion[] = JSON.parse(content);
                    onLoad(obj);
                } catch (ex) {
                    alert('Ha ocurrido un problema al cargar el archivo.');
                }
            };
        };

        document.body.appendChild(input);
        input.click();
        input.remove();
    }

    private hasConfig(): boolean {
        return this.getJson() != null;
    }

    private getJson(): string | null {
        return localStorage.getItem(ConfigService.CONFIG_KEY);
    }

}