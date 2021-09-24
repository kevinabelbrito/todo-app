<template>
    <div>
        <div class="logo">
            <img src="https://a.storyblok.com/f/112226/x/bd86c3c034/logo.svg" class="mx-auto" width="150">
        </div>
        <h1 class="text-green-500 text-base font-bold text-center my-3">
            To-do app
        </h1>
        <form
            @submit.prevent="login"
        >
            <div class="my-5">
                <label for="email" class="form-label">
                    E-Mail
                </label>
                <input
                    type="email"
                    class="form-input block w-full my-3"
                    id="email"
                    v-model="fields.email"
                >
            </div>
            <div class="my-5">
                <label for="password" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-input block w-full my-3"
                    id="password"
                    v-model="fields.password"
                >
            </div>
            <div class="my-5">
                <button
                    type="submit"
                    class="button-green block w-full p-3"
                >
                    Log In
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            console.log(this.fields)
        }
    },
}
</script>