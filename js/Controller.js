var Controller = function (optins) {
    var init = optins.init
    this.bindEvents = optins.bindEvents
    return {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.bindEvents()
            init.call(this, view, model)
        }
    }
}