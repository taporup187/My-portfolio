// pre loder
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
})

// nav shadow on scroll
const nav = document.querySelector("nav");

window.onscroll = () => {
    scrollSwadow();
}
function scrollSwadow() {
    if (document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500) {
        nav.style.boxShadow = "0px 5px 8px #ddd";
    }
    else {
        nav.style.boxShadow = "none";
    }
}

//gmail onclick copy to clipbord

document.getElementById("gmail-coppy").addEventListener('click', function () {
    copyToClipboard('taporupboliar187@gmail.com');
});
function copyToClipboard(text) {
    var selected = false;
    var el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    if (document.getSelection().rangeCount > 0) {
        selected = document.getSelection().getRangeAt(0)
    }
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};