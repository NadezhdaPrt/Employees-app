import AppFilter from '../components/app-filter/app-filter';
import AppInfo from '../components/app-info/app-info';
import EmployeesAddForm from '../components/employees-add-form/employees-add-form';
import EmployeesList from '../components/employees-list/employees-list';
import SearchPanel from '../components/search-panel/search-panel';
import './App.css';

function App() {
  const data = [
    {
      name: 'John Smith',
      salary: 4500,
      increase: true,
      id: 1
    },
    {
      name: 'John Doe',
      salary: 1200,
      increase: false,
      id: 2
    },
    {
      name: 'Mary Jane',
      salary: 3950,
      increase: true,
      id:3
    }
  ]
  return (
    <div className="app">
      <AppInfo/>
      <div className='search-panel'>
        <SearchPanel/>
        <AppFilter/>        
      </div>
      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
