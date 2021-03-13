class HttpResponse {
    constructor(data, status) {
        this.data = data || null;
        this.status = status || null;
    }

    hasErrorBag(){
        return !!this.data && !!this.data.errors;
    }
}

export default HttpResponse;
