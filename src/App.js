import React, {Component, ReactNode} from 'react';
import MakeNewTask from './components/MakeNewTask';
import RenderList from './components/RenderList';
import './App.css';

class App extends Component {
    constructor() {
        super();
    }

    state = {
        toDoList: [
            {
                title: 'Smth very important',
                id: 1,
                done: false
            },
            {
                title: 'Another very important thing',
                id: 2,
                done: false
            },
            {
                title: 'Ordinary thing',
                id: 3,
                done: true
            }
        ],
    };

    pushToList = (task) => {
        this.setState({
            toDoList: [...this.state.toDoList, task]
        });
    };

    render(): ReactNode {
        return (
            <div className='container'>
                <h3>My tasks:</h3>
                {this.state.toDoList.map((item, index) => {
                    return <RenderList key={index} item={item}/>;
                })}
                <MakeNewTask addState={this.pushToList}/>
            </div>
        );
    }
}

export default App;
