<template>
    <div class="bg-green-800 text-white min-h-screen">
        <div class="p-5 text-center">
            <img src="@assets/img/logo_short.svg" class="inline-block" width="30">
            <span class="text-lg text-white font-semibold ml-3 tracking-wider uppercase">
                Mi Águila
            </span>
        </div>
        <ul>
            <router-link
                to="/dashboard"
                tag="li"
                class="sidebar-option"
            >
                <fa icon="home" class="mr-5" />
                Inicio
            </router-link>
            <router-link
                to="/users"
                tag="li"
                class="sidebar-option"
            >
                <fa icon="users" class="mr-5" />
                Usuarios
            </router-link>
            <router-link
                to="/tasks"
                tag="li"
                class="sidebar-option"
            >
                <fa icon="clipboard-list" class="mr-5" />
                Tareas
            </router-link>
        </ul>
    </div>
</template>