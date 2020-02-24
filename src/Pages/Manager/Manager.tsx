import React from 'react';
import { Card, Page } from '../../Style/Containers.Styled';

export function Manager() {
    return (
        <Page>
            <Card style={{ height: '300px', width: '200px' }}>Hello World! ~ Manager</Card>
        </Page>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}
