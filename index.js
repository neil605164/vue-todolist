var app = new Vue({
    el: "#main",
    data: {
        title: "尚未存在任務清單",
        taskName: "",
        taskList: [],
        newTaskList: [],
        taskEnevt: "ALL",
    },
    methods: {
        addTask() {
            vm = this
            obj = {
                id: Date.now(),
                title: vm.taskName,
                finish: false,
            }

            vm.taskList.push(obj)

            vm.taskName = ""
            return
        },
    },
    computed: {
        // 取全部的任務清單
        TaskList() {
            vm = this
            if (vm.taskEnevt == "ALL") {
                vm.newTaskList = vm.taskList
            }

            if (vm.taskEnevt == "Doing") {
                vm.newTaskList = vm.taskList.filter(item => item.finish == false)
            }

            if (vm.taskEnevt == "Done") {
                vm.newTaskList = vm.taskList.filter(item => item.finish == true)
            }
            return this.newTaskList
        }
    }
})