import React, {Component} from 'react';

class RenderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.item.title,
            id: props.item.id,
            done: props.item.done
        };
    }

    changeStatus = () => {
        this.setState({done: this.state.done === false});
    };

    render() {
        return (
            <div className='list'>
                <p className={this.state.done ? 'done' : 'undone'} onClick={this.changeStatus}>
                    {this.state.title}
                </p>
            </div>
        );
    }
}

export default RenderList;