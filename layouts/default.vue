<template>
    <div class="h-full">
        <Header />

        <div class="flex w-full grow flex-col">
            <div class="min-h-[195vh] justify-center">
                <slot />
            </div>
        </div>

        <Footer />
    </div>
</template>
