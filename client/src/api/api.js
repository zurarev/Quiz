export const getQuestions = async () => {
  try {
    return await fetch(`http://localhost:7777/questions`).then(res =>
      res.json()
    );
  } catch (err) {
    throw err;
  }
};

export const getAnswer = async id => {
  try {
    return await fetch(`http://localhost:7777/answer/${id}`).then(res =>
      res.json()
    );
  } catch (err) {
    throw err;
  }
};
