import React from 'react';

const Filtre = ({ filterTitle, filterRating, onFilterChange }) => {
  return (

  <div className='container col-lg-6 text-center mb-5'> 
   <div className='form-group '>
      <label>Titre:</label>
      <input type="text" value={filterTitle} className='form-control' onChange={(e) => onFilterChange(e.target.value, filterRating)} />
      <br />
      <label>Note:</label>
      <input type="text" value={filterRating}  className='form-control'onChange={(e) => onFilterChange(filterTitle, e.target.value)} />
    </div></div>
   
  );
};

export default Filtre;
