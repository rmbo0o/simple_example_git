const buttons = document.querySelectorAll("#buttons button");

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.responseType = "json";
request.send();

request.onload = () => {
  if (request.status >= 200 && request.status < 300) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        let posts = request.response;
        let contentHTML = "";

          for (let i = 0; i < posts.length; i++) { // Start from 0 and loop to posts.length
             const post = posts[i];
              if (parseInt(button.value) === post.userId) {
              contentHTML += `<h6> ID User => ${post.userId}</h6>`;
              contentHTML += `<h4> Title => ${post.title}</h4>`;
              contentHTML += `<p> Body => ${post.body}</p>`;
            }
            
          }
         document.getElementById("content").innerHTML = contentHTML;
          
      });
    });
  } else {
     console.log(`error, status ${request.status}`);
  }
};