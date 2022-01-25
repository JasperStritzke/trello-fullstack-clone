export default class ErrorResponse extends Error {
    public statusCode: number;
    public message: string;

    constructor(status: number, message: string, err?: Error | null) {
        super(message);

        this.statusCode = status;
        this.message = message;

        if (err) {
            console.log("Stacktrace: " + err.stack);
            console.log("Message: " + err.message);
        }
    }

    toString(): string {
        return this.statusCode + ': ' + this.message;
    }
}
