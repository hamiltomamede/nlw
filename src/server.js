const proffys =[
    {
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"7199999-9999",
        bio:"Teste lalalala",
        subject:"Química",
        cost:"40",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    },
    {
        name:"Hamilto Mamede",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"",
        bio:"Teste lalalala",
        subject:"Química",
        cost:"40",
        weekday:[2],
        time_from:[720],
        time_to:[1220]
    }
]
const subjects =[
    "Artes",
    "Biologia",
   "Ciências",
    "Educação física",
 "Física",
    "Geografia",
  "História",
    "Matemática",
    "Português",
   "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber
    return subjects[arrayPosition]
}
function pageLanding(req, res){
    return res.render("index.html")
}
function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res){
    const data =req.query
    const isNotEmpty = Object.keys(data).length > 0
    if  (isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html",{ subjects, weekdays})
}
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})


server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.listen(5000) 
