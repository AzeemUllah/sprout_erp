import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Modalcreate from "./../../partials/Modalcreate/Modalcreate.vue"
import rexBox from "./../../partials/rexBox/rexBox.vue"

export default{
    created: function () {
        var self = this;
        this.select();
        $(function () {
            self.id ="/recruitment/ReqSettingEdit/"+self.$route.params.id
        })
        $(document).ready(function(){
            $("button").click(function(){
                $().appendTo("p");
            });
        });
        document.title = this.title;
        function endEdit(e) {
            var input = $(e.target),
                label = input && input.prev();
            label.text(input.val() === '' ? defaultText : input.val());
            input.hide();
            label.show();
        }
        $(function () {
            $('.clickedit').hide()
                .focusout(endEdit)
                .keyup(function (e) {
                    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                        endEdit(e);
                        return false;
                    } else {
                        return true;
                    }
                })
                .prev().click(function () {
                $(this).hide();
                $(this).next().show().focus();
            });

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
            nextactivity: "Job Position",
            title : "Jobs Positions - Sprout",
            modalheading: "Create a Job Position",
            dashboard: "Dashboard",
            names: [],
            id: '',
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "#/app/Employees/TableDep"
            },

        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/recruitment/jobs", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);
        },




    },


    components: {
        DashboardController,
        Modal,
        Modalcreate,
        rexBox,



    }

}