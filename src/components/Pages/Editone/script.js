import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import Modal from "./../../partials/Modal/Modal.vue"
export default{
    created: function () {

        $(function(){
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
            $(document).ready(function(){
                $(".btn.btn-success.b").click(function(){
                    $("#panel").slideToggle("slow");
                });
            });

            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#edit1').css("display");
                if(check == "none"){
                    $('#edit1').show();
                    $('#main1').hide();
                }else{
                    $('#edit1').hide();
                    $('#main1').show();
                }

            });

            document.title = this.title;
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $(document).ready(function () {
                var d = new Date();
                var hour    = d.getHours();
                var minute  = d.getMinutes();
                var second  = d.getSeconds();
                var time = hour+":"+minute+":"+second;
                $("#demo").html(time);
            });
        });

    },
    data(){
        return {
            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,

            u:false,
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "Attendances/Administrators from 2017-02-11 09:00:00 to 2017-02-11 13:00:00/Administrators",
            btnlinks: {
                discardbtnlink:"#/app/attendance/Manager",
                savebtnlink:"#/app/attendance/Manager"
            },
            tableheader: [
                "Reference",
                "Destination Location Zone",
                "Partner",
                "Schduled Date",
                "Source Document",
                "Back Order Of",
                "Status",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },

            }

        }
    },
    components: {
        Emptyform,
        Tabs,
        Modal,
        ModelDescription,
        Componame,
        DashboardController,
        Tableview,
        Editing,



    }

}
