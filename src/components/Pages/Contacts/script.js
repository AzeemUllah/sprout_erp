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

            modal2: "Open: Department",
            modal3: "Open: Job Title",
            modal4: "Open: Currency",
            modal5: "Open: Recruitment Responsible",
            modal6: "Open: Job Location",
            modal7: "Create: Contacts",
            modal8: "Open: Title",
            modal9: "Open: Account Receivable",
            modal10: "Open: Account Payable",
            modal11: "Open: Working Address",
            modal12: "Warning",
            modal50: "Open:Manager",
            modal60: "Open:Manager",
            modal61: "Open:Manager",
            name: '',
            names: '',
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
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/contact/selectgrid", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            }, function (err) {
                alert(err);
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
                                alert(err);
                            });
                    },
                    function (err) {
                        alert(err);
                    });
            }, function (err) {
                alert(err);
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
                                alert(err);
                            });
                    },
                    function (err) {
                        alert(err);
                    });
            }, function (err) {
                alert(err);
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
                alert(err);
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
                alert(err);
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