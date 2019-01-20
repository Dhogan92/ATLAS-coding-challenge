import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import TableHeaderTitles from './TableHeaderTitles'
import TableFooter from './TableFooter';



class TableData extends Component {
      constructor(props){
    super(props)
    this.state = {
      didMount: false,
      data: this.props.data,
      limit: 50,
      
      
    }
   
  }

  loadMore = () => {
    this.setState((prev) => {
        return {limit: prev.limit + 50}
    })
  }

  componentDidMount() {
    this.setState({
      didMount: true,
      data: this.props.data,
      limit: 50,
    })
  }

    render() {
        return (
            <table className="fixedHeader">
                <Table responsive striped hover>
                <TableHeaderTitles
                data={this.props.data}
                sortByNameAsc={this.props.sortByNameAsc}
                sortByNameDesc={this.props.sortByNameDesc}
                sortByCaseNoAsc={this.props.sortByCaseNoAsc}
                sortByCaseNoDesc={this.props.sortByCaseNoDesc} />

                <tbody className="commTable">
                    {this.state.data.communities.slice(0, this.state.limit).map((item, index) => {
                        return(
                            <tr key={index}>
                                <td className="commData">{item.name}</td>
                                <td className="commData">{item.cases}</td>
                            </tr>
                        )
                    })}
                <TableFooter loadMore={this.loadMore} />
                </tbody>
                </Table>
            </table>
        );
    }
}

export default TableData;
