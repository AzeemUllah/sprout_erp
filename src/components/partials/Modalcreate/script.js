
export default{
    created: function () {
        var self = this;
        $(function () {
            $("#create").click(function () {
                self.submit();
            });
            self.btnlinks.editbtnlink ="/recruitment/ReqDepEdit/"+self.$route.params.id;
        })
        console.log("this is some check")
    },
    data(){
        return {
            title: '',
            titles: '',
            job_tittle: '',
        }
    },

    computed: {
        fullname: function () {
            return this.first + " " + this.last
        }
    },
    methods: {
        submit: function () {
            var self = this;

            self.$http.post("/recruitment/try", {"title": self.title}).then(function(res){
                console.log(res.body);

            },function(err){
                alert(err);
            });


        },


    },

}