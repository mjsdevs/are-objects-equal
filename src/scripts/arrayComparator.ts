import objectComparator from './objectComparator';

const areArraysEqual = (array1: any, array2: any): boolean => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;

  if (array1.length !== array2.length) return false;

  const matches = array1.filter((element1, index) => {
    const type = typeof element1;
    const element2 = array2[index];

    if (type !== typeof element2) return false;

    if (type === 'object') {
      if (element1 === null || element2 === null) {
        return element1 === element2;
      }

      if (!Array.isArray(element1) && !Array.isArray(element2)) {
        return objectComparator(element1, element2);
      }

      if (Array.isArray(element1) && Array.isArray(element2)) {
        return areArraysEqual(element1, element2);
      }

      return false;
    }

    return element1 === element2;
  });

  if (matches.length !== array1.length) return false;

  return true;
};

export default areArraysEqual;
