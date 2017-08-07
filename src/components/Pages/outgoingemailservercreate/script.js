import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import outgoingemailservercreatecompo from "./../../partials/outgoingemailservercreatecompo/outgoingemailservercreatecompo.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            title:"New - Sprout",
            head: "General Settings / Outgoing Mail Servers / New",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"/setting/outgoingemailserver"
            },


        }
    },


    components: {
        DashboardController,
        outgoingemailservercreatecompo


    }
}