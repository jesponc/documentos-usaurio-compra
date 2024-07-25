class Response {
    static format(success, data){
        return {
            success,
            data,
        }
    }
}

module.exports = Response