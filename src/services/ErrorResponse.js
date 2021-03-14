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
        },
        "NotFoundError": {
            title: "Solicitação não encontrada",
            body: "Não conseguimos encontrar um resultado",
            varian: "warning"
        }
        
    };

    response(error) {
        const defaultResponse = "Shiii... Tivemos um probleminha :'(";

        if (error.data && error.data.code && this.errors[error.data.code] === undefined) {
            return defaultResponse;
        }

        return this.errors[error.data.code];
    }
}

export default new ErrorResponse()