export class Event {
    id: number;
    firstName: string|null;
    lastName: string|null;
    phoneNumber: number|null;
    phoneModel: string|null;
    description: string|null;

    constructor(id: number, firstName?: string, lastName?: string, phoneNumber?: number, phoneModel?: string, description?: string) {
        this.id = id;
        this.firstName = firstName || null;
        this.lastName = lastName || null;
        this.phoneNumber = phoneNumber || null;
        this.phoneModel = phoneModel || null;
        this.description = description || null;
    }
}