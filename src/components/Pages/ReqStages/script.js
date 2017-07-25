import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Stages",
            title : "Stages - Sprout",
            nextactivity: "Stages",
            btnlinks: {
                createbtnlink:"#/app/Recruitment/Stagecreate",
                importbtnlink:"#/app/Recruitment/StageImport"
            },
            tableheader: [
                "Stage Name",
                "Folded in Recruitment Pipe"


            ],
            tabledata: [
                {
                    "data": [
                        "Fruits",

                    ],
                    "url": "/recruitment/Stages",
                    "checkbox":true

                },
                {
                    "data": [
                        "Fruits",

                    ],
                    "url": "/recruitment/Stages",
                    "checkbox":true

                },
                {
                    "data": [
                        "Fruits",

                    ],
                    "url": "/recruitment/Stages",
                    "checkbox":false

                },
                {
                    "data": [
                        "Fruits",

                    ],
                    "url": "/recruitment/Stages",
                    "checkbox":true

                },
               


            ]
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}