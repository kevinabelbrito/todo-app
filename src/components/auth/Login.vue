<template>
    <div>
        <h1 class="text-green-500 text-base font-bold text-center my-3">
            To-do app
        </h1>
        <form
            @submit.prevent="login"
        >
            <div class="my-5" :class="{ error: v$.email.$errors.length }">
                <label for="email" class="form-label">
                    E-Mail
                </label>
                <input
                    type="email"
                    class="form-input block w-full my-3"
                    id="email"
                    v-model="v$.email.$model"
                >
                <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>
            <div class="my-5" :class="{ error: v$.password.$errors.length }">
                <label for="password" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-input block w-full my-3"
                    id="password"
                    v-model="v$.password.$model"
                >
                <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>
            <div class="my-5">
                <button
                    type="submit"
                    class="button-green block w-full p-3"
                    :disabled="v$.$invalid"
                >
                    Log In
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export function validPassword(password) {
  let validPasswordPattern = new RegExp("^[a-zA-Z0-9]+(?:[-'\\s][a-zA-Z0-9]+)*$");
  if (validPasswordPattern.test(password)){
    return true;
  }
  return false;
}
export default {
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations() {
        return {
            email: { required, email },
            password: {
                required,
                min: minLength(7),
                pass_validation: {
                    $validator: validPassword,
                    $message: 'El password debe contener al menos un numero y una letra Mayuscula'
                }
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch("retrieveToken", {
                email: this.email,
                password: this.password
            })
            this.$router.push({ name: 'Dashboard' })
        }
    },
}
</script>