import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        $(function () {
            $(".delete").click(function () {
                self.submit();
            });
            $(".Duplicate").click(function () {
                self.dsubmit();
            });
            $("#num01").click(function () {
                self.ssubmit();
                self.select3();

            });
            $("#num10").click(function () {
                self.psubmit();
            });
            self.btnlinks.editbtnlink ="/recruitment/ReqDepEdit/"+self.$route.params.id
        })
    },
    props: [
        "edit",
    ],
    data () {
        return {
            name: '',
            tag_id: '',
            contact_id: '',
            names: '',
            n:[],
            f: '',
            parent_dept_id: '',
            manager_id: '',
            j: '',
            d: '',
            num: '',
            num4: '1',
            btnlinks: {
                createbtnlink: "/contact/contactinfocreate",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"/recruitment/ReqDepEdit",
                secondbtnlink: "/contact/contacttable",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/contact/deletes", {"id": self.$route.params.id}).then(function(res){

            },function(err){

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/contact/selectgrid", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            }, function (err) {

            });
            self.$http.post("/contact/selectgridtag", {"id": self.$route.params.id}).then(function (res) {
                self.n = res.body.data;
                console.log(self.n);




                console.log(tag_id);
                if(tag_id == "1"){
                    $('#a').show();
                    $('#b').hide();
                    $('#c').hide();
                    $('#d').hide();
                }else if(tag_id == "2"){
                    $('#b').show();
                    $('#a').hide();
                    $('#c').hide();
                    $('#d').hide();
                }
                else if(tag_id == "3"){
                    $('#c').show();
                    $('#a').hide();
                    $('#b').hide();
                    $('#d').hide();
                }else if(n.tag_id == "29"){
                    $('#d').show();
                    $('#a').hide();
                    $('#c').hide();
                    $('#b').hide();
                }

            }, function (err) {

            });




        },
        ssubmit: function () {

            var self = this;
            self.$http.post("/contact/usa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.f = parentdata.name;
                self.$route.params.id = parentdata.id;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                // console.log(res.body)
                //console.log(this.$route.query.id);
                self.$http.post("/contact/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.j = data.name;

                        //console.log(self.job_tittle);
                        //   console.log(res.body);
                        self.$http.post("/contact/manager", {"manager_id":self.manager_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.d = data.employeename;
                                //console.log(self.job_tittle);
                                // console.log(res.body);
                            },
                            function (err) {

                            });
                    },
                    function (err) {

                    });
            }, function (err) {

            });




        },
        psubmit: function () {
            var self = this;
            self.$http.post("/contact/usaa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.f = parentdata.name;
                self.$route.params.id = parentdata.id;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                // console.log(res.body)
                //console.log(this.$route.query.id);
                self.$http.post("/contact/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.j = data.name;

                        //console.log(self.job_tittle);
                        //   console.log(res.body);
                        self.$http.post("/contact/manager", {"manager_id":self.manager_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.d = data.employeename;
                                //console.log(self.job_tittle);
                                // console.log(res.body);
                            },
                            function (err) {

                            });
                    },
                    function (err) {

                    });
            }, function (err) {

            });
        },
        select1: function () {

            var self = this;

            self.$http.post("/contact/numdep", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)
                //console.log(this.$route.query.id);
            }, function (err) {

            });




        },
        select3: function () {

            var self = this;
            self.num4+1;
        },
        dsubmit: function () {
            var self = this;

            self.$http.post("/contact/depinserts", {"f": self.f,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
                console.log(res.body);

            },function(err){

            });
        },

        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                //this.submit();
                //this.tags();
                //this.insert();
                //this.select();
                //this.insert();

                // this.submiting();


            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        dashconterller: DashboardController,
    },


}