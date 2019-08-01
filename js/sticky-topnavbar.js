! function () {
    var view = window.View('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.addSticky()
                } else {
                    this.removeSticky()
                }
            })
        },
        addSticky: function () {
            this.view.classList.add('sticky')
        },
        removeSticky: function () {
            this.view.classList.remove('sticky')
        }
    }

    controller.init(view)
}.call()