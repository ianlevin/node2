class ValidacionesHelper{
    getIntegerOrDefault = (value, defaultValue) => {
        if(isNaN(value)){
            return parseInt(value)
        }else{
            return defaultValue
        }
    }

    getStringOrDefault = (value, defaultValue) => {
        if(value != null && value != undefined){
            return value
        }else{
            return defaultValue
        }
    }
}
export default ValidacionesHelper = new ValidacionesHelper();