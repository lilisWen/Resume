protfolioall.onclick = function () {
    protfolioBar.className = "bar status1"
}
protfolioaFramework.onclick = function () {
    protfolioBar.className = "bar status2"
}
protfolioaVollina.onclick = function () {
    protfolioBar.className = "bar status3"
}
setTimeout(function () {
    sitewelcome.classList.remove('active')
}, 2000)
let specialTags = document.querySelectorAll('[mark]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(function () {
    findclose()
}, 2200)
window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findclose()
}

function findclose() {
    let specialTags = document.querySelectorAll('[mark]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    //minIndex离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    for (let i = 0; i < specialTags.length; i++) {
        document.querySelector('a[href="#' + specialTags[i].id + '"]').parentNode.classList.remove('highlight')
    }
    a.parentNode.classList.add('highlight')
}
var liTags = document.querySelectorAll('nav.menu > ul > li')
console.log(liTags)
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (e) {
        let li = e.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (e) {
        let li = e.currentTarget.classList.remove('active')
    }
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

var aTags = document.querySelectorAll('nav.menu > ul >li >a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault()
        let a = e.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        // window.scrollTo(0, top - 80)

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        var coords = {
            y: currentTop
        }
        var t = Math.abs((s / 100) * 300)
        console.log(currentTop)
        console.log(targetTop)
        if (t > 500) {
            t = 500
        }
        var tween = new TWEEN.Tween(coords)
            .to({
                y: targetTop
            }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}