// api_key=QUdGXlggOYcfdvG1GvXCfoTer8QOp3JCiGsXmN0dhttps://api.nasa.gov/planetary/apod?

fetch("https://api.nasa.gov/planetary/apod?api_key=QUdGXlggOYcfdvG1GvXCfoTer8QOp3JCiGsXmN0d")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data.hdurl);
  document.querySelector('#phototitle').innerHTML = data.title;
  document.querySelector('.photo').src = data.url;
  document.querySelector('#photodesc').innerHTML = data.explanation ;
})
.catch((err) =>{
  console.log(err);
})
