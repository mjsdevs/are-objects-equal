import arrayComparator from './arrayComparator';

const objectComparator = (object1: any, object2: any): boolean => {
  const isObject = (object: any): boolean => {
    if (typeof object !== 'object') return false;

    return true;
  };

  if (object1 === null || object2 === null) {
    return object1 === object2;
  }

  if (!isObject(object1) || !isObject(object2)) return false;

  if (Array.isArray(object1) || Array.isArray(object2)) {
    if (Array.isArray(object1) && Array.isArray(object2)) {
      return arrayComparator(object1, object2);
    }

    return false;
  }
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  const length = keys1.length;
  
  if (length !== keys2.length) return false;

  const keyMatches = keys1.filter((key1) => keys2.includes(key1));

  if (keyMatches.length !== length) return false;

  const valueMatches = keys1.filter((key1) => {
    const value1 = object1[key1];
    const value2 = object2[key1];

    const valueType = typeof value1;

    if (valueType !== typeof value2) return false;

    if (valueType === 'object') {
      return objectComparator;
    }

    return object1[key1] === object2[key1]
  });

  if (valueMatches.length !== length) return false;

  return true;
};

export default objectComparator;
