import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        this.select();
        document.title = this.title;
        $(function () {
            $("#action").hide();
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
            });

            $("#delete").click(function () {
                var del = []; // initialize empty array
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());

                    self.btnlinks.deletebtnlink = "/setting/users/"+del;

                    self.delete();
                });
                console.log(del);

                alert(del);
            });

        });
    },
    data () {
        return {
            head: "Stages",
            title : "Stages - Sprout",
            nextactivity: "Stages",
            stagename: '',
            folded: '',
            options: '',
            btnlinks: {
                createbtnlink:"/recruitment/Stagecreate",
                importbtnlink:"/recruitment/StageImport"
            },
            tableheader: [
                "Stage Name",
                "Folded in Recruitment Pipe"


            ],
            tabledata: [
                {

                }
            ]
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/recruitment/tablestages", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.name
                            ],
                            "url": "/recruitment/Stages/"+val.id,
                            "checkbox":true
                        });
                    });
                }
                //self.options =res.body.data;
                //console.log(res.body);
            },function(err){
                alert(err);
            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                //this.submit();
                //this.tags();
                //this.insert();
                //this.select();
                //this.insert();
                // this.submiting();

                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}