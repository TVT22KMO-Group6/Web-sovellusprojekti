import React from 'react';

// UserVisualList component responsible for rendering a list of user visuals
export default function UserVisualList({visuals, onDeleteVisual}) {
  return (
    <React.Fragment>
      <div className='text-center'>
      </div>
      
      <table className="table table-striped">
      <thead className='table-dark'>
        <tr>
          <th scope="col">#</th>
          <th scope="col">URL</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
      {visuals.map((visual) => (
          <Visual key={visual.id} visual={visual} onDelete={onDeleteVisual}/>
        ))}
      </tbody>
    </table>
  </React.Fragment>
  );
}

// Visual component responsible for rendering a single visual
function Visual({visual, onDelete}) {
  return (
    <tr>
      <th scope="row">{visual.id}</th>
      <td><a href={visual.url}>{visual.url}</a></td>
      <td>
        <button type="button" className="btn btn-outline-danger" onClick={() => onDelete(visual.id)}>Delete</button>
      </td>
    </tr>
  );
}