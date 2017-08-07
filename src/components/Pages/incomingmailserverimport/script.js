import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../../Pages/Imported/Imported.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return{
            title:"Import a file - Sprout",
            nextactivity: "General Settings / Incoming Mail Servers / Import a File",
            btnlinks: {
                importbtnlink: "/setting/",
                cancelbtnlink:"/setting/incomingmailserver"

            },
        }
    },
    components: {

        DashboardController,
        Imported


    }
}