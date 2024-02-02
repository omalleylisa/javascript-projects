// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let i = Math.floor(Math.random()*idNumbers.length);
  return arr.splice(i, 1)[0];
}

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedCrew = [];

selectedCrew.push(selectRandomEntry(idNumbers));
selectedCrew.push(selectRandomEntry(idNumbers));
selectedCrew.push(selectRandomEntry(idNumbers));

function buildCrewArray(ids, num) {
  let crewIds = [];
  while (crewIds.length < num) {
    let selectedId = selectRandomEntry(ids);
    if (!crewIds.includes(selectedId)) {
      crewIds.push(selectedId);
    }
  }
  return crewIds;
}
let crewIds = buildCrewArray(idNumbers, 3);
console.log("Here is the crew:", crewIds);


// Here are the candidates and the 'animals' array:


let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function selectCrew (crewIds, animals) {

// function to 
}


  let crew = selectCrew(crewIds, animals);

// Code your template literal and console.log statements:
