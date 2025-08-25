var posts=["2025/08/25/hello-world/","2025/08/25/asp.net/","2025/08/25/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };