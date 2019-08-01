window.Model = function (options) {
    let resourcename = options.resourcename
    return {
        init: function () {
            var APP_ID = '1sstr0ANykNiYdLV6DOCxDvD-gzGzoHsz';
            var APP_KEY = 'BjKLRsh6xM4BbPv3Tv2Vu4nb';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            var query = new AV.Query(resourcename);
            return query.find()
        },
        save: function (object) {
            //创建一张表TestObject
            var M = AV.Object.extend(resourcename);
            //创建一行数据
            var message = new M();
            //数据的内容是helloworld
            return message.save(object);
        }
    }
}