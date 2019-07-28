! function () {
    var view = document.querySelector('#nav-menu')

    var controller = {
        view: null,
        liTags: null,
        aTags: null,
        init: function (view) {
            this.view = view
            this.liTags = this.view.querySelectorAll('ul > li')
            this.aTags = this.view.querySelectorAll('ul > li>a')
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrolltoElement: function (element) {
            let top = element.offsetTop //当前元素距离顶部的位置
            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop //路程
            var coords = {
                y: currentTop
            } //起始位置
            var t = Math.abs((s / 100) * 300) //滑动时间
            if (t > 500) {
                t = 500
            }
            var tween = new TWEEN.Tween(coords) //起始位置
                .to({
                    y: targetTop //结束位置
                }, t) //时间
                .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start(); //开始缓动
        },
        bindEvents: function () {
            for (let i = 0; i < this.liTags.length; i++) {
                this.liTags[i].onmouseenter = (e) => {
                    let li = e.currentTarget.classList.add('active')
                }
                this.liTags[i].onmouseleave = (e) => {
                    let li = e.currentTarget.classList.remove('active')
                }
            }

            for (let i = 0; i < this.aTags.length; i++) {
                this.aTags[i].onclick = (e) => {
                    e.preventDefault()
                    let a = e.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrolltoElement(element)
                }
            }
        },

    }
    controller.init(view)

}.call()