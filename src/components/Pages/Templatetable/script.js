import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Templates",
            title: 'Templates - Sprout',
            btnlinks: {
                createbtnlink: "/setting/templatetablecreate",
                importbtnlink: "/setting/templatetableimport",
            },
            tableheader: [
                "Template Name",
                "Model",
                "",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "template 1",
                        "partner 1",
                        "",

                    ],
                    "url": "/setting/templatetablein"
                },
                "row1": {
                    "data": [
                        "template 2",
                        "partner 2",
                        "",

                    ],
                    "url": "/setting/templatetablein"
                },
            }
        }
    },


    components: {
        DashboardController,
        TableMain

    }
}
