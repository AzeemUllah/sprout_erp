import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
import Tablecheck from "./../../partials/Tablecheck/Tablecheck.vue"
export default{
    created: function () {
        document.title = this.title;
        this.select();
        $(function(){

            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                    $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });
        });
    },
    data(){
        return {
            btnlinks: {
                createbtnlink:"/recruitment/Jobcreate",
                importbtnlink:"/recruitment/JobImport",
                editbtnlink:"#/app/attendance/Pin"
            },
            tableheader: [
                " Job Title",
                " Department",
                " Current Number Of Empolyee",
                " Expected New Empolyee",
                " Total Forcasted Empolyee",
                " Hired Empolyees",
                " Status",

            ],
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",


                    ],
                    "url": "/recruitment/ReqDep"


                },


            },
            r: true,
            p: false,
            k: true,
            nextactivity: "Job Positions",
            title : "Job Positions - Sprout",
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/recruitment/job", {
            }).then(function(res){
                var data = res.body.data;

                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.job_tittle,
                                val.name,
                                val.currentemployees,
                                val.expected,
                                val.forcasted,
                                val.hiredemployees,
                                val.status.data,


                            ],
                            "url": "/recruitment/job/"+val.id,

                        });
                    });
                }
                //     self.$http.post("/pdep", {"parent_dept_id":self.parentdep}).then(function (res) {
                //             var data = res.body.data[0];
                //             self.parentdepname = data.job_tittle;
                //             //console.log(self.job_tittle);
                //
                //             cnsole.log(res.body);
                //     self.$http.post("/manager", {"manager_id":self.manager}).then(function (res) {
                //              var data = res.body.data[0];
                //              self.managername = data.name;
                //                     //console.log(self.job_tittle);
                //
                //              console.log(res.body);
                //
                //
                //
                //     //self.options =res.body.data;
                // },function(err){
                //     alert(err);
                // });    //console.log(res.body);
                // },function(err){
                //     alert(err);
                // });
            },function(err){
                alert(err);
            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                //this.submit();
                //this.tags();
                //this.insert();
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
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        TableMain,
        Tablecheck,
        dashconterller: DashboardController

    }

}







