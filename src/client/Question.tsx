import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    questionList: any,
    quizState: any,
    finalizeQuiz: any,
}

interface State {
    userQuestions: any,
    userAnswer: any,
    currQuestion: any,
    possibleAnswers: any,
    correctAnswer: any,
    inputValue: any,
    userCorrectAnswers: any,
    userWrongAnswers: any,
    userQuestionsAnswered: any,
    finalScore: any,
}

class Question extends React.Component<Props, State> {
    static defaultProps: Props = {
        questionList : [],
        quizState: '',
        finalizeQuiz: null,
    }
    state: Readonly<State> = {
        userQuestions: [],
        currQuestion: [],
        userAnswer : '',
        possibleAnswers : [],
        correctAnswer: '',
        userCorrectAnswers: 0,
        userWrongAnswers: 0,
        userQuestionsAnswered: 0,
        finalScore: 0,
        inputValue: '',
    }
    getQuestion(){
        return this.state.userQuestions[Math.floor(Math.random() * this.state.userQuestions.length)];
    }
    getAnswers(question:any) {
        let answers:any = [];
        if(question.type === 'multiple' || question.type === 'boolean'){
            answers.push(question.correct_answer, ...question.incorrect_answers);
        }
        if(question.type === 'any'){
            answers.push(question.correct_answer);
        }
        return answers;
    }
    selectAnswer(answer:any){
        this.setState({ userAnswer: answer});
    }
    mountQuiz(list:any){
        const currQuestion = list[Math.floor(Math.random() * list.length)];
        const userQuestions = list.filter((item:any) => item !== currQuestion);
        const possibleAnswers = this.getAnswers(currQuestion);
        const correctAnswer = currQuestion.correct_answer;
        
        this.setState({ userQuestions: userQuestions});
        this.setState({ currQuestion: currQuestion});
        this.setState({ possibleAnswers: possibleAnswers});
        this.setState({ correctAnswer: correctAnswer});
    }
    submitAnswer(answered:any, answer:any, question:any, list:any){
        let correct = 0;
        let wrong = 0;
        let total = 0;
        let final = 0;
        if(answer === answered) {
            correct = this.state.userCorrectAnswers + 1;
            total = this.state.userQuestionsAnswered + 1;
            wrong = this.state.userWrongAnswers;
            final = (correct*100)/total;
            this.setState((state, props) => (
                {
                //finalScore: ((state.userCorrectAnswers+1)*100)/state.userQuestionsAnswered + 1
                finalScore: final
            }));
            this.setState((state, props) => ({
                userCorrectAnswers: state.userCorrectAnswers + 1
            }));
        } else {
            correct = this.state.userCorrectAnswers;
            total = this.state.userQuestionsAnswered + 1;
            wrong = this.state.userWrongAnswers + 1;
            final = this.state.userCorrectAnswers > 0 ? (correct*100)/total : 0;
            this.setState((state, props) => ({
                finalScore: final
            }));
            this.setState((state, props) => ({
                userWrongAnswers: wrong
            }));
        }
        this.setState((state, props) => ({
            inputValue: ''
        }));
        this.setState((state, props) => ({
            userQuestionsAnswered: state.userQuestionsAnswered + 1
        }));
        this.setState({ userAnswer: ''});
        if(list.length > 0) {
            this.mountQuiz(list);
        } else {
            this.props.finalizeQuiz({userQuestionsAnswered: total, userCorrectAnswers: correct, userWrongAnswers : wrong, finalScore: final});
        }
    }
    htmlDecode(input:any){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }
    inputChange = (event:any) => {
        this.setState({
            inputValue: event.target.value
        })
        this.setState({ userAnswer: event.target.value});
    }
    componentDidMount(){
        this.mountQuiz(this.props.questionList);
    }
    render(){
        const { currQuestion, userQuestions, userAnswer, possibleAnswers, correctAnswer, inputValue } = this.state;
        const { mountQuiz, htmlDecode, submitAnswer, selectAnswer }  = this;
        return(
            <div style={{ width: '80%', margin: '0 auto' }} className='selft-align-center border p-5'>

                <h1 className='h5 mb-3'>{htmlDecode(currQuestion.question)}</h1>
                { currQuestion.type === 'multiple' &&
                    <div>
                        {possibleAnswers.map((answer:any, index:any) => 
                            <div key={index}>{<label className='d-block'><input name="answer" type='radio' value="{answer}" onChange={selectAnswer.bind(this, answer)} checked={userAnswer === answer} /> {htmlDecode(answer)}</label>}</div>
                        )}
                    </div>
                }
                { currQuestion.type === 'boolean' &&
                    <div>
                    {possibleAnswers.map((answer:any, index:any) => 
                        <div key={index}>{<label className='d-block'><input name="answer" type='radio' value="{answer}" onChange={selectAnswer.bind(this, answer)} checked={userAnswer === answer} /> {answer.replace('True','Yes').replace('False','No')}</label>}</div>
                    )}
                </div>
                }
                { currQuestion.type === 'text' &&
                    <div>
                        <label><input name="answer" type='text' value={inputValue} onChange={this.inputChange} /></label>
                    </div>
                }
                <button type='button' className='btn btn-primary rounded-0 d-block mt-2' onClick={submitAnswer.bind(this, userAnswer, correctAnswer, currQuestion, userQuestions)}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (store:any) => ({
    quizState: store.finalizeQuizState.quizState,
});

export default connect(mapStateToProps, {})(Question);