import { useState } from 'react';

export default function UserVisualList({visuals, onDeleteVisual}) {
  return (
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
        <Visual key={visual.id} visual={visual} onDelete={onDeleteVisual} />
      ))}
    </tbody>
  </table>
  );
}

function Visual({visual, onDelete}) {
  return (
    <tr>
      <th scope="row">{visual.id}</th>
      <td>{visual.url}</td>
      <td>
        <button type="button" className="btn btn-outline-danger" onClick={() => onDelete(visual.id)}>Delete</button>
      </td>
    </tr>
  );
}
