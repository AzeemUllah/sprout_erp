import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Reqjobs from "./../../partials/Reqjobs/Reqjobs.vue"


export default{
    created: function () {
        var self =this;
        this.select();
        this.select1();

        $(function () {
            self.btnlinks.editbtnlink ="/recruitment/JobEdit/"+self.$route.params.id
            $(".delete").click(function () {
                self.submit();
            });

            $("#hide").click(function(){
                $("#hide").hide();
            });
            $("#show").click(function(){
                $("#show").hide();
            });
            $("#show").click(function(){
                $("#hide").show();
            });
            $("#hide").click(function(){
                $("#show").show();
            });



            $(".Duplicate").click(function () {
                self.dsubmit();
            });
            $("#num01").click(function () {
                self.ssubmit();
            });
            $("#num10").click(function () {
                self.psubmit();
            });


        })

    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Job Positions/Chief Executive Officer",
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
            job_email: '',
            job_tittle: '',
            expected: '',
            dog: '',
            department_id: '',
            recruitment_responsible: '',
            description: '',
            job_location: '',
            j: '',
            d: '',
            num: '',
            gf: '',
            modal61: "Open:Manager",
            btnlinks: {
                createbtnlink: "/recruitment/Jobcreate",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"/recruitment/JobEdit",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/deletejob", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        dsubmit: function () {
            var self = this;
            self.$http.post("/recruitment/reqjob", {"job_tittle": self.job_tittle,"job_email": self.job_email,"department_id": self.department_id,"recruitment_responsible": self.recruitment_responsible,"expected": self.expected,"job_location": self.job_location,"description": self.description}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/jobselect", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.job_tittle = parentdata.job_tittle;
                self.job_email = parentdata.job_email;
                self.expected = parentdata.expected;
                self.department_id = parentdata.department_id;
                self.recruitment_responsible = parentdata.recruitment_responsible;
                self.job_location = parentdata.job_location;
                self.description = parentdata.description;
                console.log(res.body)
                alert(self.recruitment_responsible);
                //console.log(this.$route.query.id);
                self.$http.post("/recruitment/ss", {"job_location":self.job_location}).then(function (res) {
                        var data = res.body.data[0];
                        self.j = data.company;
                        //console.log(self.job_tittle);
                        console.log(res.body);
                self.$http.post("/recruitment/sss", {"department_id":self.department_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.p = data.name;
                        //console.log(self.job_tittle);
                        console.log(res.body);
                self.$http.post("/recruitment/sb", {"recruitment_responsible":self.recruitment_responsible}).then(function (res) {
                        var data = res.body.data[0];
                        self.d = data.username;
                        //console.log(self.job_tittle);
                        console.log(res.body);
            },
                function (err) {
                alert(err);
            });
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

            self.$http.post("/recruitment/num5", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;



                console.log(res.body)
                alert(self.num);
                console.log(self.num)
                //console.log(this.$route.query.id);



            }, function (err) {
                alert(err);
            });




        },
        ssubmit: function () {

            var self = this;
            self.$http.post("/recruitment/jobpage", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.job_tittle = parentdata.job_tittle;
                self.job_email = parentdata.job_email;
                self.expected = parentdata.expected;
                self.department_id = parentdata.department_id;
                self.recruitment_responsible = parentdata.recruitment_responsible;
                self.job_location = parentdata.job_location;
                self.description = parentdata.description;
                self.$route.params.id = parentdata.id;
                console.log(res.body)
                alert(self.$route.params.id);
                //console.log(this.$route.query.id);
                self.$http.post("/recruitment/ss", {"job_location":self.job_location}).then(function (res) {
                        var data = res.body.data[0];
                        self.j = data.company;
                        //console.log(self.job_tittle);
                        console.log(res.body);
                        self.$http.post("/recruitment/sss", {"department_id":self.department_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.p = data.name;
                                //console.log(self.job_tittle);
                                console.log(res.body);
                                self.$http.post("/recruitment/sb", {"recruitment_responsible":self.recruitment_responsible}).then(function (res) {
                                        var data = res.body.data[0];
                                        self.d = data.username;
                                        //console.log(self.job_tittle);
                                        console.log(res.body);
                                    },
                                    function (err) {
                                        alert(err);
                                    });
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
            self.$http.post("/recruitment/jobpage2", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.job_tittle = parentdata.job_tittle;
                self.job_email = parentdata.job_email;
                self.expected = parentdata.expected;
                self.department_id = parentdata.department_id;
                self.recruitment_responsible = parentdata.recruitment_responsible;
                self.job_location = parentdata.job_location;
                self.description = parentdata.description;
                self.$route.params.id = parentdata.id;
                console.log(res.body)
                alert(self.$route.params.id);
                //console.log(this.$route.query.id);
                self.$http.post("/recruitment/ss", {"job_location":self.job_location}).then(function (res) {
                        var data = res.body.data[0];
                        self.j = data.company;
                        //console.log(self.job_tittle);
                        console.log(res.body);
                        self.$http.post("/recruitment/sss", {"department_id":self.department_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.p = data.name;
                                //console.log(self.job_tittle);
                                console.log(res.body);
                                self.$http.post("/recruitment/sb", {"recruitment_responsible":self.recruitment_responsible}).then(function (res) {
                                        var data = res.body.data[0];
                                        self.d = data.username;
                                        //console.log(self.job_tittle);
                                        console.log(res.body);
                                    },
                                    function (err) {
                                        alert(err);
                                    });
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
        selectid: function (id) {
            var self = this;
            self.gf=id;
            alert(self.gf);
        },
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {

                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }

    },

    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Reqjobs,
        Message,
    },


}