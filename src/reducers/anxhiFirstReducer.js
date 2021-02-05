export const MACI_VOGEL = "";
export const ARUSHI_PUSHI = ""


const INITIAL_STATE = {
    activeAnimal: "",
    tests: ''
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case MACI_VOGEL:

           return {
            ...state,
             activeAnimal: "MACI VOGEl",
           };

        case ARUSHI_PUSHI:

           return {
            ...state,
            activeAnimal: "ARUISHI PUSHI",

           };

         default: return state;

    }

};

export default reducer;