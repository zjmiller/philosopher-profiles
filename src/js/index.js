import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'whatwg-fetch';

const flatten = require('lodash/flatten');
const uniq = require('lodash/uniq');

fetch('./data.yaml')
  .then(response => response.text())
  .then(responseText => {

    const philosophers = YAML.parse(responseText);
    philosophers.forEach((philosopher, i) => philosopher.id = i);

    const arrOfArrOfInterestNames =
      philosophers.map(philosopher => philosopher.interests);
    console.log(arrOfArrOfInterestNames);
    const arrOfInterestNames = flatten(arrOfArrOfInterestNames);
    console.log(arrOfInterestNames);
    const arrOfUniqInterestNames = uniq(arrOfInterestNames);
    console.log(arrOfUniqInterestNames);

    const interests = arrOfUniqInterestNames.map((interestName, i) => {
      return {
        id: i,
        name: interestName,
      }
    });

    philosophers.forEach(philosopher => {
      philosopher.interests = philosopher.interests.map(interestName => {
        return interests.find(interest => interest.name === interestName).id
      });
    })

    const data = {
      interests,
      philosophers,
    }

    ReactDOM.render(
      <App data={data} interests={data.interests} />,
      document.getElementById('root')
    );
  });
