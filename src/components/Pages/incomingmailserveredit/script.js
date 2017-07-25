import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import incomingmailservercreatecompo from "./../../partials/incomingmailservercreatecompo/incomingmailservercreatecompo.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            title:"New - Sprout",
            head: "General Settings / Incoming Mail Servers / New",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"/setting/incomingmailserverin"
            },


        }
    },


    components: {
        DashboardController,
        incomingmailservercreatecompo


    }
}