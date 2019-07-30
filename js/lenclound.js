! function () {
    var model = {
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find()
        },
        init() {
            var APP_ID = '1sstr0ANykNiYdLV6DOCxDvD-gzGzoHsz';
            var APP_KEY = 'BjKLRsh6xM4BbPv3Tv2Vu4nb';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        save: function (username, content) {
            //创建一张表TestObject
            var Message = AV.Object.extend('Message');
            //创建一行数据
            var message = new Message();
            //数据的内容是helloworld
            return message.save({
                'content': content,
                'name': username
            });
        }
    }
    var view = document.querySelector('.leave-message')
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
            this.model.save(username, content).then((object) => {
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
    controller.init(view, model)
}.call()