let apiKey = "2511f9f6117042b6aea772090c4ebf77";
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
   .then(response => {
      console.log(response.json);
      return response.json();

   })
   .then(information => {

      let existingele=document.getElementById("work1");
      let maincontain=document.getElementsByClassName('Carpentery-content');
      let maincontainer=maincontain[0];
      for(let a=0;a<4;a++){
      let newdiv=new Array(a);
      newdiv[a]=existingele.cloneNode(true);
      maincontainer.appendChild(newdiv[a]);
      newdiv[a].id='work'+(a+2);
      let article = information.articles[a];
      let IId='work'+(a+2);
      console.log(IId);
      let container = document.getElementById(IId);
      console.log(container);
      const articleHTML = `
  <h2>${information.articles[a].title}</h2>
  <p>${information.articles[a].description}</p>
  <a href="${information.articles[a].url}" target="_blank">Read more</a>
`;
      container.innerHTML = articleHTML;
      console.log(article);
      }
      console.log(information);
      
   })
