import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import jobs from "./../../partials/Jobs/Jobs.vue"


export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        $(function() {
            $("#save").click(function () {
                self.submit();
            });
            $("#num01").click(function () {
                self.ssubmit();
            });
            $("#num10").click(function () {
                self.psubmit();
            });
            $("#save").click(function () {
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
        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Job Positions/New",
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
            job_tittle: '',
            department_id: '',
            recruitment_responsible: '',
            expected: '',
            job_email: '',
            job_location: '',
            description: '',
            options2: '',
            options: '',
            options3: '',
            gf: '',
            num: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/JobPosition",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        selectid: function (id) {
            var self = this;
            self.gf=id;
            alert(self.gf);
        },
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/reqjobs", {"status": self.gf,"id": self.$route.params.id,"job_tittle": self.job_tittle,"job_email": self.job_email,"department_id": self.department_id,"recruitment_responsible": self.recruitment_responsible,"expected": self.expected,"job_location": self.job_location,"description": self.description}).then(function(res){
                console.log(res.body);
            },function(err){
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
        select: function () {
            var self = this;
            self.$http.post("/recruitment/jobss", {"id": self.$route.params.id}).then(function (res) {

                    var parentdata = res.body.data[0];
                    self.job_tittle = parentdata.job_tittle;
                    self.expected = parentdata.expected;
                    self.job_email = parentdata.job_email;
                    self.description = parentdata.description;



                    // console.log(res.body)


            //alert(self.companyName);
            self.$http.post("/recruitment/deps", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){
                alert(err);
            });
            self.$http.post("/recruitment/reqresponse", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){
                alert(err);
            });
            self.$http.post("/recruitment/joblocation", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);

            },function(err){
                alert(err);
            });
            },function(err){
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
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }


    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
        jobs,
    },


}