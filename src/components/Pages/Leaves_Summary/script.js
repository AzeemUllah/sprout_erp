import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Leaves_Accordion from "./../../partials/Leaves_Accordion/Leaves_Accordion.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Leaves Summary",
            btnlinks: {
                createbtnlink:"/leaves/leave_summary_create",
                importbtnlink:"/leaves/leave_summary_import"
            },
            tableheader: [
                "Employees",
                "Allocation Mode",
                "Employees Tag",
                "Leave type",
                "Description",
                "Allocated Days",
                "Start Date",
                "End Date",
                "Status",



            ],
            tabledata: {
                "row": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",



                    ],
                    "url": "/inventory/inventory_adjustments_table"

                },
                "row1": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",



                    ],
                    "url": "/inventory/inventory_adjustments_table"

                },
                "row2": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",



                    ],
                    "url": "/inventory/inventory_adjustments_table"

                },

            }
        }
    },


    components: {
        DashboardController,
        Leaves_Accordion
    }
}