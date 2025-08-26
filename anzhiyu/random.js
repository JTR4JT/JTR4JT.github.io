var posts=["2025/08/26/asp.net/","2025/08/25/hello-world/","2025/08/25/我的第一篇博客/","2023/03/26/Spring Cloud笔记/","2023/03/26/排序与查找/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };