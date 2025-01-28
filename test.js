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
        console.log(posts)
        let contentHTML = "";

          for (let i = 0; i < posts.length; i++) { // Start from 0 and loop to posts.length
             const post = posts[i];
              if (parseInt(button.value) === post.userId) {
                contentHTML += `<div>
               
               <h4> Title : ${post.title}</h4>
               <p> Body : ${post.body}</p>
              </div>`
            }
            document.getElementById("content").innerHTML = contentHTML ;
            console.log(contentHTML);
          }
         
          
      });
    });
  } else {
     console.log(`error, status ${request.status}`);
  }
};