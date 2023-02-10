export class Event {
    id: number;
    title: string|null;
    text: string|null;

    constructor(id: number, title?: string, text?: string) {
        this.id = id;
        this.title = title || null;
        this.text = text || null;
    }
}