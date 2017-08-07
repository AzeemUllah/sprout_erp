import Letters from "./../../components/Pages/Letters/Letters.vue"
import ReportRecruitment from "./../../components/Pages/ReportRecruitment/ReportRecruitment.vue"
import JobPosition from "./../../components/Pages/JobPosition/JobPosition.vue"
import ReqDep from "./../../components/Pages/ReqDep/ReqDep.vue"
import JobImport from "./../../components/Pages/JobImport/JobImport.vue"
import ReqDepImport from "./../../components/Pages/ReqDepImport/ReqDepImport.vue"
import ReqDepcreate from "./../../components/Pages/ReqDepcreate/ReqDepcreate.vue"
import ReqDepEdit from "./../../components/Pages/ReqDepEdit/ReqDepEdit.vue"
import DepsReq from "./../../components/Pages/DepsReq/DepsReq.vue"
import Jobs from "./../../components/partials/Jobs/Jobs.vue"
import LetterEdit from "./../../components/Pages/LetterEdit/LetterEdit.vue"
import Jobcreate from "./../../components/Pages/Jobcreate/Jobcreate.vue"
import ReqPosition from "./../../components/Pages/ReqPosition/ReqPosition.vue"
import ReqStages from "./../../components/Pages/ReqStages/ReqStages.vue"
import Stages from "./../../components/Pages/Stages/Stages.vue"
import JobEdit from "./../../components/Pages/JobEdit/JobEdit.vue"
import LetterTable from "./../../components/Pages/LetterTable/LetterTable.vue"
import RecutSetting from "./../../components/Pages/RecutSetting/RecutSetting.vue"
import StageEdit from "./../../components/Pages/StageEdit/StageEdit.vue"
import Stagecreate from "./../../components/Pages/Stagecreate/Stagecreate.vue"
import StageImport from "./../../components/Pages/StageImport/StageImport.vue"
import Reqpipe from "./../../components/Pages/Reqpipe/Reqpipe.vue"
import ReqApps from "./../../components/Pages/ReqApps/ReqApps.vue"
import ReqApp from "./../../components/Pages/ReqApp/ReqApp.vue"
import ReqAppPosition from "./../../components/Pages/ReqAppPosition/ReqAppPosition.vue"
import RSettings from "./../../components/Pages/RSettings/RSettings.vue"
import ReqAppDocTable from "./../../components/Pages/ReqAppDocTable/ReqAppDocTable.vue"
import ReqDoccreate from "./../../components/Pages/ReqDoccreate/ReqDoccreate.vue"
import ReqAppDoc from "./../../components/Pages/ReqAppDoc/ReqAppDoc.vue"
import ReqCreateTable from "./../../components/Pages/ReqCreateTable/ReqCreateTable.vue"
import AppReqCreate from "./../../components/Pages/AppReqCreate/AppReqCreate.vue"
import ReqSettingEdit from "./../../components/Pages/ReqSettingEdit/ReqSettingEdit.vue"
import ReqSetting from "./../../components/Pages/ReqSetting/ReqSetting.vue"
import ReqpipeTable from "./../../components/Pages/ReqpipeTable/ReqpipeTable.vue"
import ReqSettingCreate from "./../../components/Pages/ReqSettingCreate/ReqSettingCreate.vue"
import ReqAppDocImport from "./../../components/Pages/ReqAppDocImport/ReqAppDocImport.vue"
import ReqAppDocCreate from "./../../components/Pages/ReqAppDocCreate/ReqAppDocCreate.vue"
import ResumeandLetters from "./../../components/Pages/ResumeandLetters/ResumeandLetters.vue"
import ReqDocTablecreaate from "./../../components/Pages/ReqDocTablecreaate/ReqDocTablecreaate.vue"
import ReqDocTableimport from "./../../components/Pages/ReqDocTableimport/ReqDocTableimport.vue"
import ReqDocTable from "./../../components/Pages/ReqDocTable/ReqDocTable.vue"
import ReqDoc from "./../../components/Pages/ReqDoc/ReqDoc.vue"
import ReqpipeCreate from "./../../components/Pages/ReqpipeCreate/ReqpipeCreate.vue"
import ReqJobAppEdit from "./../../components/Pages/ReqJobAppEdit/ReqJobAppEdit.vue"
import ReqJobApp from "./../../components/Pages/ReqJobApp/ReqJobApp.vue"
import ReqCalandar from "./../../components/Pages/ReqCalandar/ReqCalandar.vue"
import Modalcreate from "./../../components/partials/Modalcreate/Modalcreate.vue"
import Job from "./../../components/Pages/Job/Job.vue"
import Test from "./../../components/Pages/Test/Test.vue"
import Recruitment_layout from "./../../components/Pages/Recruitment_layout/Recruitment_layout.vue"
import ReqJobAppCreate from "./../../components/Pages/ReqJobAppCreate/ReqJobAppCreate.vue"
import ReqPipeImport from "./../../components/Pages/ReqPipeImport/ReqPipeImport.vue"
import EmpContract from "./../../components/partials/EmpContract/EmpContract.vue"
import ContractNew from "./../../components/partials/ContractNew/ContractNew.vue"


