import React, { Component } from 'react';

class TableHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            didMount: false,
            data: this.props.data,
        }
    }

    componentDidMount() {
        this.setState({
          didMount: true,
          data: this.props.data,
        })
      }

    render() {
        return (
            <div className="tableHeader">
                    <p>List of Communities</p>
                    <h2>{this.state.data.communities.length}</h2>
                    <p>Communities in <b>{this.state.data.name}</b></p>
            </div>
        );
    }
}

export default TableHeader;
