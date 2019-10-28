const express = require("express")
cors = require("cors")

const app = express()
app.use(cors())

const questions = [
  {
    id: 1,
    question: "რომელ სახელმწიფოსთან ბრძოლაში განადგურდა დიაოხი?",
    choices: [{id:1, value:"ასურეთის"}, {id:2, value:"ხეთების"}, {id:3, value:"ურარტუს"}, {id:4, value:"სპარსეთის"}],
    answer: {id:3, value:"ურარტუს"}
  },
  {
    id: 2,
    question: "რომელი სახელმწიფოს ოფიციალური რელიგია იყო ზოროასტრიზმი?",
    choices: [{id:1, value:"სასანიანთა ირანის"}, {id:2, value:"აბასიანთა სახალიფოს"}, {id:3, value:"პტოლემაიოსების ეგვიპტის"}, {id:4, value:"პონტოს სამეფოს"}],
    answer: {id:1, value:"სასანიანთა ირანის"}
  },
  {
    id: 3,
    question: "რომელი რომაელი ისტორიკოსი აღწერს პომპეუსის ლაშქრობას ქართლის სამეფოში?",
    choices: [{id:1, value:"პოლიბიოსი"}, {id:2, value:"ჰეროდოტე"}, {id:3, value:"დიონ კასიუსი"},{id:4, value:"ქსენოფონტე"}],
    answer: {id:4, value:"ქსენოფონტე"}
  },
  {
    id: 4,
    question: "რომელი ერისმთავრის დროს აიგო მცხეთის ჯვრის ტაძარი?",
    choices: [{id:1, value:"გუარამის"}, {id:2, value:"სტეფანოზის"}, {id:3, value:"ნერსეს"}, {id:4, value:"ჯუანშერის"}],
    answer: {id:2, value:"სტეფანოზის"}
  },
  {
    id: 5,
    question: "ვის ეხმარებოდა ლიპარიტ ბაღვაში სელჩუკების წინააღმდეგ ბრძოლაში? ",
    choices: [{id:1, value:"არაბებს"}, {id:2, value:"ჯვაროსნებს"}, {id:3, value:"ბიზანტიელებს"}, {id:4, value:"მონღოლებს"}],
    answer: {id:3, value:"ბიზანტიელებს"}
  }
]

app.get("/questions", (req, res) => {
  res.json(
    questions.map(({ id, question, choices }) => ({ id, question, choices }))
  )
})

app.get("/answer/:id", (req, res) => {
  const currentQuestion = questions.find(q => q.id == req.params.id)
  res.json({ id: currentQuestion.id, answer: currentQuestion.answer })
})

const port = process.env.PORT || 7777
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}/`)
})
