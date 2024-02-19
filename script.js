function findDuplicate(elements, elemToFind, minOccurrences) {
  if (typeof elements !== 'string' || typeof elemToFind !== 'string' || typeof minOccurrences !== 'string') {
    throw new Error('All parameters should be of type string');
  }

  const elementsArray = elements.split(',');
  const occurrencesCount = elementsArray.filter(element => element.trim() === elemToFind.trim()).length;

  return occurrencesCount >= parseInt(minOccurrences, 10);
}

console.log(findDuplicate("123,345,123", "123", "2"));
console.log(findDuplicate("ala,ma,kota,ala", "kota", "2"));
