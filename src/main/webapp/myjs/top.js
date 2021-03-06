var vm = new Vue({
    el:'#welcomdiv',
    data:{
        ub:{},
        postlist:[],
        postid:''
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
                _this.postlist = response.data;
            })
        },

        //切换副职位查询副职位的菜单列表
        changePost:function () {
            var _this = this;
            axios.get("../user/toSavePortid.do?postid="+_this.postid).then(function () {

            })
        },

    /*    //刷新
        reloadMeun(){
           location.reload();
            // console.log(11)
        },*/
        // reloadMenu1(){
        //     location.reload()
        // }
    }
});
vm.getLoginUser();
vm.getDeputyPosition();