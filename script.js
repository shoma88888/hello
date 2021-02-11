//ハンバーガーメニューをクリックしたらドロワーメニューを出す
document.getElementById("menuButton").addEventListener("click", function() {
    this.classList.toggle("active"); //クリックをしたらactiveというクラスを追加
    document.getElementById("nav").classList.toggle("active"); //navのidを取得し、クリックしたらactiveクラスを追加
    document.getElementById("mask").classList.toggle("active");
});

//マスクをクリックしてドロワーメニューを消す
document.getElementById("mask").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("menuButton").classList.toggle("active");
});