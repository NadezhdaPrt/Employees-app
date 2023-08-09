import { Component } from 'react';
import AppFilter from '../components/app-filter/app-filter';
import AppInfo from '../components/app-info/app-info';
import EmployeesAddForm from '../components/employees-add-form/employees-add-form';
import EmployeesList from '../components/employees-list/employees-list';
import SearchPanel from '../components/search-panel/search-panel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John Smith',
          salary: 4500,
          increase: true,
          rise: false,
          id: 1
        },
        {
          name: 'John Doe',
          salary: 1200,
          increase: false,
          rise: true,
          id: 2
        },
        {
          name: 'Mary Jane',
          salary: 3950,
          increase: true,
          rise: false,
          id:3
        }
      ],
      term: '',
      filter: 'rise'      
    }
    this.maxId = 4
  }
  deleteItem = (id) => {
    this.setState(({data}) => {      
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }
  onToggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })      
    }))
  }
  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item;
      })      
    }))
  }
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }
  onUpdateSearch = (term) => {
    this.setState({term});
  }
  filterPost = (items, filter) => {
    switch(filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThan1000': 
        return items.filter(item => item.salary > 1000);
      default: 
        return items;    
    }
  }
  onFilterSelect = (filter) => {
    this.setState({filter});
  }
  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}/>
        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter 
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>        
        </div>
        <EmployeesList 
          data={visibleData} 
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise} />
        <EmployeesAddForm onAddEmployee={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
