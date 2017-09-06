import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ScheduleanActivity from "./../../partials/ScheduleanActivity/ScheduleanActivity.vue"
export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();

        this.select1();
        this.select2();
        self.btnlinks.createbtnlink ="/recruitment/ReqpipeCreate/"+self.$route.params.id;
        $(function () {

            $("#sortable1, #sortable2").sortable({
                connectWith: ".connectedSortable"
            }).disableSelection();
            $("#click").on("click", function () {
                $('#create').toggle();
            });
            $("#click1").on("click", function () {
                $('#create1').toggle();
            });
            $("#click2").on("click", function () {
                $('#create2').toggle();
            });
            $("#click3").on("click", function () {
                $('#create3').toggle();
            });
            $("#addnew").on("click", function () {
                $('#addshow').show();
                $('#addnew').hide();
            });
            $("#discard").on("click", function () {
                $('#addnew').show();
                $('#addshow').hide();
            });
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
            });
        });
    },
    data(){
        return {
            modalheading: "Schedule an Activity",
            modal: "Edit Column",
            title : "Recruitment - Sprout",
            pipeline: "Job Positions/Applications",
            names: [],
            stages: [],
            stagename: '',
            job_positions_id: '',
            job_tittle: '',
            ids: '',
            jobspecific: '',
            options: '',
            options2: '',
            folded: '',
            Usetemplate: '',
            job_specific: '',
            email_template_id: '',
            name: '',
            id: '',
            g: '',
            idss: '51',
            num: '',
            title: '',
            btnlinks: {
                createbtnlink: "",
                importbtnlink: "#/app/imported",
                firstbtnlink: "/recruitment/Reqpipe",
                secondbtnlink: "/recruitment/ReqpipeTable"
            },
        }
    },
    methods: {
        submit1: function () {
            var self = this;
            self.$http.post("/recruitment/Editstages", {"id": self.id,"name": self.name,"job_specific": self.job_specific,"email_template_id": self.email_template_id,"folded": self.folded,"description": self.description}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        submit: function (id) {
            var self = this;
            self.ids=id;
            self.$http.post("/recruitment/delete", {"id": self.ids}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        insert1: function () {
            var self = this;
            self.$http.post("/recruitment/createapp", {
                "title": self.title,
            }).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        insert: function () {
            var self = this;
            self.$http.post("/recruitment/createstages", {
                "stagename": self.stagename,

            }).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        dsubmit: function () {
            var self = this;
            self.$http.post("/recruitment/deletesapp", {"id": self.appid,"ids": self.appids}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/selectstages", {"id": self.id}).then(function (res) {
                self.stages = res.body.data;
            },function(err){
                alert(err);
            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);
        },
        select: function (id) {
            var self = this;
            self.$http.post("/recruitment/applicationsonjob", {"id":id}).then(function (res) {
                self.names = res.body.data;
            },function(err){
                alert(err);
            });

        },

        select2: function () {
            var self = this;
            self.$http.post("/recruitment/tablestagesselect", {"id": self.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.id = parentdata.id;
                self.folded = parentdata.folded.data;
                self.description = parentdata.description

                console.log(res.body)
            },function(err){
                alert(err);
            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);

            //alert(self.companyName);
            self.$http.post("/recruitment/emailss", {
                "name": self.Usetemplate,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){
                alert(err);
            });
            self.$http.post("/recruitment/jobspecific", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);

            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {

            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                //this.submit();
                //this.tags();
                this.insert();
                //this.select();
                //this.insert();

                // this.submiting();

                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        dashconterller: DashboardController,
        Modal,
        ScheduleanActivity

    }
}



