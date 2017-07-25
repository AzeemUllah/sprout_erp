import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import ScheduleanActivity from "./../../partials/ScheduleanActivity/ScheduleanActivity.vue"


export default{
    created: function () {
        document.title = this.title;
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
            title : "Your Pipeline - Sprout",
            pipeline: "Job Positions/Applications",
            btnlinks: {
                createbtnlink: "#/app/Recruitment/ReqJobAppCreate",
                importbtnlink: "#/app/Recruitment/ReqPipeImport",
                firstbtnlink: "#/app/Recruitment/Reqpipe",
                secondbtnlink: ""
            },
            tableheader: [
                " create_date",
                " Subject / Application Name",
                " Applicant's Name",
                " Email",
                " Phone",
                " Applied Job",
                " Stage",
                " Medium",
                " Source",
                " Appreciation",
                " Responsible",
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
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",
                        "Asad",
                        "Alupak",
                        "khan",




                    ],
                    "url": "#/app/Recruitment/ReqJobApp"


                },

            },
        }
    },
    components: {
        dashconterller: DashboardController,
        Modal,
        ScheduleanActivity,
        TableMain,

    }
}



