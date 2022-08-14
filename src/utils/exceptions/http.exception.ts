class HttpException extends Error {
    public static bad = 400;
    public static notFound = 404;
    public static error = 500;

    public status: number;
    public message: string;

    constructor(status: number, message?: string) {
        super(message);
        this.status = status;
        if (message) {
            this.message =  message;
        } else {
            switch (status) {
                case HttpException.bad:
                    this.message = "Missing or invalid parameter(s)";
                    break;
                
                case HttpException.notFound:
                    this.message = "Ops... Not Found";
                    break;
    
                case HttpException.error:
                    this.message = "Ops... Internal server error, please contact support";
                    break;
            
                default:
                    this.message = message ?? "Unknown Error"
                    break;
            }
        }
    }
}

export default HttpException;