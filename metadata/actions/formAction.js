export class FormAction {
    static saveAhuFormData(payload) {
        return {
            type: "SAVE_AHU_DATA",
            payload
        }
    }

    static saveVavFormData(payload) {
        return {
            type: "SAVE_VAV_DATA",
            payload
        }
    }
}