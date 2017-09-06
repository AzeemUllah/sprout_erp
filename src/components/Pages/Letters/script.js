import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
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
            title : "Resumes and Letters - Sprout",
            dashboard: "Dashboard",
            names: [],
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "/recruitment/LetterTable"
            },
        }
    },
    methods: {


        select: function () {
            var self = this;
            self.$http.post("/recruitment/letter", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;


                console.log(self.names);
            },function(err){
                alert(err);
            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }


    },

    components: {
        DashboardController



    }

}