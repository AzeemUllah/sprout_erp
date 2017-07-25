import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Recurtment',
            sidebarData: {
                JobPositions: "/Recruitment/ReqPosition",
                ResumesandLetters: "/Recruitment/Letters",
                Reports: "/Recruitment/ReportRecruitment",
                Configuration: [
                    {
                        url: "/Recruitment/RecutSetting",
                        title: "Settings"
                    },
                    {
                        url: "/Recruitment/ReqStages",
                        title: "Stages"
                    },
                    {
                        url: "/Recruitment/JobPosition",
                        title: "Job Positions"
                    },
                    {
                        url: "/Recruitment/DepsReq",
                        title: "Departments"
                    },

                ],


            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController

    }

}