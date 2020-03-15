import * as React from 'react';
import './Stylesheet.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../actions';

import axios from 'axios';

const apiUrl = 'http://localhost:4000/api/questions';

interface Props {
    clickButton : any,
    newValue: any
}

interface State {
    inputValue: any
}

class Quiz extends React.Component<Props, State> {
    static defaultProps: Props = {
        clickButton : null,
        newValue : ''
    }

    state: Readonly<State> = {
        inputValue : ''
    }

    inputChange = (event:any) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    componentDidMount() {
        //this.fetchQuestions();
    }
    render() {
        const { clickButton, newValue } = this.props;
        const { inputValue } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
                <div style={{ width: '80%', margin: '0 auto' }} className='selft-align-center border p-5'>
                    <h1 className='h5 mb-3'>What's the meaning of life?</h1>
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
    newValue: store.clickState.newValue
});
const mapDispatchToProps = (dispatch:any) => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
