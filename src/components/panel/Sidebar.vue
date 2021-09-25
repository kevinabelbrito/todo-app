<template>
    <div class="bg-green-800 text-white min-h-screen">
        <div class="p-5">
            <img src="https://a.storyblok.com/f/112226/x/bd86c3c034/logo.svg" class="mx-auto" width="150">
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