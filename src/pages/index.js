import Head from 'next/head';
import Image from 'next/image';
import airKey from '../../api.js';
import styles from '@/styles/Home.module.css';

var Airtable = require('airtable');
var base = new Airtable({ apiKey: airKey }).base('appEWUBOGkkEbD39C');

base('Food Donars')
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: 'Grid view',
    // fields: ['Donor name', 'Email', 'Location'],
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log('Retrieved', record.get('Donor name'));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

// var Airtable = require('airtable');
// var base = new Airtable({ apiKey: 'keyiZ14wOq11qGUUZ' }).base(
//   'appEWUBOGkkEbD39C'
// );

// base('Food Donars').create(
//   [
//     {
//       fields: {
//         'Donor name': 'Donar 1!',
//       },
//     },
//     {
//       fields: {
//         'Donor name': 'Donar 2',
//       },
//     },
//   ],
//   function (err, records) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     records.forEach(function (record) {
//       console.log(record.getId());
//     });
//   }
// );
export default function Home() {
  return <>hi</>;
}
