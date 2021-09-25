<template>
    <div class="flex flex-auto justify-between items-center p-5">
        <div class="">
            <h2 class="text-black text-opacity-70 font-semibold text-lg">
                Inicio
            </h2>
        </div>
        <ul class="flex flex-auto justify-end items-center gap-5">
            <li class="text-gray-300 cursor-pointer hover:text-gray-400 transition-all duration-200">
                <fa icon="search" />
            </li>
            <li class="text-gray-300 cursor-pointer hover:text-gray-400 transition-all duration-200">
                <fa icon="bell" />
            </li>
            <router-link to="/" class="border-l border-gray-300 px-3">
                <span class="inline-block mr-3 font-bold text-black text-opacity-50">
                    Kevin Brito
                </span>
                <img src="https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg" width="30" class="inline-block rounded-full">
            </router-link>
        </ul>
    </div>
</template>