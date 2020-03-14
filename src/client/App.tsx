import * as React from 'react';
import './Stylesheet.css'

class Quiz extends React.Component {
    componentDidMount() {

    }

    render() {
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
                    <label><input name="answer" type='text'/></label>
                    <button type='button' className='btn btn-primary rounded-0 d-block mt-2'>Next</button>
                </div>
                <div style={{ width: '80%', margin: '0 auto' }} className='selft-align-center border p-5'>
                    <h1 className='h5 mb-3'>What's the meaning of life?</h1>
                    <ul>
                        <li>Correct: <strong>2</strong></li>
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

export const App = () => (
    <Quiz />
);
