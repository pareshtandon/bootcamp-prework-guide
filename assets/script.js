var topic = ["HTML","Git","JavaScript","CSS",""];

var randomTopic = topic[Math.floor(Math.random() *topic.length)]
console.log(randomTopic);


/*function selectTopic() {
    for (var i=0; i< topic.length; i++) {
        if (topic[i] === "HTML"){
            console.log("Let's study HTML!");
        } else if (topic[i] === "CSS"){
            console.log("Let's study CSS!");
        } else if (topic[i] === "Git"){
            console.log("Let's study Git!");
        } else if (topic[i] === "JavaScript"){
            console.log("Let's study JavaScript!");
        } else {
            console.log("Please try again later!");
        }    
    }
}*/

function selectTopic() {
    
    if (randomTopic === "HTML"){
        console.log("Let's study HTML!");
    } else if (randomTopic === "CSS"){
        console.log("Let's study CSS!");
    } else if (randomTopic === "Git"){
        console.log("Let's study Git!");
    } else if (randomTopic === "JavaScript"){
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again later!");
    }    
    
}

function listTopics() {
    for (var i=0; i< topic.length; i++) {
        console.log("Lets study " + topic[i] + " and enjoy");
    }

}
console.log("Here are the topics we learned through prework");
listTopics();
console.log("Which topic we should study first");
selectTopic();

