import React, {Component, ReactNode} from 'react';

class MakeNewTask extends Component {
    constructor() {
        super();
    }

    state = {
        title: '',
        id: Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100),
        done: false
    };

    addTask = () => {
        let item = this.state;
        this.props.addState(item);
        this.setState({title: ''});
    };

    render(): ReactNode {
        return (
            <form className="form">
                <label className="label"> Enter new task:
                <input className="form_input"
                    value={this.state.title}
                    onChange={(e) => this.setState({title: e.target.value})}
                /></label>
                <button className="form_button"
                    onClick={() => {
                        this.addTask();
                    }}>
                    add to list
                </button>
            </form>
        );
    }
}

export default MakeNewTask;