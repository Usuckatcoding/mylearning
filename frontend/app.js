const date = new Date();
date.setDate(date.getDate() - 1);
const formattedDate = date.toISOString().split('T')[0];
// let url = `https://mylearning-p4fu.onrender.com/news`;
let url='http://localhost:3000/news';
   fetch(url)
   .then(response => {
      console.log(response);
      return response.json();
   }
   )
   .then(information => {
      console.log(information);
      document.getElementById('lodincontainer').style.display='none';
      document.getElementById('work0').style.display='flex';
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
      <p >${information.articles[a].description}</p>
      <a class='btn btn-primary btn-sm' href="${information.articles[a].url}" target="_blank">Read more</a>`;
      container.innerHTML = articleHTML;
      console.log(article);
      a++;
      }
   })
   .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('work0').style.display='none';
      document.getElementById('newsnotloaded').style.display='block';
   });
   