var topic = ["HTML","Git","JavaScript","CSS",""];
//console.log(topic[0]);

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

for (var i=0; i< topic.length; i++) {
   console.log("Lets study " + topic[i] + " and enjoy")

}


