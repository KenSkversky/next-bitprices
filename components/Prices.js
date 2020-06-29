import { useState } from 'react';

const Prices = ({ bpi }) => {
  const [currency, setCurrency] = useState('EUR');
  let list = '';
  if (currency === 'USD') {
    list = (
      <li className='list-group-item'>
        Bitcoin rate for {bpi.bpi.USD.description}: &nbsp;{' '}
        <span className='badge badge-primary'>{bpi.bpi.USD.code}</span>
        &nbsp; <strong>{bpi.bpi.USD.rate}</strong>
      </li>
    );
  } else if (currency === 'GBP') {
    list = (
      <li className='list-group-item'>
        Bitcoin rate for {bpi.bpi.GBP.description}:
        <span class='badge badge-primary'>{bpi.bpi.GBP.code}</span>
        &nbsp; <strong>{bpi.bpi.GBP.rate}</strong>
      </li>
    );
  } else if (currency === 'EUR') {
    list = (
      <li className='list-group-item'>
        Bitcoin rate for {bpi.bpi.EUR.description}: &nbsp;{' '}
        <span class='badge badge-primary'>{bpi.bpi.EUR.code}</span>
        &nbsp; <strong>{bpi.bpi.EUR.rate}</strong>
      </li>
    );
  }

  return (
    <div>
      <ul className='list-group'>{list}</ul>
      <br />
      <select
        onChange={(e) => setCurrency(e.target.value)}
        className='form-control'
      >
        <option value='USD'>USD</option>
        <option value='GBP'>GBP</option>
        <option value='EUR'>EUR</option>>
      </select>
    </div>
  );
};
export default Prices;
