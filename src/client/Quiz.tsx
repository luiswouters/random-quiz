import * as React from 'react';
import './Stylesheet.css'
import { connect } from 'react-redux';
import { fetchQuestions, clickButton } from '../actions';
import Question from './Question';

interface Props {
    fetchQuestions : any,
    clickButton : any,
    newValue: any,
    quizState: any,
    questionList: any
}

interface State {
    inputValue: any,
}

class Quiz extends React.Component<Props, State> {
    static defaultProps: Props = {
        fetchQuestions : [],
        clickButton : null,
        newValue : '',
        quizState : 'initial',
        questionList : [],
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
        console.log(this.props)
    }
    render() {
        const { quizState, questionList, clickButton, newValue } = this.props;
        const { inputValue } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
                { quizState === 'initial' &&
                    <div>initial</div>
                }
                { quizState === 'question' &&
                    <Question questionList = {questionList}/>
                }
                { quizState === 'result' &&
                    <div>result</div>
                }
                <div style={{ width: '80%', margin: '0 auto' }} className='selft-align-center border p-5'>
                    <h1 className='h5 mb-3'>What's the meaning of life? {quizState}</h1>
                    <label className='d-block'><input name="answer" type='radio' /> True</label>
                    <label className='d-block'><input name="answer" type='radio' /> True</label>
                    <label className='d-block'><input name="answer" type='radio' /> True</label>
                    <button type='button' className='btn btn-primary rounded-0 d-block mt-2'>Next</button>
                </div>
                <div style={{ width: '80%', margin: '0 auto' }} className='selft-align-center border p-5'>
                    <h1 className='h5 mb-3'>What's the meaning of life?</h1>
                    <label><input name="answer" type='text' value={inputValue}  onChange={this.inputChange} /></label>
                    <button type='button' className='btn btn-primary rounded-0 d-block mt-2' onClick={() => clickButton(inputValue)}>Next</button>
                </div>
                <div style={{ width: '80%', margin: '0 auto' }} className='selft-align-center border p-5'>
                    <h1 className='h5 mb-3'>What's the meaning of life?</h1>
                    <ul>
                        <li>Correct: <strong>{React.version} - {newValue}</strong></li>
                        <li>Wrong: <strong>2</strong></li>
                        <li>Questions answered: <strong>2</strong></li>
                        <li>Final Score: <strong>2</strong></li>
                    </ul>
                    <button type='button' className='btn btn-primary rounded-0 d-block mt-2'>Restart Quiz</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store:any) => ({
    newValue: store.clickState.newValue,
    questionList: store.fetchQuestionsState.questionList,
    quizState: store.fetchQuestionsState.quizState,
});

export default connect(mapStateToProps, {fetchQuestions,clickButton})(Quiz);
