
function openFullNews(newsId) {
    document.getElementById(`fullNews${newsId}`).style.display = 'block';
}

function closeFullNews() {
    document.querySelectorAll('.full-news').forEach(news => {
        news.style.display = 'none';
    });
}

function showNextNews(nextNewsId) {
    closeFullNews();
    openFullNews(nextNewsId);
}

function toggleContent() {
    var content = document.getElementById("myContent");
    content.classList.toggle("show");
 }