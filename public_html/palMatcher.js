/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Node {
    constructor(num, person){
        this.num = num;
        this.person = person;
        this.next = null;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    addPerson(num,person){
        var x = new Node(num,person);
        let prevNode = null;
        let currP = this.head;
        if(!currP){
            this.head = x;
            this.length++;
            return;
        }
        while(currP){
            if(currP.num < x.num){ //add the node
                x.next = currP;
                if(prevNode)
                    prevNode.next = x;
                else
                    this.head = x;
                this.length++;
                return;
            }
            else if(!currP.next){ //reached end of list
                currP.next = x;
                this.length++;
                return;
            }
            else{ //move on to next node
                prevNode = currP;
                currP = currP.next;
            }
        }
        return; 
    }
}
var selectedPerson;
class Person{
    constructor(data,i){
        this.id = i; //int
        this.name = data[2]; //string
        this.gender = data[4]; //string    //1
        this.type = data[1];//string i.e english learner or speaker
        this.year = data[7]; //int    //2
        this.schedule = [data[13].split(", "),data[14].split(", "),data[15].split(", ")
                        ,data[16].split(", "),data[17].split(", "),data[18].split(", ")
                        ,data[19].split(", ")];
                        //array of array of strings i.e [[morning][evening],[evening],etc] //3
        this.age = parseInt(data[5]); //int //4
        this.major = data[20]; // string //5
        this.hobbies = data[21].split(", "); //array of strings //6
        this.line = data.join('\t');
    };
}


// Person to match, people availiable, top matches
function palMatchingAlgorithm (person, people, matchAmount)
{
    var matches = new LinkedList();
    //iterate for each person in the array and add them to the compatiblePeople
    for (var i = 0; i< people.length;i++) 
    {
        var comparePerson = people[i];
        var num = 0;
        if (person.type === comparePerson.type)
            continue;
        //check if there are any schedule matches
        for(var day = 0; day < 7; day++){//Go through days
            var currDay1 = person.schedule[day];
            var currDay2 = comparePerson.schedule[day]
            for(var time = 0; time < currDay1.length; time++){
                //^^^Go through times for person
                for(var p2Time = 0; p2Time < currDay2.length;p2Time++){
                    //^^^Go through times for comparePerson
                    var currTime1 = person.schedule[day][time];
                    var currTime2 = comparePerson.schedule[day][p2Time];
                    if(currTime1 === currTime2){
                        num+=3;
                    }
                }
            }
        }
        //handle gender
        if(person.gender === people[i].gender){
            num+=20;
        }
        //handle year
        if(person.year === people[i].year){
            num+=10;
        }
        //handle age
        if(person.age === people[i].age){
            num+=5;
        }
        //handle hobbies
        
        //add to list
        matches.addPerson(num, comparePerson);  
    }
    //return an array of the top matches
    var topx = new LinkedList();
    var curr = matches.head;
    for(var i = 0; i < matchAmount; i++){
        topx.addPerson(curr.num,curr.person);
        curr = curr.next;
    }
    return topx;
}

var allPeople;
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
        allPeople = parseData(contents);
        displayContents(allPeople);
  };
  reader.readAsText(file);
}

function parseData(contents) {
  var people = contents.split("\n");
  var allPeople = [];
  for(var i = 1; i < people.length; i++){
      allPeople[i-1] = new Person(people[i].split("\t"),i   );
  }
  return allPeople;
}

function displayContents(contents){
    var element = document.getElementById('file-content');
    var s = "<ul>";
    for(var i = 0; i < contents.length; i++){
        var x = contents[i];
        s+= '<li tabindex = "1">' + contents[i].name + "</li>\n";
    }
    s+= "<ul>";
    element.innerHTML = s;
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);

//JQuery things that do things.

//If person clicked, put that as selectedPerson
$(function(){
    $("#file-content").on('click','li',function (){
        var element = document.getElementById('selected-person');
        element.innerHTML = "Currently Selected: " + this.innerHTML;
        selectedPerson = this.innerHTML;
    });
});

//If 3 Matches selected, unselect 5 Matches.
$("#3match").change(function() {
    if(document.getElementById("5match").checked) {
        document.getElementById("5match").checked = false;
    }
});

//If 5 Matches selected, unselect 3 Matches.
$("#5match").change(function() {
    if(document.getElementById("3match").checked) {
        document.getElementById("3match").checked = false;
    }
});

//if Go button is pressed:
function processAlg(){
    if(!selectedPerson){
        alert("You must select a person to pair!");
        return;
    }
    var person;
    for(var i = 0; i < allPeople.length; i++){
        if(selectedPerson === allPeople[i].name){
            person = allPeople[i];
            break;
        }
    }
    var matches = 0;
    if(document.getElementById("3match").checked){
        matches = 3;
    }
    else if(document.getElementById("5match").checked){
        matches = 5;
    }
    else{
        alert("You must select how many matches to return!");
        return;
    }
    var topMatches = palMatchingAlgorithm (person, allPeople, matches);
    var s = "Top " + matches + " Matches:\n<p><\p>\n<ul>";
    var currMatch = topMatches.head;
    while(currMatch){
        s+= '<li tableindex = "2">' + currMatch.person.name + "</li>\n";
        currMatch = currMatch.next;
    }
    s+= "</ul>";
    var element = document.getElementById("matches");
    element.innerHTML = s;
}

