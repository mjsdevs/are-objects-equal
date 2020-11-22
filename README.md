# Object Comparator
## Description
This module allows you to compare typed object values, such as: objects, arrays and nulls.

## How to use it
Just import it and pass the objects as parameters.

## Usage example
```javascript
const areObjectsEqual = require('are-objects-equal').default;

const person1 = {
	name: 'Deborah',
	age: 19,
	skills: ['Javascript', 'Typescript', 'ReactJS'],
};

const person2 = {
	age: 19,
	name: 'Deborah',
	skills: ['Javascript', 'Typescript', 'ReactJS'],
};

areObjectsEqual(person1, person2); // true
```
