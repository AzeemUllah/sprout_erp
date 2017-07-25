import Test from "./../../components/Pages/Test/Test.vue"
import Leaves_Layout  from "./../../components/Pages/Leaves_Layout/Leaves_Layout.vue"
import Leaves_Accordion  from "./../../components/partials/Leaves_Accordion/Leaves_Accordion.vue"
import Leaves_Summary  from "./../../components/Pages/Leaves_Summary/Leaves_Summary.vue"
import Leaves_Allocation  from "./../../components/Pages/Leaves_Allocation/Leaves_Allocation.vue"
import Leaves_Request  from "./../../components/Pages/Leaves_Request/Leaves_Request.vue"
import Leaves_Dashboard  from "./../../components/Pages/Leaves_Dashboard/Leaves_Dashboard.vue"
import Leave_Allocation_Table  from "./../../components/Pages/Leave_Allocation_Table/Leave_Allocation_Table.vue"
import Leave_Allocation_Edit  from "./../../components/Pages/Leave_Allocation_Edit/Leave_Allocation_Edit.vue"
import Leave_Allocation_Create  from "./../../components/Pages/Leave_Allocation_Create/Leave_Allocation_Create.vue"
import Leaves  from "./../../components/Pages/Leaves/Leaves.vue"
import Leaves_Create  from "./../../components/Pages/Leaves_Create/Leaves_Create.vue"
import Leave_Summary_create  from "./../../components/Pages/Leave_Summary_create/Leave_Summary_create.vue"
import Leave_Summary_Import  from "./../../components/Pages/Leave_Summary_Import/Leave_Summary_Import.vue"
import Allocation_Leaves  from "./../../components/Pages/Allocation_Leaves/Allocation_Leaves.vue"
import Leaves_Import  from "./../../components/Pages/Leaves_Import/Leaves_Import.vue"
import Allocation_Leaves_Create  from "./../../components/Pages/Allocation_Leaves_Create/Allocation_Leaves_Create.vue"
import Allocation_Leaves_Import  from "./../../components/Pages/Allocation_Leaves_Import/Allocation_Leaves_Import.vue"
import Leaves_Details   from "./../../components/Pages/Leaves_Details/Leaves_Details.vue"
import Leaves_Detail_Import   from "./../../components/Pages/Leaves_Detail_Import/Leaves_Detail_Import.vue"
import Leaves_Detail_Table   from "./../../components/Pages/Leaves_Detail_Table/Leaves_Detail_Table.vue"
import Leaves_Detail_Edit   from "./../../components/Pages/Leaves_Detail_Edit/Leaves_Detail_Edit.vue"
import Leaves_Detail_Create   from "./../../components/Pages/Leaves_Detail_Create/Leaves_Detail_Create.vue"
import Leaves_Configuration   from "./../../components/Pages/Leaves_Configuration/Leaves_Configuration.vue"
import Leaves_Configuration_Table   from "./../../components/Pages/Leaves_Configuration_table/Leaves_Configuration_table.vue"
import Leaves_Configuration_Edit   from "./../../components/Pages/Leaves_Configuration_Edit/Leaves_Configuration_Edit.vue"
import Leaves_Configuration_Create   from "./../../components/Pages/Leaves_Configuration_Create/Leaves_Configuration_Create.vue"
import Leaves_Configuration_Import   from "./../../components/Pages/Leaves_Configuration_Import/Leaves_Configuration_Import.vue"
import Leaves_Request_Table   from "./../../components/Pages/Leaves_Request_Table/Leaves_Request_Table.vue"
import Leaves_Request_Calendar   from "./../../components/Pages/Leaves_Request_Calendar/Leaves_Request_Calendar.vue"
import Leaves_Request_Import   from "./../../components/Pages/Leaves_Request_Import/Leaves_Request_Import.vue"
import Leaves_Request_Edit   from "./../../components/Pages/Leaves_Request_Edit/Leaves_Request_Edit.vue"
import Leaves_Request_Create   from "./../../components/Pages/Leaves_Request_Create/Leaves_Request_Create.vue"
import Leaves_Allocation_Import   from "./../../components/Pages/Leaves_Allocation_Import/Leaves_Allocation_Import.vue"
import allocation_leaves_import   from "./../../components/Pages/Allocation_Leaves_Import/Allocation_Leaves_Import.vue"
import Leaves_Pivot   from "./../../components/Pages/Leaves_Pivot/Leaves_Pivot.vue"
import Leaves_Summary_Table   from "./../../components/Pages/Leaves_Summary_Table/Leaves_Summary_Table.vue"
import Leave_Summary_Edit   from "./../../components/Pages/Leave_Summary_Edit/Leave_Summary_Edit.vue"


const routes = [
    { path: '/leaves', component: Test,
        children: [
            { path: '', component: Leaves_Layout,
                children: [
                    { path: 'leaves_accordion', component: Leaves_Accordion},
                    { path: 'leaves_summary', component: Leaves_Summary},
                    { path: 'leaves_allocation', component: Leaves_Allocation},
                    { path: 'leaves_request', component: Leaves_Request},
                    { path: '', component: Leaves_Dashboard},
                    { path: 'leave_allocation_table', component: Leave_Allocation_Table},
                    { path: 'leave_allocation_edit', component: Leave_Allocation_Edit},
                    { path: 'leave_allocation_create', component: Leave_Allocation_Create},
                    { path: 'leaves', component: Leaves},
                    { path: 'leaves_create', component: Leaves_Create},
                    { path: 'leave_summary_create', component: Leave_Summary_create},
                    { path: 'leave_summary_import', component: Leave_Summary_Import},
                    { path: 'allocation_leaves', component: Allocation_Leaves},
                    { path: 'leaves_import', component: Leaves_Import},
                    { path: 'allocation_leaves_create', component: Allocation_Leaves_Create},
                    { path: 'allocation_leaves_import', component: Allocation_Leaves_Import},
                    { path: 'leaves_details', component: Leaves_Details},
                    { path: 'leaves_detail_import', component: Leaves_Detail_Import},
                    { path: 'leaves_detail_table', component: Leaves_Detail_Table},
                    { path: 'leaves_detail_edit', component: Leaves_Detail_Edit},
                    { path: 'leaves_detail_create', component: Leaves_Detail_Create},
                    { path: 'leaves_configuration', component: Leaves_Configuration},
                    { path: 'leaves_configuration_table', component: Leaves_Configuration_Table},
                    { path: 'leaves_configuration_edit', component: Leaves_Configuration_Edit},
                    { path: 'Leaves_Configuration_Create', component: Leaves_Configuration_Create},
                    { path: 'leaves_configuration_import', component: Leaves_Configuration_Import},
                    { path: 'leaves_request_table', component: Leaves_Request_Table},
                    { path: 'leaves_request_calendar', component: Leaves_Request_Calendar},
                    { path: 'leaves_request_import', component: Leaves_Request_Import},
                    { path: 'leaves_request_edit', component: Leaves_Request_Edit},
                    { path: 'leaves_request_create', component: Leaves_Request_Create},
                    { path: 'leaves_allocation_import', component: Leaves_Allocation_Import},
                    { path: 'allocation_leave_import', component: Allocation_Leaves_Import},
                    { path: 'leaves_pivot', component: Leaves_Pivot},
                    { path: 'leaves_summary_table', component: Leaves_Summary_Table},
                    { path: 'leave_summary_edit', component: Leave_Summary_Edit},

                ]
            },
        ]

    },


];

module.exports = routes