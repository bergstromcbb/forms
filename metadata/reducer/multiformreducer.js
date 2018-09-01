const initialState = {
    ahuFormData: {},
    vavFormData: {}

}

export default function multiFormReducer(state = initialState, action) {
    switch (action.type) {

        case "SAVE_AHU_DATA":
            return {
                ...state,
                ahuFormData: action.payload
            }

        case "SAVE_VAV_DATA":
            return {
                ...state,
                vavFormData: action.payload
            }

        default:
            return state
    }
}