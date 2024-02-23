import './App.css';
import React, { useEffect, useState } from 'react';
import StationaryCollection from './components/StationaryCollection';
import StationaryFilterForm from './components/StationaryFilterForm';
import data from './data.json';

function App() {
  const [items, setItems] = useState(data);
  const [filters, setFilters] = useState({ type: '', brand: '', color: '' });

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const filteredItems = data.filter((item) => {
      return (
        item.type?.includes(filters.type) &&
        item.brand?.includes(filters.brand) &&
        item.color?.includes(filters.color)
      );
    });
    setItems(filteredItems);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stationary Collection!</h1>
        <StationaryFilterForm
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <StationaryCollection items={data} />
      </header>
    </div>
  );
}

export default App;
