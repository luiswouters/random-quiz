import * as React from 'react';

class Quiz extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>What's the meaning of life?</h1>
                <label><input type='radio'/> True</label>
                <button type='submit'>Next</button>
            </div>
        );
    }
}

export const App = () => (
    <Quiz />
);
