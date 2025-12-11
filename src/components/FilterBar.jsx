const FilterBar = ({ title, options, onSelect }) => {
   return (
      <div className="filter-bar">
         <span>{title}: </span>
         {options.map((opt) => (
            <button key={opt} onClick={() => onSelect(opt)}>
               {opt}
            </button>
         ))}
      </div>
   );
};


export default FilterBar;