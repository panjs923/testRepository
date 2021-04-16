var vm = new Vue({
    el:'#welcomdiv',
    data:{
        ub:{},
        postlist:[]
     },
    methods:{
        //获取登录的用户
        getLoginUser:function () {
            var _this = this;
            axios.get("../user/getLoginUser.do").then(function (response) {
                _this.ub = response.data;
            })
        },

        //获取该用户选择的所有副职位
        getDeputyPosition:function () {
            var _this = this;
            axios.get("../user/getDeputyPosition.do").then(function (response) {
                console.log(response.data)
                _this.postlist = response.data;
            })
        }
    }
});
vm.getLoginUser();
vm.getDeputyPosition();