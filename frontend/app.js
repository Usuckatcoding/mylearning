
let apiKey ="2511f9f6117042b6aea772090c4ebf77";
let url = `https://newsapi.org/v2/everything?q=Apple&from=2025-04-28&sortBy=popularity&apiKey=${apiKey}`;
fetch(url)
   .then(response => {
      console.log(response);
      return response.json();
   }
   )
   .then(information => {
      let a=0;
      let info=information.articles;
      let existingele=document.getElementById("work0");
      let maincontain=document.getElementsByClassName('Carpentery-content');
      let maincontainer=maincontain[0];
      while(a<info.length){
      let newdiv=new Array(a);
      newdiv[a]=existingele.cloneNode(true);
      maincontainer.appendChild(newdiv[a]);
      newdiv[a].id='work'+(a+1);
      let article = information.articles[a];
      let IId='work'+(a);
      console.log(IId);
      let container = document.getElementById(IId);
      console.log(container);
      const articleHTML = `
      <h2>${information.articles[a].title}</h2>
      <p>${information.articles[a].description}</p>
      <a href="${information.articles[a].url}" target="_blank">Read more</a>`;
      container.innerHTML = articleHTML;
      console.log(article);
      a++;
      }
      console.log(information);
   })
   