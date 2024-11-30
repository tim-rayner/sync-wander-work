<template>
    <div class="flex mt-12">
        <div class="card w-full max-w-sm shadow-lg bg-white">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Sign Up</h2>
                <form @submit.prevent="handleSignup">
                    <!-- Email -->
                    <div class="form-control mb-4">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            class="input input-bordered"
                            v-model="form.email"
                        />
                    </div>
                    <!-- OR -->
                    <div class="divider">OR</div>
                    <!-- Phone -->
                    <div class="form-control mb-4">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            class="input input-bordered"
                            v-model="form.phone"
                        />
                    </div>
                    <!-- Submit -->
                    <div class="form-control mt-6">
                        <button
                            type="submit"
                            class="py-3 px-6 bg-pink-700 text-xl text-white rounded-md text-center font-medium w-full mx-auto"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
    email: "",
    phone: "",
});

function handleSignup() {
    if (!form.value.email && !form.value.phone) {
        alert("Please enter either an email or a phone number to sign up.");
        return;
    }

    console.log("Signup Data:", form.value);
    alert("Signed up successfully!");
}
</script>

<style scoped>
/* Optional additional styling */
</style>
