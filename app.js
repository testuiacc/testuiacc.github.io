const list = document.querySelector('#post-list ul');

// filter posts 

window.onload=function(){
    const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const posts = list.getElementsByTagName('li');
    Array.from(posts).forEach(function(post){
        const title = post.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            post.style.display = 'block';
        }
        else {
            post.style.display = 'none';
        }
    })
})
  }