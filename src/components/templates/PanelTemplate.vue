<template>
    <div class="flex lg:flex-nowrap items-start">
        <div class="lg:w-1/5">
            <sidebar />
        </div>
        <div class="lg:w-4/5">
            <headerbar />
            <div class="p-5">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../panel/Sidebar.vue'
import Headerbar from '../panel/Headerbar.vue'
</script>