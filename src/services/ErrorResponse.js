class ErrorResponse {
    errors = {
        "UnauthorizedError": {
            title: "Autenticação invalida",
            body: "Você não tem as permisões necesárias.",
            varian: "danger"
        },
        "BadRequestError": {
            title: "Informações inválidas",
            body: "Verifique os dados preenchidos",
            varian: "warning"
        }
    };

    response(error) {
        const defaultResponse = "Shiii... Tivemos um probleminha :'(";

        if (error.data && error.data.code && this.errors[error.data.code] === undefined) {
            return defaultResponse;
        }

        let errors = this.errors[error.data.code]

        if (error.data.errors) {
            const result = Object.keys(error.data.errors).map((index) => {
                let list = undefined;

                const data = error.data.errors[index];

                if (Array.isArray(data)) {
                    list = data.join(', ')
                } else {
                    list = data;
                }

                return `${index}: ${list}`
            })

            if (result !== undefined) {
                errors.result = result;
            }

        }
        return errors;
    }
}

export default new ErrorResponse()