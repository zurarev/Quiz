const url = 'http://localhost:7777'

export const getQuestions = async () => {
  try {
    return await fetch(`${url}/questions`).then(res =>
      res.json()
    );
  } catch (err) {
    throw err;
  }
};

export const getAnswer = async id => {
  try {
    return await fetch(`${url}/answer/${id}`).then(res =>
      res.json()
    );
  } catch (err) {
    throw err;
  }
};
