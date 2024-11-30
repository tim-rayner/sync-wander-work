<template>
    <div class="h-full">
        <Header :dark="true" :minimal="true" />

        <div class="flex w-full grow flex-col">
            <div class="min-h-[100vh] justify-center">
                <slot />
            </div>
        </div>
    </div>
</template>
