import * as React from 'react';
import './Stylesheet.css'
import { connect } from 'react-redux';
import { fetchQuestions, finalizeQuiz, resetQuiz } from '../actions';
import Question from './Question';

interface Props {
    fetchQuestions : any,
    quizState: any,
    questionList: any,
    finalizeQuiz: any,
    resetQuiz: any,
    finalResult: any,
    userCorrectAnswers:any,
    userWrongAnswers:any,
    userQuestionsAnswered:any,
    finalScore:any,
}

interface State {
    inputValue: any,
}

class Quiz extends React.Component<Props, State> {
    static defaultProps: Props = {
        fetchQuestions : [],
        quizState : 'initial',
        questionList : [],
        finalizeQuiz :  null,
        resetQuiz :  null,
        finalResult: [],
        userCorrectAnswers: 0,
        userWrongAnswers: 0,
        userQuestionsAnswered: 0,
        finalScore: 0,
    }

    state: Readonly<State> = {
        inputValue : '',
    }

    inputChange = (event:any) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }
    render() {
        const { quizState, questionList, finalizeQuiz, resetQuiz, finalResult, userCorrectAnswers,
            userWrongAnswers,
            userQuestionsAnswered,
            finalScore,
        } = this.props;
        const { inputValue } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
                { quizState === 'question' &&
                    <div>{React.version}</div>
                }
                { quizState === 'question' &&
                    <Question questionList = {questionList} finalizeQuiz={finalizeQuiz}/>
                }
                { quizState === 'result' &&
                    <div style={{ width: '80%', margin: '0 auto' }} className='selft-align-center border p-5'>
                        <h1 className='h5 mb-3'>Summary</h1>
                        <ul>
                            <li>Correct: <strong>{userCorrectAnswers}</strong></li>
                            <li>Wrong: <strong>{userWrongAnswers}</strong></li>
                            <li>Questions answered: <strong>{userQuestionsAnswered}</strong></li>
                            <li>Final Score: <strong>{finalScore}%</strong></li>
                        </ul>
                        <button type='button' className='btn btn-primary rounded-0 d-block mt-2' onClick={resetQuiz}>Restart Quiz</button>
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = (store:any) => ({
    questionList: store.fetchQuestionsState.questionList,
    quizState: store.fetchQuestionsState.quizState,
    userCorrectAnswers: store.fetchQuestionsState.userCorrectAnswers,
    userWrongAnswers: store.fetchQuestionsState.userWrongAnswers,
    userQuestionsAnswered: store.fetchQuestionsState.userQuestionsAnswered,
    finalScore: store.fetchQuestionsState.finalScore,
});

export default connect(mapStateToProps, {fetchQuestions,finalizeQuiz, resetQuiz})(Quiz);
