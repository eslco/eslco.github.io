var posts=["2025/01/09/Eslco-First-Post/","2025/01/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };