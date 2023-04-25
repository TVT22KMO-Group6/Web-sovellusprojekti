import React from 'react';

export default function UserVisualList({visuals, onDeleteVisual}) {
  return (
    <React.Fragment>
      <div className='text-center'>
      <button type="button" className="btn btn-primary m-1" onClick={AddNewVisual}>Add custom view</button>
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

function AddNewVisual() {
  window.location.href = '/user/visual/new';
}