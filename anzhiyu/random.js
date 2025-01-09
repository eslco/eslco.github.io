var posts=["2025/01/09/hello-world/","2025/01/09/Eslco-First-Post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };