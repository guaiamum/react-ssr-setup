import React from 'react';
import RecursiveDivs from './components/RecursiveDivs';
import css from './App.module.css';

const App: React.FC<any> = () => {
    return (
        <div className={css.wrapper}>
            <RecursiveDivs depth={2} breadth={3} />
        </div>
    );
};

export default App;
