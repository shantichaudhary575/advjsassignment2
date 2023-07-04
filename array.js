var animals = ['dogs', 'cats', 'rabbits', 'mice'];


var animalHasLetterA = animals.map(function(animal) {
  return animal.includes('a');
});


for (var i = 0; i < animals.length; i++) {
  console.log(animals[i] + ': ' + animalHasLetterA[i]);
}


var animalsWithA = animals.filter(function(animal) {
  return animal.includes('a');
});

console.log(animalsWithA);
