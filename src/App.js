import React, { Component } from 'react';
import './App.css';
import jsonData from './data.json';
import TableData from './components/TableData';
import TableHeader from './components/TableHeader';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      didMount: false,
      data: jsonData,
      // The Panel's initial className
      panelClassName: 'appSideMenu',
      // The Menu button's initial className
      menuBtnClassName: 'menuBtn',
      // The initial text in the Menu button
      menuBtnText: 'Menu',
  
    }
  }

  componentDidMount() {
    this.setState({
      didMount: true,
      data:  jsonData,
    })
  }

  sortByCaseNoAsc = () => {
      this.setState({
        data: jsonData.communities.sort((a, b) => {
          return a.cases - b.cases
      }),
    })
  }

  sortByCaseNoDesc = () => {
    this.setState({
      data: jsonData.communities.reverse((a, b) => {
        return a.cases - b.cases
    }),
  })
}

  sortByNameAsc = () => {
    this.setState({
      data: jsonData.communities.sort((a, b) => {
        const nameA = a.name.toLowerCase() 
        const nameB = b.name.toLowerCase()
        
        
        if(nameA < nameB)
        return -1
        if(nameA > nameB)
        return 1
        return 0
      }),
    })
  }

  sortByNameDesc = () => {
    this.setState({
      data: jsonData.communities.sort((a, b) => {
        const nameA = a.name.toLowerCase() 
        const nameB = b.name.toLowerCase()
        
        
        if(nameA > nameB)
        return -1
        if(nameA < nameB)
        return 1
        return 0
      }),
    })
  }


  toggleMenu = () => {
    if (this.state.panelClassName === 'appSideMenuActive') {
      return this.setState({
      panelClassName: 'appSideMenu',
      menuBtnClassName: 'menuBtn',
      menuBtnText: 'Menu',
      })}
    else {
     return this.setState({
        panelClassName: 'appSideMenuActive',
        menuBtnClassName: 'menuBtnActive',
        menuBtnText: 'Close',
      })
    }
  }

  render() {
    let ready = this.state.didMount;
    if (ready === false) {
        return (
          <div className="logo-cntnr">
            Loading...
          </div>
        )
    }
    return (
      <div className="App">
        <div className="appNav"></div>

        <div className={this.state.panelClassName}>
        <TableHeader data={this.state.data} />
        <TableData
        // Passing data and functions as props to populate and sort the table
        data={this.state.data}
        sortByNameAsc={this.sortByNameAsc}
        sortByNameDesc={this.sortByNameDesc}
        sortByCaseNoAsc={this.sortByCaseNoAsc}
        sortByCaseNoDesc={this.sortByCaseNoDesc} />
        </div>

        <div className="appBody">
        <button className={this.state.menuBtnClassName} onMouseDown={this.toggleMenu}>
         {this.state.menuBtnText}
        </button>
        </div>

        <footer className="appFooter"></footer>
      </div>
    );
  }
}

export default App;