const routes = [
    { path: '/recruitment', component: Test,
        children: [

            { path: '', component: Recruitment_layout,
                children: [
                    { path: 'Letters', component: Letters},
                    { path: 'ReportRecruitment', component: ReportRecruitment},
                    { path: 'ReqDocTablecreaate', component: ReqDocTablecreaate},
                    { path: 'ReqDocTableimport', component: ReqDocTableimport},
                    { path: 'ReqDocTable', component: ReqDocTable},
                    { path: 'RecutSetting', component: RecutSetting},
                    { path: 'JobPosition', component: JobPosition},
                    { path: 'ReqDep', component: ReqDep},
                    { path: 'ReqDepEdit', component: ReqDepEdit},
                    { path: 'ReqDepcreate', component: ReqDepcreate},
                    { path: 'DepsReq', component: DepsReq},
                    { path: 'ReqDepImport', component: ReqDepImport},
                    { path: 'ReqStages', component: ReqStages},
                    { path: 'ReqPosition', component: ReqPosition},
                    { path: 'Job', component: Job},
                    { path: 'JobImport', component: JobImport},
                    { path: 'JobEdit', component: JobEdit},
                    { path: 'Jobcreate', component: Jobcreate},
                    { path: 'Jobs', component: Jobs},
                    { path: 'LetterEdit', component: LetterEdit},
                    { path: 'LetterTable', component: LetterTable},
                    { path: 'ResumeandLetters', component: ResumeandLetters},
                    { path: 'Stages', component: Stages},
                    { path: 'StageEdit', component: StageEdit},
                    { path: 'Stagecreate', component: Stagecreate},
                    { path: 'StageImport', component: StageImport},
                    { path: 'Reqpipe', component: Reqpipe},
                    { path: 'ReqApps', component: ReqApps},
                    { path: 'ReqDoc', component: ReqDoc},
                    { path: 'ReqApp', component: ReqApp},
                    { path: 'ReqAppDoc', component: ReqAppDoc},
                    { path: 'ReqAppDocCreate', component: ReqAppDocCreate},
                    { path: 'ReqDoccreate', component: ReqDoccreate},
                    { path: 'ReqAppDocTable', component: ReqAppDocTable},
                    { path: 'ReqAppDocImport', component: ReqAppDocImport},
                    { path: 'ReqCreateTable', component: ReqCreateTable},
                    { path: 'AppReqCreate', component: AppReqCreate},
                    { path: 'ReqSetting', component: ReqSetting},
                    { path: 'ReqSettingEdit', component: ReqSettingEdit},
                    { path: 'ReqSettingCreate', component: ReqSettingCreate},
                    { path: 'RSettings', component: RSettings},
                    { path: 'ReqAppPosition', component: ReqAppPosition},
                    { path: 'ReqpipeTable', component: ReqpipeTable},
                    { path: 'ReqPipeImport', component: ReqPipeImport},
                    { path: 'ReqJobApp', component: ReqJobApp},
                    { path: 'ReqJobAppEdit', component: ReqJobAppEdit},
                    { path: 'ReqJobAppCreate', component: ReqJobAppCreate},
                    { path: 'ReqpipeCreate', component: ReqpipeCreate},
                    { path: 'ReqCalandar', component: ReqCalandar},
                    { path: 'Modalcreate', component: Modalcreate},
                ]
            },


        ]

    },


];

module.exports = routes