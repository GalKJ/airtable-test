import React, { useEffect, useState } from 'react';
import airKey from '../../api.js';
// console.log(airKey);
const Vendors = () => {
  const [vendors, setVendors] = useState({});

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/appEWUBOGkkEbD39C/Food%20Donars?api_key=${airKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVendors(data.records);
        console.log(data);
        console.log(vendors);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {vendors.length > 0 ? (
        vendors.map((record) => (
          <>
            <h1>
              {record.fields.Name} key={record.id}
            </h1>
            <img
              src={record.fields.Image[0].url}
              alt={'image'}
              width={300}
              height={300}
            />
            <p>{record.fields.Email}</p>
            <p>{record.fields.Location}</p>
          </>
        ))
      ) : (
        <p>Fetching Data...</p>
      )}
    </div>
  );
};

export default Vendors;
