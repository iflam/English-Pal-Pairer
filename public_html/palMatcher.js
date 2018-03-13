/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//check that it's a file
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
function palMatchingAlgorithm (person, people, matches)
{
    compatiblePeople = [];
    //iterate for each person in the array and add them to the compatiblePeople
    for (i = 0; i< people.length;i++) 
    {
        if (person.type.localeCompare(people[i].type) === 0)
            continue;
        //check if there are any schdule matches
        
        //handle gender
        
        //handle year
        
        //handle age
        
        //handle hobbies
        
    }
    
    //sort the pals
    
    //return an array of the top matches
}



class PalProfile extends React.Component
{
    constructor(props)
    {
        super (props);
        this.state = {firstName: props.firstName,
            lastName: props.lastName};
    }
    
    render () 
    {
        return (
                <div>
                    <h2>Hello World!</h2>
                    <h3>{this.state.firstName} {this.state.lastName}</h3>
                </div>
                );
    }
    
}

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  var People;
  reader.onload = function(e) {
    var contents = e.target.result;
        People = parseData(contents);
        displayContents(People);
  };
  reader.readAsText(file);
}

function parseData(contents) {
  var people = contents.split("\n");
  var element = document.getElementById('file-content');
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

