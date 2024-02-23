export default function StationaryFilterForm({ filters, onFilterChange }) {
  return (
    <form>
      <input type="text" name="type" value={filters.type} placeholder="Type" />
      <input
        type="text"
        name="brand"
        value={filters.brand}
        placeholder="Brand"
      />
      <input
        type="text"
        name="color"
        value={filters.color}
        placeholder="Color"
      />
    </form>
  );
}
