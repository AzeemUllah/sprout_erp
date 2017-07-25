import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/Tablemain/Tablemain.vue"



export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();
    },
    data () {
        return {
            title:"Incoming Mail Servers - Sprout",
            head: "General Settings / Incoming Mail Servers",
            btnlinks: {
                createbtnlink:"/setting/incomingmailservercreate",
                importbtnlink:"/setting/incomingmailserverimport"
            },
            tableheader: [
                "Name",
                "Server type",
                "SSL/TLS",
                "Create a new Record",
                "Last Fetch Data",
                "# of emails",
                "Status",

            ],
            tablefoot: [
                "",
                "",
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
                        "usama",
                        "POP server",
                        "",
                        "ada",
                        "TLS (STARTTLS)",
                        "0 records",
                        " not",

                    ],
                },
            }
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/setting/incomingtable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.name,
                                val.server_type,
                                val.ssl_tsl,
                                val.server_type	,
                                val.last_fetched_date,
                                val.port,
                                val.status,
                            ],
                            "url": "/setting/incomingmailserverin/"+val.id,
                        });
                    });
                    console.log(self.tabledata);
                }
                //self.options =res.body.data;

            },function(err){
                alert(err);
            });
        },
        delete: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/delete_users", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
    },

    components: {
        DashboardController,
        Tablemain


    }
}