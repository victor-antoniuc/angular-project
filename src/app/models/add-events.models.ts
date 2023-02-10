export class AddEvent {
    id: number|null;
    title: string|null;
    text: string|null;

    constructor(id?: number, title?: string, text?: string) {
        this.id = id || null;
        this.title = title || null;
        this.text = text || null;
    }
}