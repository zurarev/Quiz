import { SET_ANSWER } from "../actions/ActionsType";

const initialState = {
  answers: []
};

const answersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("payload", payload);
  switch (type) {
    case SET_ANSWER:
      //ტესტის ასლის შექმნა
      let answers = [...state.answers];
      // მსგავსი ობიექტის ინდექსის მოძებნა
      let index = answers.findIndex(x => x.question === payload.question);
      //შემოწმება ინდექსის და არსებობის შემთხვევაში განახლება და წინააღმდეგ შემთხვევაში ჩაწერა
      if (index !== -1) {
        answers[index] = payload;
      } else {
        answers.push(payload);
      }
      return { answers };
    default:
      return state;
  }
};

export default answersReducer;
