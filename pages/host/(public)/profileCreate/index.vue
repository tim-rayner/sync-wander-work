<script setup lang="ts">
import Heart from "@/pages/explorer/components/Heart.vue";
import StepOne from "@/components/features/host-create/StepOne.vue";
import StepTwo from "@/components/features/host-create/StepTwo.vue";
import StepThree from "@/components/features/host-create/StepThree.vue";
import { computed } from "vue";
import StepSix from "~/components/features/host-create/StepSix.vue";
import StepFive from "~/components/features/host-create/StepFive.vue";
import StepEight from "~/components/features/host-create/StepEight.vue";
import StepSeven from "~/components/features/host-create/StepSeven.vue";
import StepNine from "~/components/features/host-create/StepNine.vue";
import FinalStep from "~/components/features/host-create/FinalStep.vue";

export interface OnboardingStep {
    id: number;
    title: string;
    subtitle?: string;
    component: any;
    completed: boolean;
    active: boolean;
    next: number | null;
    prev: number | null;
}

enum FirstResovationType {
    any,
    experienced,
}

enum bookingSetting {
    approveFirstFive = "Approve first Five",
    instantBook = "Instant book",
}

enum workloadCatagory {
    home = "home improvements",
    gardening = "gardening",
    houseSitting = "house sitting",
    tech = "tech",
    animalCare = "animal care",
    labour = "basic labour",
}

export type HostOnboardingModel = {
    location: {
        lat: number;
        lng: number;
    };
    firstResovationType: FirstResovationType;
    bookingSettings: bookingSetting.instantBook;
    accomDescription: string;
    workloadCatagory: workloadCatagory;
    workplaceTitle: string;
    workplacePhotos: string[];
    workplaceOfferings: any;
};

const steps = ref<OnboardingStep[]>([
    {
        id: 1,
        title: "Tell us about your place",
        subtitle: "Where is your place located?",
        component: StepOne,
        completed: false,
        active: true,
        next: 2,
        prev: null,
    },
    {
        id: 2,
        title: "Choose who to welcome for your first reservation",
        subtitle: "After your first guest, anyone can book your place.",
        component: StepTwo,
        completed: false,
        active: false,
        next: 3,
        prev: 1,
    },
    {
        id: 3,
        title: "Pick your booking settings",
        subtitle: "You can change this at any time",
        component: StepThree,
        completed: false,
        active: false,
        next: 4,
        prev: 2,
    },
    {
        id: 4,
        title: "Create your description",
        subtitle: "Share what makes your place special",
        component: StepFive,
        active: false,
        completed: false,
        next: 5,
        prev: 3,
    },
    {
        id: 5,
        title: "Next, lefts describe your workload",
        subtitle: "Choose up to 2 highlights. We'll use these to get your description started",
        component: StepSix,
        active: false,
        completed: false,
        next: 6,
        prev: 4,
    },
    {
        id: 6,
        title: "Next, lets give your workplace a title",
        subtitle: "Short titles work best. Have fun with it - you can always change it later",
        component: StepSeven,
        active: false,
        completed: false,
        next: 7,
        prev: 5,
    },
    {
        id: 7,
        title: "Add some photos of your workplace",
        subtitle: "",
        component: StepEight,
        active: false,
        completed: false,
        next: 8,
        prev: 6,
    },
    {
        id: 8,
        title: "You'll need 5 photos to get started. You can add more or make changes later",
        subtitle: "You can add more after you publish your listing",
        component: StepNine,
        active: false,
        completed: false,
        next: 9,
        prev: 7,
    },
    {
        id: 9,
        title: "Looking good, now lets sign you up",
        subtitle:
            "To continue with the host account onboarding, please sign up using your email address or phone number",
        component: FinalStep,
        active: false,
        completed: false,
        next: null,
        prev: 8,
    },
]);

const activeStep = computed(() => steps.value.find((step) => step.active) || steps.value[0]);
const router = useRouter();
const loading = ref(false);

const model = ref<HostOnboardingModel>({
    location: {
        lat: 0,
        lng: 0,
    },
    firstResovationType: FirstResovationType.any,
    bookingSettings: bookingSetting.instantBook,
    accomDescription: "",
    workloadCatagory: workloadCatagory.farm,
    workplaceTitle: "",
    workplacePhotos: [],
    workplaceOfferings: {},
});

definePageMeta({
    layout: "on-boarding-minimal",
});

function LoadToNext() {
    loading.value = true;
    setTimeout(() => {
        navigateTo("/host/profileOverview");
    }, 2000);
}

const next = () => {
    if (activeStep.value) {
        const currentStep = activeStep.value;
        currentStep.active = false;
        const nextStep = steps.value.find((step) => step.id === currentStep.next);
        if (nextStep) {
            nextStep.active = true;
        } else {
            currentStep.active = true; // Keep the current step active if there's no next step
            LoadToNext();
        }
    }
};

const prev = () => {
    if (activeStep.value) {
        const currentStep = activeStep.value;
        currentStep.active = false;
        const prevStep = steps.value.find((step) => step.id === currentStep.prev);
        if (prevStep) {
            prevStep.active = true;
            return;
        }
        router.push("/");
    }
};

watch(
    model,
    (newValue) => {
        console.log(newValue);
    },
    { deep: true }
); // Log the model whenever it changes
</script>

<template>
    <div class="flex-col flex min-h-screen">
        <div v-if="loading" class="flex-1 flex flex-col justify-center items-center text-pink-600">
            <div class="flex flex-col my-auto">
                <Heart />
                <p class="text-pink-600 text-center mt-3">Working...</p>
            </div>
        </div>

        <div v-else>
            <div class="header flex justify-center">
                <div class="flex"></div>
            </div>
            <div class="wrapper h-[90vh] flex flex-col">
                <div class="content flex-1 flex">
                    <div class="onboarding flex-1 content-center justify-center container">
                        <component :is="activeStep?.component" v-model:model="model" />
                    </div>
                </div>
                <div class="flex justify-between p-4">
                    <div class="btn btn-outline w-[150px] md:w-[300px]" @click="prev">BACK</div>
                    <div class="flex"></div>
                    <div
                        class="block py-3 px-6 bg-pink-700 text-xl text-white rounded-md text-center font-medium mx-3 w-[150px] md:w-[300px] cursor-pointer"
                        @click="next"
                    >
                        {{ activeStep.id === steps.length ? "Finish" : "Next" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
