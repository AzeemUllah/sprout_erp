import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
export default{

    created: function () {
        var self = this;
        this.select();
        document.title = this.title;
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
                createbtnlink:"/recruitment/ReqDepcreate",
                importbtnlink:"/recruitment/ReqDepImport",
                editbtnlink:"#/app/attendance/Pin"
            },
            tableheader: [
                " Display Name",
                " Manager",
                " ParentDepartment",
            ],
            tablefooter:[
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
            nextactivity: "Departments",
            manager: '',
            managername: '',
            parentdep: '',
            parentdepname: '',
            title : "Departments - Sprout",
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637."',
            v: false,
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/recruitment/dep", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.DepartmentName1,
                                val.DepartmentName2,
                                val.employeename,
                            ],
                            "url": "/recruitment/ReqDep/"+val.id,

                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
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
        dashconterller: DashboardController

    }

}







