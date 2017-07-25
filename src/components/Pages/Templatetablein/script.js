import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetableincompo from "./../../partials/Templatetableincompo/Templatetableincompo.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Templates / Partner Review",
            title: 'Partner Review - Sprout',
            btnlinks: {
                createbtnlink: "/setting/templatetablecreate",
                editbtnlink: "/setting/templatetableedit",
            },
        }
    },


    components: {
        DashboardController,
        Templatetableincompo

    }
}
