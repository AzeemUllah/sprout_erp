import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Modalcreate from "./../../partials/Modalcreate/Modalcreate.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });
        });


    },
    data () {
        return {
            nextactivity: "Job Position",
            title : "Jobs Positions - Sprout",
            modalheading: "Create a Job Position",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "#/app/Employees/TableDep"
            },

        }
    },

    components: {
        DashboardController,
        Modal,
        Modalcreate,



    }

}