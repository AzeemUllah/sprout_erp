import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
import  TableMain from "./../../partials/TableMain/TableMain.vue"
import Contract from "./../../partials/Contract/Contract.vue"
import Contracting from "./../../partials/Contracting/Contracting.vue"
export default{
    created: function () {

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
                createbtnlink: "#/app/Employees/CreateContract",

                importbtnlink:"#/app/Employees/Importemp"
            },
            tableheader: [
                " Contract Reference",
                " Employee",
                " Contract Type",
                " Job Title",
                " Working Schedule",
                " Start Date",
                " End Date",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "contract",
                        "Hassan",
                        "Employee",
                        "Developer",
                        "",
                        "3/1/12",
                        "3/1/12",
                    ],
                    "url": "/employee/Contractone"


                },

            },
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
            r: true,
            p: false,
            k: true,
            nextactivity: "Contracts",
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        Contract,
        Contracting,
        TableMain,
        dashconterller: DashboardController

    }

}







