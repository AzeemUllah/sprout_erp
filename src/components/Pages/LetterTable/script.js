import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        var self = this;
        this.select();
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });
        });


    },
    data () {
        return {
            nextactivity: "Resumes and Letters",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "/recruitment/LetterTable",
                firstbtnlink: "/recruitment/Letters",
            },
            tableheader: [
                " Attachment Name",
                " File Name",
                " Type",
                " Owner",
                " Date Created",

            ],
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Williams_CV.doc",
                        "Williams_CV.doc",
                        "hr.applicant",
                        "",
                        "9",
                        "URL",
                        "Alupak Industriess",
                        "Administrators",
                        "02/12/2017 08:12:40",
                    ],
                    "url": "/recruitment/ResumeandLetters"
                },

            },

        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/recruitment/lettertable", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.application_tittle,
                                val.document_url,
                                val.type,
                                val.date_created,
                                val.owner,
                            ],
                            "url": "/recruitment/ResumeandLetters/"+val.id,
                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                // this.submiting();
                alert('From Submitted!');
            }).catch(() => {

            });
        }
    },

    components: {
        DashboardController,
        TableMain,



    }

}