<template>
    <div class="">
        <div class="flex flex-auto items-center justify-center">
            <form @submit.prevent="createTask">
                <input
                    type="text"
                    class="form-input inline-block w-96"
                    placeholder="Indica el nombre de la tarea..."
                    v-model="currentTask.name"
                >
                <button class="button-green inline-block py-3 px-10" type="submit">
                    <span>Agregar Tarea</span>
                </button>
            </form>
        </div>
        <div class="my-5 max-w-3xl mx-auto">
            <div
                class="flex flex-auto justify-between items-center bg-gray-100 p-5 shadow-lg my-3"
                v-for="(task, index) in tasks"
                :key="index"
            >
                <div class="">
                    <div class="" v-if="editMode && currentEditTask.id == task.id">
                        <form
                            @submit.prevent="editTask()"
                        >
                            <input
                                type="text"
                                class="form-input inline-block"
                                v-model="task.name"
                            >
                            <button class="button-green inline-block p-2" type="submit">
                                <span>Editar</span>
                            </button>
                            <button
                                class="bg-red-500 text-white inline-block p-2" type="button"
                                @click.prevent="cancelEditTask()"
                            >
                                <span>Cancelar</span>
                            </button>
                        </form>
                    </div>
                    <span
                        class="text-black text-opacity-70 text-base font-medium text-center"
                        v-else
                    >
                        {{ task.name }}
                    </span>
                </div>
                <div class="text-center">
                    <button
                        class="mx-2 text-green-400 hover:text-opacity-50 transition-all duration-200"
                        @click="setTaskCompleted(task.id)"
                        v-if="!task.done"
                    >
                        <fa icon="check-circle" />
                    </button>
                    <button
                        class="mx-2 text-blue-400 hover:text-opacity-50 transition-all duration-200"
                        @click.prevent="setEditMode(task.id)"
                    >
                        <fa icon="edit" />
                    </button>
                    <button
                        class="mx-2 text-red-400 hover:text-opacity-50 transition-all duration-200"
                        @click.prevent="deleteTask(task.id)"
                    >
                        <fa icon="times-circle" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [],
            currentTask: {
                name: ''
            },
            currentEditTask: {},
            editMode: false
        }
    },
    methods: {
        createTask() {
            if(this.currentTask.name.length == 0) {
                alert("Debe indicar una tarea que hacer")
                return
            }
            this.tasks.push({
                id: parseInt(Math.random() * 100),
                name: this.currentTask.name,
                done: false
            })
            this.currentTask = {
                name: ''
            }
            this.setLocalStorage(this.tasks)
        },
        deleteTask(id) {
            const newTask = this.tasks.filter(task => task.id != id)
            this.tasks = newTask
            this.setLocalStorage(this.tasks)
        },
        setTaskCompleted(id) {
            this.tasks.map(task => {
                if(task.id == id) {
                    task.done = true
                }
            })
            this.setLocalStorage(this.tasks)
        },
        setEditMode(id) {
            const editTask = this.tasks.filter(task => task.id == id)
            this.currentEditTask = editTask[0]
            this.editMode = true
        },
        editTask() {
            this.editMode = false
            this.setLocalStorage(this.tasks)
        },
        cancelEditTask() {
            this.editMode = false
            this.getTasks()
        },
        getTasks() {
            this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
        },
        setLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    },
    beforeMount() {
        this.getTasks()
    }
}
</script>