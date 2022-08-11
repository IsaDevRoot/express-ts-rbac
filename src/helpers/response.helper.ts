import {Response} from 'express';

export default {
    ok: (values: Array<object> | string | object, res: Response, message = "Request was successfully processed and returned") => {
        let status_code = 200
        let data = {
            "code": status_code,
            "message": message,
            "result": values,
            
        }
        return res.status(status_code).json(data)
    },
    created: (values: Array<object> | string | object, res: Response, message = "Request was successfully processed and created") => {
        let status_code = 201
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).json(data)
    },
    bad: (values: Array<object> | string | object, res: Response, message = "Missing or invalid parameter(s)") => {
        let status_code = 400
        let data = {
            "code": status_code,
            "message": message,
            "result": values,
            
        }
        return res.status(status_code).json(data)
    },
    notFound: (values: Array<object> | string | object, res: Response, message = "Ops... Not Found") => {
        let status_code = 404
        let data = {
            "code": status_code,
            "message": message,
            "result": values,
        }
        return res.status(status_code).json(data)
    },
    error: (values: Array<object> | string | object, res: Response, message = "Ops... Internal server error, please contact support") => {
        let status_code = 500
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).json(data)
    },
}