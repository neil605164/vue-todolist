var app = new Vue({
    el: "#main",
    data: {
        title: "尚未存在任務清單",
        taskName: "",
        taskList: [],
        taskEnevt: "ALL",
    },
    methods: {
        addTask() {
            vm = this

            // 當送入空資料時，不理會
            if (vm.taskName === "") {
                return
            }

            obj = {
                id: Date.now(),
                title: vm.taskName,
                finish: false,
            }

            vm.taskList.push(obj)

            vm.taskName = ""
            return
        },
        deleteAll() {
            return this.taskList = []
        },
        deleteOne(item) {

            // 檢查傳入內容跟清單內容是否相同
            index = this.taskList.findIndex(function(task, key) {

                console.log(task.id, item.id)
                return task.id === item.id
            })

            this.taskList.splice(index, 1);

            return
        }
    },
    computed: {
        // 取全部的任務清單
        TaskList() {
            vm = this
            if (vm.taskEnevt == "ALL") {
                return vm.taskList
            }

            if (vm.taskEnevt == "Doing") {
                return vm.taskList.filter(item => item.finish == false)
            }

            if (vm.taskEnevt == "Done") {
                return vm.taskList.filter(item => item.finish == true)
            }
        }
    }
})