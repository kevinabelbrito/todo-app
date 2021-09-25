<template>
    <div>
        <div class="my-5">
            <table class="table-auto w-full">
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
                        <td>{{ user.first_name }} {{ user.last_name }}</td>
                        <td>{{ user.phone_number }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.status }}</td>
                    </tr>
                </tbody>
            </table>
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
            let items = []
            for (let i = 0; i < 10; i++) {
                items.push({
                    id: 1,
                    first_name: 'Kevin',
                    last_name: 'Brito',
                    phone_number: '+584143946360',
                    email: 'kevin@test.tk',
                    status: true
                })
            }
            this.users = items
        }
    },
    beforeMount() {
        this.getUsers()
    }
}
</script>