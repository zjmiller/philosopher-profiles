import React from 'react';

function PhilosopherFullName({ philosopher }){
  return (
    <span>
    {philosopher.name.first}
    {philosopher.name.first ? ' ' : ''}
    {philosopher.name.last}
    </span>
  );
}

export default PhilosopherFullName;
