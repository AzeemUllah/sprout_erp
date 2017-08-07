import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'attendance',
            sidebarData: {
                MyAttendances: "/attendance/sales",
                ManageAttendances: [
                    {
                        url: "/attendance/Manage",
                        title: "Attendances"
                    },
                    {
                        url: "/attendance/Grids",
                        title: "Employees"
                    },
                    {
                        url: "/attendance/mode",
                        title: "Kiosk Mode"
                    },

                ],
                Reports: "/attendance/Reportattendence",
                Configuration: "/attendance/attSettings"

            }
        }
    },
    components: {
        Sidebar,
        Topcontroller,
        DashboardController

    }

}