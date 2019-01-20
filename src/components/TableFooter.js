import React, { Component } from 'react';

class TableFooter extends Component {
    render() {
        return (
            <div>
                 <button onClick={this.props.loadMore} type="button" className="loadMoreBtn">Load more</button>   
            </div>
        );
    }
}

export default TableFooter;
