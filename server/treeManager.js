import * as fs from 'fs';
import { Person } from './person.js';

fs.readFile('./data_base/main.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  people = JSON.parse(data).people;

  people.forEach(person => {
    
  })

})
