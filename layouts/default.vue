<template>
    <div class="h-full">
        <Heading />

        <div class="flex w-full grow flex-col">
            <div class="container my-6 flex w-full justify-center px-2 xs:px-4">
                <slot />
            </div>
        </div>

        <DevOnly>
            <DevSizeIndicator />
        </DevOnly>
    </div>
</template>
