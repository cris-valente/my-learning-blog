const viewMoreBtn = document.querySelector(".viewMoreButton")
    loadMoreArticle = document.querySelectorAll(".load-more-article")
    heroPost = document.querySelector('.hero-post')
    mainPostTitle = document.querySelector('.main-post-title')
    headerHandle = document.getElementById('header-handle')
    headerHandleImg = document.getElementById('header-handle-img')

viewMoreBtn.addEventListener('click', viewMoreExpand)
heroPost.addEventListener('click', expandHero)

function expandHero() {
    mainPostTitle.innerHTML = `
        <p class="post-date">JANUARY 16, 2024</p>
        <h1 class="post-title">In January I started my new journey: a Chingu voyage.</h1>`
    
    headerHandleImg.classList.remove('hide')
    heroPost.classList.add('hide')
    headerHandle.classList.remove('hide')
}


function viewMoreExpand() {
    
    viewMoreBtn.textContent =
    viewMoreBtn.textContent === "View More" ? "View Less" : "View More"

    loadMoreArticle.forEach(e => 
    e.classList.toggle("load-more"))
}
