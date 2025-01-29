function getPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
  
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        let posts = request.response;
        let contentHTML = "";
        for (let i = 0; i < posts.length; i++) {
          const post = posts[i];
          if (userId === post.userId) {
            contentHTML += `<div>
                   <h5> Title : ${post.title}</h5>
                   <h6> Body : ${post.body}</h6>
                  </div>`;
          }
        }
        document.getElementById("content").innerHTML = contentHTML;
      } else {
          console.log(`Error fetching posts, status: ${request.status}`);
      }
    };
  
    request.onerror = () => {
      console.log(`Network error fetching posts`);
    }
     request.send();
  }
  
  function getUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        let users = request.response;
        let buttonsHTML = "";
  
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          buttonsHTML += `<div>
                           <button value="${user.id}"> ${user.name}</button>
                        </div>`;
        }
        document.getElementById("buttons").innerHTML = buttonsHTML;
  
        const buttons = document.querySelectorAll("#buttons button");
         buttons.forEach((button) => {
           button.addEventListener("click", () => getPosts(parseInt(button.value)));
        });
      }
        else {
              console.log(`Error fetching users, status: ${request.status}`);
          }
    };
      request.onerror = () => {
        console.log("Network error fetching users");
    }
  
    request.send();
  }
  
  getUsers();