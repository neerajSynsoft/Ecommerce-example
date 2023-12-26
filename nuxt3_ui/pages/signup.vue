<template>
    <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto">
            <img class="w-[250px] h-[35px] mb-6 mr-2" src="/formulir-logo.png" alt="logo">
            <div class="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 mb-8">
                <div class="space-y-4 md:space-y-6">
                    <h1 class="px-6 pt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900">
                        Register
                    </h1>
                    <p class="px-6 text-sm text-gray-600">Don't have an account? Create your own <br /> account, it takes
                        less than a minute</p>
                    <VeeForm class="space-y-4 md:space-y-6" :validation-schema="schema" :initial-values="initialValues"
                        @submit="handleSubmit">
                        <div class="px-6">
                            <VTextInput type="text" name="name" label="What should we call
                                you?" placeholder="Enter your name" />
                        </div>
                        <div class="px-6">
                            <VTextInput type="text" name="phone" label="Phone number" placeholder="Enter phone number" />
                        </div>
                        <div class="px-6">
                            <VTextInput type="email" name="email" label="Email address" placeholder="Enter your email" />
                        </div>
                        <div class="px-6">
                            <VeeField name="monthlyV" v-slot="{ field, meta, errors }">
                                <label for="monthlyV"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly
                                    Volume</label>
                                <select id="monthlyV" v-bind="field.value"
                                    :class="`rounded-lg sm:text-sm border block w-full p-2 ${meta.touched ? meta.valid ? 'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500' : 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-700 focus:ring-primary-600 focus:border-primary-600'}`">
                                    <option class="p-6" selected>Select your monthly volume</option>
                                    <option class="p-6" value="100">100</option>
                                    <option class="p-6" value="100-500">100-500</option>
                                    <option class="p-6" value="500">>500</option>
                                </select>
                                <VeeErrorMessage name="monthlyV" as="p" class="mt-2 text-sm text-red-600" />
                            </VeeField>
                        </div>
                        <div class="px-6 relative">
                            <VTextInput :type="togglePassword ? 'text' : 'password'" name="password" label="Password"
                                placeholder="••••••••" />
                            <img v-if="togglePassword == false" @click="() => togglePassword = true"
                                src="~/assets/icons/ic-view-grey.svg" alt=""
                                class="toggle-password w-[18px] h-[18px] absolute right-8 top-9">

                            <img v-if="togglePassword === true" @click="() => togglePassword = false"
                                src="~/assets/icons/ic-eye-closed-grey.svg" alt=""
                                class="toggle-password w-[18px] h-[18px] absolute right-8 top-9">
                        </div>
                        <div class="px-6 relative">
                            <VTextInput :type="toggleCPassword ? 'text' : 'password'" name="confirmPassword" label="Confirm
                                password" placeholder="••••••••" />
                            <img v-if="toggleCPassword == false" @click="() => toggleCPassword = true"
                                src="~/assets/icons/ic-view-grey.svg" alt=""
                                class="toggle-password w-[18px] h-[18px] absolute right-8 top-9">

                            <img v-if="toggleCPassword === true" @click="() => toggleCPassword = false"
                                src="~/assets/icons/ic-eye-closed-grey.svg" alt=""
                                class="toggle-password w-[18px] h-[18px] absolute right-8 top-9">
                        </div>
                        <div class="bg-blue-50 p-2 px-6">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" v-model="referral"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500">I have referral code</label>
                                </div>
                            </div>
                            <div v-if="referral" class="mt-2">
                                <div class="text-sm flex justify-between">
                                    <p><span class="font-medium">Referral code </span> (Optional)</p>
                                    <VeeErrorMessage name="referralCode" as="p" class="mt-2 text-sm text-red-600" />
                                </div>
                                <div class="flex mt-2 gap-2">
                                    <VeeField name="referralCode" v-slot="{ field, meta, errors }">
                                        <input v-bind="field" placeholder="Enter code" type="text"
                                            :class="`rounded-lg sm:text-sm border block w-full p-2 ${meta.touched ? meta.valid ? 'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500' : 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-700 focus:ring-primary-600 focus:border-primary-600'}`" />

                                    </VeeField>
                                    <button type="submit"
                                        class="w-[160px] text-primary-600 border border-primary-600 bg-white font-medium rounded-lg text-sm px-5 py-2 text-center">Apply
                                        Code</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start px-6">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500">I accept the <a
                                        class="font-medium text-primary-600 hover:underline" href="#">Terms and
                                        Conditions</a></label>
                            </div>
                        </div>
                        <div class="px-6">
                            <button type="submit"
                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create
                                an account</button>
                        </div>
                        <p class="text-sm font-light text-gray-500 px-6 pb-6 before:text-center">
                            Already have an account? <NuxtLink to="/login"
                                class="font-medium text-primary-600 hover:underline">
                                Login here</NuxtLink>
                        </p>
                    </VeeForm>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";

const referral = ref(false);
const togglePassword = ref(false);
const toggleCPassword = ref(false);

async function submit(values:any) {
  const res = await $fetch('/api/auth/login', {
    method: 'post',
    body: values
  })
  console.log('body====',res);
}

const handleSubmit = (values: any, actions: any) => {
    console.log(values);
    submit(values)
    // actions.resetForm();
};

const nameValidator = (value: string) => {
    const name = value.trim()
    var isName = /^[a-zA-Z\s]+$/;
    return name ? !!name.match(isName) : false;
};

const phoneValidator = (value: string) => {
    value = value.toString();
    value = value.replace(/ /g, "");
    value = value.replace(/-/g, "");
    value = value.replace(/\(/g, "");
    value = value.replace(/\)/g, "");
    var phoneno = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{1,3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    return value ? !!value.match(phoneno) : true;
};

const usernameValidator = (value: string) => {
    var isUsername = /^[a-z0-9]*$/;
    return value ? !!value.match(isUsername) : true;
};

// configure({
//     validateOnBlur: true,
//     validateOnChange: true,
//     validateOnInput: false,
//     validateOnModelUpdate: true,
// });

const schema = object({
    name: string().required().min(1).test("is-valid-name", "Name is invalid.", nameValidator).label("This"),
    email: string()
        .required()
        .email()
        // .test(
        //   "email-is-taken",
        //   "Email is already taken",
        //   async (value: any) => !(await existingEmail(value))
        // )
        .label("This"),
    password: string().required().min(8).label("This"),
    phone: string().required().min(8).test("is-valid-phone", "Phone is invalid.", phoneValidator).label("This"),
    // monthlyV: string().required().min(8).label("This"),
    referralCode: string().required().label("This"),
    confirmPassword: string()
        .required()
        .oneOf([yupRef("password")], "Passwords do not match")
        .label("This"),
});

const initialValues = { name: "", email: "", password: "", phone: "", monthlyV: "", confirmPassword: "" };
definePageMeta({
    layout: false,
});
</script>