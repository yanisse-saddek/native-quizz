import {View, CheckBox, Text, Button,Pressable, StyleSheet} from 'react-native'
import {useState, useEffect} from "react"
import {newQuestion} from './NewQuestion'

export default function Game(){
    const [isSelected, setSelect] = useState([false, false, false, false])
    const [answerMsg, setAnswerMsg] = useState(null)
    const [question, setQuestion] = useState(null)
    const [score, setScore] = useState(0)
    const [gameActif, setGameActif] = useState(true)


    useEffect(()=>{
        var quest = newQuestion()
        setQuestion(quest)
    }, [])

    const changeSelected = (index)=>{
        if(gameActif){
            var newSelect = [false, false, false, false]
            newSelect[index] = true
            setSelect(newSelect)
        }
    }
    const submitAnswer = ()=>{
        var indexAnswer = null
        isSelected.filter((choice, index)=> {
            if(isSelected[index] == true){
                indexAnswer = index
            }
        })
        if(question.reponse == indexAnswer){
            goodAnswer()
        }else{
            badAnswer()
        }
        setGameActif(false)
    }
    const goodAnswer = ()=>{
        setScore(score+1)
        setAnswerMsg("Bien joué! La réponse était " + question.responsesPossible[question.reponse])
    }
    const badAnswer = ()=>{
            setAnswerMsg("Dommage! La réponse était " + question.responsesPossible[question.reponse])
    }
    const nextQuestion = ()=>{
        setQuestion(newQuestion())
        setSelect(question.responsesPossible.map(()=>false))
        setAnswerMsg(null)
        setGameActif(true)
    }
    return(
        <View style={styles.game}>
            {
            question?
            <View style={styles.gameButtons}>
            <Text style={styles.question}>{question.question}</Text>
                <View style={styles.grid}>
                    {
                        question.responsesPossible.map((reponse,index)=>{
                            var colorList = ['red', 'blue', 'orange', 'green']
                            var styleCase = colorList[index]
                            console.error(styleCase)

                            return(
                                <Pressable style={styles.case}  onPress={()=>{changeSelected(index)}}>
                                    <Text style={styles.caseText}>{question.responsesPossible[index]}</Text>
                                </Pressable>
                            )
                        })
                    }   
                </View>
                <View style={styles.subButton}>
                {
                    answerMsg?
                    <View>
                        <Text>{answerMsg}</Text>
                        <Pressable onPress={nextQuestion}>
                            <Text>Question suivante</Text>
                        </Pressable>
                    </View>
                    :
                    null
                }
                {
                    isSelected.includes(true)&&gameActif?
                    <Pressable onPress={submitAnswer}>
                        <Text>Valider</Text>
                    </Pressable>
                    :null
                }
                </View>

            </View>
            :null
            }
            <View>
                    <Text>Score:{score}</Text>
            </View>
        </View>
    )
}

const cases = StyleSheet.create({
    caseColor1:{
        backgroundColor:'#E31A3E'
    },
    caseColor2:{
        backgroundColor:'#1268CD'
    },
    caseColor3:{
        backgroundColor:'#D99C02'
    },
    caseColor4:{
        backgroundColor:'#28880D'
    },
})
const styles = StyleSheet.create({
    grid:{
        display:"flex",
        flexWrap:'wrap'
    },  
    gameButtons:{
        height:'70%',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    question:{
        fontSize:20,
        fontWeight:"bold",
        height:"10%",
        textDecorationLine:"underline",
        textDecorationColor:"white"
    },  
    case:{
        display:"flex",
        alignItems:"center",
        width:150,
        height:180,
        display:"flex",
        borderRadius:30,
        margin:5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange"
    },
    caseText:{
        fontWeight:"bold",
        color:"white"
    },
    game:{
        flex:1,
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignItems:"center",
        justifyContent:"center",
    },
    subButton:{
        height:"10%"
    }
})