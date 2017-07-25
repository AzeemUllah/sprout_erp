import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetablecreatecompo from "./../../partials/Templatetablecreatecompo/Templatetablecreatecompo.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Templates / Partner Review",
            title: 'Partner Review - Sprout',
            btnlinks: {
                savebtnlink: "#/app/setting/",
                discardbtnlink: "/setting/templatetablein",
            },
        }
    },


    components: {
        DashboardController,
        Templatetablecreatecompo

    }
}
