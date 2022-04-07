import {useState} from 'react'

export const newQuestion = ()=>{
    return Question()
}
var indexList = -1
const Question = ()=>{
    const QuestionList = [
        {
            question:"Comment s'appelle Marvin?",
            reponse:"0",
            responsesPossible:[
                'Marvin',
                "Jean-Pierre",
                'Prouteur',
                "Martin"
            ]
        },
        {
            question:"Combien font 2+2x3?",
            reponse:"2",
            responsesPossible:[
                '3',
                "12",
                "8",
                '9'
            ]
        },
        {
            question:"Quel était le prénom de notre deuxieme formateur?",
            reponse:"3",
            responsesPossible:[
                'Dedier',
                "Martin",
                'Marc',
                'Yohann',
            ]
        },
        {
            question:"Quelle est la capitale de l'Autriche?",
            reponse:"0",
            responsesPossible:[
                'Vienne',
                "Kiev",
                'Berne',
                'Sofia',
            ]
        },
        {
            question:"Comment s'appelle le président des USA?",
            reponse:"2",
            responsesPossible:[
                'Donald Trump',
                "Emmanuel Macron",
                'Joe Biden',
                'George Bush',
            ]
        },
        {
            question:"En quelle année a débuté la Guerre Froide?",
            reponse:"3",
            responsesPossible:[
                '1804',
                '1989',
                '1918',
                '1947',
            ]
        }
    ]
    indexList++
    return QuestionList[indexList]
return(
        newQuestion()
    )
}