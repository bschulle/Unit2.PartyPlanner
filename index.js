//call the event API
const getEvents = async() => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-ftb-mt-web-pt/events`);
  const data = await response.json();
  
  //Return event data from API
  const events = data.data;
  // console.log(events);

//create li for each event
  const eventNameLIs = events.map((individualEvents)=> {
    const eventLI = document.createElement(`li`);
    eventLI.innerText = individualEvents.name;
    // eventLI.innerText = individualEvents.description;
    // eventLI.innerText = individualEvents.date;
    // eventLI.innerText = individualEvents.location;
    return eventLI;
  });
  //get the ul
  const ul = document.querySelector(`ul`);
  //add events to ul
  ul.append(...eventNameLIs)

}
getEvents();



//Add event data to html