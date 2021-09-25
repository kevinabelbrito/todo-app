<template>
    <div>
        <div class="my-5">
            <table class="table-auto w-full" v-if="users.length > 0">
                <thead>
                    <tr>
                        <th>Nombre completo</th>
                        <th>Teléfono</th>
                        <th>E-Mail</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td>{{ user.firstName }} {{ user.lastName }}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <fa icon="check-circle" class="text-green-400" v-if="user.status" />
                            <fa icon="times-circle" class="text-red-400" v-else />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="my-5 p-5 text-center bg-yellow-200 rounded-lg" v-else>
                <p>No hay datos para mostrar</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        getUsers() {
            this.axios.get('https://mocki.io/v1/afd8908f-9f7c-4209-bffe-cb37829e95ae')
            .then(({data}) => this.users = data.sort((a,b) => {
                if(a.firstName > b.firstName) {
                    return 1
                }
                else if(a.firstName < b.firstName) {
                    return -1
                }
                return 0
            }))
            .catch(error => console.log(error))
        }
    },
    beforeMount() {
        this.getUsers()
    }
}
</script>