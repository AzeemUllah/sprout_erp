import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Leave Types",
            title: "Leave Types - Sprout",
            btnlinks: {
                createbtnlink:"/leaves/leaves_configuration_create",
                importbtnlink:"/leaves/leaves_configuration_import"
            },
            tableheader: [
                "Leave type",
                "Allow To Override Limit",

            ],
            tablefooter: [
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "[FURN001] Computer Desk",


                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,


                },
                "row1": {
                    "data": [
                        "[FURN001] Computer Desk",

                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,

                },
                "row2": {
                    "data": [
                        "[FURN001] Computer Desk",
                        
                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,

                },
                "row3": {
                    "data": [
                        "[FURN001] Computer Desk",

                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}