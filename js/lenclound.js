! function () {
    var model = window.Model({
        resourcename: 'Message'
    })
    var view = window.View('.leave-message')
    var controller = {
        view: null,
        model: null,
        messageList: null,
        myForm: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#message-list')
            this.myForm = view.querySelector('#postMessage')
            this.model.init()
            this.loadMessage()
            this.bindEvents()
        },

        loadMessage() {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes);
                array.forEach(element => {
                    let li = document.createElement('li')
                    li.innerText = `${element.name}:${element.content}`
                    this.messageList.appendChild(li)
                });
            }, function (err) {
                alert('今天不能留言啦！明天再来吧')
            });
        },
        bindEvents() {
            this.myForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage() {
            let myForm = this.myForm
            let content = document.querySelector('input[name=content]').value
            let username = document.querySelector('input[name=username]').value
            console.log(typeof content)
            if (content === '' || username === '') {
                alert('啥都没写，你点提交干嘛！')
            } else {
                this.model.save({
                    name: username,
                    content: content
                }).then((object) => {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}:${object.attributes.content}`
                    this.messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                    console.log(object)
                }).then(function () {}, function (err) {
                    console.log(err)
                })
            }

        }
    }
    controller.init(view, model)
}.call()