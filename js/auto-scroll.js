! function () {
    var view = window.View('#nav-menu')
    var controller = {
        view: null,
        specialTags: null,
        init: function (view) {
            this.view = view
            this.specialTags = document.querySelectorAll('[mark]')
            console.log(this.specialTags)
            this.firstAutoUp()
            this.bindEvents()
        },
        firstAutoUp: function () {
            var _this = this
            console.log(this)
            setTimeout(function () {
                _this.findCloseAndRemoveoffset()
            }, 2200)
            for (let i = 0; i < _this.specialTags.length; i++) {
                _this.specialTags[i].classList.add('offset')
            }
        },
        findCloseAndRemoveoffset: function () {

            let minIndex = 0
            for (let i = 1; i < this.specialTags.length; i++) {
                if (Math.abs(this.specialTags[i].offsetTop - window.scrollY) < Math.abs(this.specialTags[minIndex].offsetTop - window.scrollY)) {
                    minIndex = i
                }
            }
            //minIndex离窗口顶部最近的元素
            this.specialTags[minIndex].classList.remove('offset')
            let id = this.specialTags[minIndex].id
            let a = this.view.querySelector('a[href="#' + id + '"]')
            for (let i = 0; i < this.specialTags.length; i++) {
                this.view.querySelector('a[href="#' + this.specialTags[i].id + '"]').parentNode.classList.remove('highlight')
            }
            a.parentNode.classList.add('highlight')
        },
        bindEvents: function () {
            window.addEventListener('scroll', (x) => {
                this.findCloseAndRemoveoffset()
            })
        }
    }


    controller.init(view)


}.call()