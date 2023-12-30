class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = "",
        additionalData = null // Adding a new field for additional data

    ){
        super(message)
        this.statusCode = statusCode
        // this.data = null
        this.data = additionalData; // Assigning the provided additional data

        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}