/* eslint-disable no-underscore-dangle */
import {toast} from 'react-hot-toast'

export class ToastPromiseHandler {
    constructor(message = "Loading...") {
        this.__toastId__ = toast.loading(message);
    }

    private __toastId__: string;

    get toastId(): string {
        return this.__toastId__;
    }

    public success(message = "Success") {
        toast.success(message, {
            id: this.__toastId__,
        });
    }

    public error(message = "Error") {
        toast.error(message, {
            id: this.__toastId__,
        });
    }

}