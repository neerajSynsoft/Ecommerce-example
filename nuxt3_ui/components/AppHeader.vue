<script lang="ts" setup>
// import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const props = defineProps(['toggleSidebar', 'sidebarExpanded']);
const { toggleSidebar } = props;

const router = useRouter();
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
// const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const { locale } = useI18n()

const logout = () => {
  logUserOut();
  router.push('/login');
};

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const items = [
  [{
    label: 'Account Settings',
    icon: 'i-heroicons-cog-6-tooth-20-solid',
    to: "/settings/account"
  }], [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-down-tray-20-solid',
    // shortcuts: ['⌘', 'D'],
    click: () => {
      logout()
    }
  }],
]
</script>
<template>
  <header>
    <nav class="bg-primary border-gray-200 fixed pr-6 w-full z-10 h-[64px] overflow-visible max-w-screen-2xl">
      <UContainer :ui="{ padding: 'px-0 sm:px-0 lg:px-0' }" class="flex flex-wrap items-center justify-between py-4">
        <div class="flex">
          <NuxtLink to="/" class="flex items-center ml-[10px]">
            <img src="~/assets/images/logo-app-white.svg" :class="`${props.sidebarExpanded ? 'md:hidden' : ''} h-[20px] block`" alt="Logo" />
            <img src="~/assets/images/formulir-logo-light.png" :class="`h-[20px] w-[150px] hidden ${props.sidebarExpanded ? 'md:block' : ''}`"
              alt="Logo" />
          </NuxtLink>
          <button class="ml-3 sm:ml-10" @click="toggleSidebar()">
            
            <!-- v-click-outside="vcoConfig"> -->
            <img class="" src="~/assets/img/icon/menu_icon.svg" />
          </button>
        </div>
        <div class="block w-auto" id="navbar-default">
          <ul class="font-medium flex p-0 flex-row space-x-3 md:space-x-6 rtl:space-x-reverse mt-0 border-0">
            <li>
              <UPopover>
                <UChip text="24" size="2xl" color="red">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxOSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjkuNDAzMzciIGN5PSIxNS43OTE5IiByeD0iOC40MDMzNyIgcnk9IjMuODE5NzEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI5LjQwMzA4IiBjeT0iMTQuMTMzNSIgcj0iMS44NTIzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE1LjkxNjkgMTAuNTc5NkwxNS40NTk3IDguNTczNDFDMTQuODE0MiA1Ljc0MDMzIDEyLjI5NDggMy43MzA0NyA5LjM4OTEyIDMuNzMwNDdWMy43MzA0N0M2LjQ5NjM5IDMuNzMwNDcgMy45ODQ3IDUuNzIyOCAzLjMyNjMyIDguNTM5NkwyLjEwNTQ3IDEzLjc2MjkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNjk2IDMuODA3ODVDMTAuODM3NiAzLjU3NzMzIDEwLjkxOTIgMy4zMDYwMyAxMC45MTkyIDMuMDE1NjVDMTAuOTE5MiAyLjE3ODU4IDEwLjI0MDcgMS41IDkuNDAzNTkgMS41QzguNTY2NTIgMS41IDcuODg3OTQgMi4xNzg1OCA3Ljg4Nzk0IDMuMDE1NjVDNy44ODc5NCAzLjI3NzcyIDcuOTU0NDUgMy41MjQyNSA4LjA3MTUyIDMuNzM5MjkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4="
                    alt="icon noti">
                </UChip>
                <!-- <button type="button" class="w-[25px] h-[40px] relative inline-flex items-center text-sm font-medium text-center text-white bg-primary rounded-lg">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxOSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjkuNDAzMzciIGN5PSIxNS43OTE5IiByeD0iOC40MDMzNyIgcnk9IjMuODE5NzEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI5LjQwMzA4IiBjeT0iMTQuMTMzNSIgcj0iMS44NTIzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE1LjkxNjkgMTAuNTc5NkwxNS40NTk3IDguNTczNDFDMTQuODE0MiA1Ljc0MDMzIDEyLjI5NDggMy43MzA0NyA5LjM4OTEyIDMuNzMwNDdWMy43MzA0N0M2LjQ5NjM5IDMuNzMwNDcgMy45ODQ3IDUuNzIyOCAzLjMyNjMyIDguNTM5NkwyLjEwNTQ3IDEzLjc2MjkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNjk2IDMuODA3ODVDMTAuODM3NiAzLjU3NzMzIDEwLjkxOTIgMy4zMDYwMyAxMC45MTkyIDMuMDE1NjVDMTAuOTE5MiAyLjE3ODU4IDEwLjI0MDcgMS41IDkuNDAzNTkgMS41QzguNTY2NTIgMS41IDcuODg3OTQgMi4xNzg1OCA3Ljg4Nzk0IDMuMDE1NjVDNy44ODc5NCAzLjI3NzcyIDcuOTU0NDUgMy41MjQyNSA4LjA3MTUyIDMuNzM5MjkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4="
                        alt="icon noti">
                      <span class="sr-only">Notifications</span>
                        <div class="absolute inline-flex items-center min-w-[18px] justify-center h-5 p-0.5 max-w-fit text-xs font-bold text-white bg-red-500 border-2 border-white rounded-md -top-[5px] -end-2 dark:border-gray-900">224445</div>
                      </button> -->

                <template #panel>
                  <div class="max-w-sm">
                    <div class="flex justify-between p-4 border-b border-custom-100">
                      <span class="font-[500] text-sm text-custom-800 dark:text-white tracking-tight">Notification</span>
                      <span class="font-[500] text-xs text-primary dark:text-[#8397f0] leading-5 tracking-tight cursor-pointer">Mark all as
                        read</span>
                    </div>
                    <ul class="max-h-96 overflow-y-scroll">
                      <li href="#">
                        <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                          <img src="~/assets/img/icon/notif-new-order.svg" alt="">
                          <div class="ml-4">
                            <h4 class="font-[600] text-sm tracking-tight color-custom-800 mb-2">New Order</h4>
                            <span class="font-[400] text-xs leading-5 tracking-tight text-custom">
                              noti.data.name ? noti.data.name : "" has ordered
                              noti.data.product_name , Order ID :
                              noti.data.ORDER_ID ? noti.data.ORDER_ID : ""
                            </span>
                          </div>
                        </div>
                      </li>
                      <li href="#">
                        <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                          <img src="~/assets/img/icon/notif-new-order.svg" alt="">
                          <div class="ml-4">
                            <h4 class="font-[600] text-sm tracking-tight color-custom-800 mb-2">New Order</h4>
                            <span class="font-[400] text-xs leading-5 tracking-tight text-custom">
                              noti.data.name ? noti.data.name : "" has ordered 60000000
                              noti.data.product_name , Order ID :
                              noti.data.ORDER_ID ? noti.data.ORDER_ID : ""
                            </span>
                          </div>
                        </div>
                      </li>
                      <li href="#">
                        <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                          <img src="~/assets/img/icon/notif-new-order.svg" alt="">
                          <div class="ml-4">
                            <h4 class="font-[600] text-sm tracking-tight color-custom-800 mb-2">New Order</h4>
                            <span class="font-[400] text-xs leading-5 tracking-tight text-custom">
                              noti.data.name ? noti.data.name : "" has ordered
                              noti.data.product_name , Order ID :
                              noti.data.ORDER_ID ? noti.data.ORDER_ID : ""
                            </span>
                          </div>
                        </div>
                      </li>
                      <li href="#">
                        <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                          <img src="~/assets/img/icon/notif-new-order.svg" alt="">
                          <div class="ml-4">
                            <h4 class="font-[600] text-sm tracking-tight color-custom-800 mb-2">New Payment</h4>
                            <span class="font-[400] text-xs leading-5 tracking-tight text-custom">
                              usere has ordered testprod, Order ID : 2312045296041
                            </span>
                          </div>
                        </div>
                      </li>
                      <li href="#">
                        <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                          <img src="~/assets/img/icon/notif-new-order.svg" alt="">
                          <div class="ml-4">
                            <h4 class="font-[600] text-sm tracking-tight color-custom-800 mb-2">New Payment</h4>
                            <span class="font-[400] text-xs leading-5 tracking-tight text-custom">
                              usere has ordered testprod, Order ID : 2312045296041 black===
                            </span>
                          </div>
                        </div>
                      </li>
                      <li href="#">
                        <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                          <img src="~/assets/img/icon/notif-new-order.svg" alt="">
                          <div class="ml-4">
                            <h4 class="font-[600] text-sm tracking-tight color-custom-800 mb-2">New Payment</h4>
                            <span class="font-[400] text-xs leading-5 tracking-tight text-custom">
                              New payment from noti.data.name ? noti.data.name : "" for orderId
                              noti.data.ORDER_ID ? noti.data.ORDER_ID : "" for product
                              noti.data.product_name ? noti.data.product_name : ""
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>
              </UPopover>
            </li>
            <div class="balance-box cursor-pointer">
              <!-- v-if='$store.state.authfack.user && $store.state.authfack.user.role !== "admin"' -->
              <div
                class="nav-item flex b-nav-dropdown dropdown notification-list topbar-dropdown balance pl-2 pr-2 price-section">
                <NuxtLink to="/settings/balance">
                  <div class="nav-link dropdown-toggle p-0 pr-1 flex text-white">
                    <img src="~/assets/img/icon/ic-balance-navbar.svg" alt="icon balance" class="mr-1">
                    <span>
                      <!-- {{ $t('settings.currency') }} {{ ($store.state.authfack.user && $store.state.authfack.user.adminBalance ? parseInt($store.state.authfack.user.adminBalance) : $store.state.authfack.user.balance ?
                    parseInt($store.state.authfack.user.balance) : 0) | g_number_format }} -->
                      IDR 0
                    </span>
                  </div>
                </NuxtLink>
                <UPopover mode="hover">
                  <!-- v-if='$store.state.authfack.user && $store.state.authfack.user.isReservedBalance' -->
                  <img class="icon-info" src="~/assets/img/icon/ic-information-black.svg" alt="">
                  <template #panel>
                    <span class="max-w-sm p-5 block">
                      $t('settings.reservedBalance')
                      $store.state.authfack.user ? parseInt($store.state.authfack.user.reservedBalance) : 0 |
                      g_number_format
                    </span>
                  </template>
                </UPopover>
              </div>
            </div>
            <li>
              <template>
                <UDropdown :items="items" >

                  <button
                    class="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                    <div class="mr-0 text-white">
                      <span class="pro-user-name ml-1 flex">
                        <img src="~/assets/img/icon/ic-profile-navbar.svg" alt="icon profile">
                        <span class="mx-1 hidden md:block">User</span>
                        <!-- {{ $store.state.authfack.user ? $store.state.authfack.user.name : "" }} -->
                        <img src="~/assets/img/icon/ic-arrow-white-bottom-18.svg" alt="" class="arrow">

                      </span>
                      <!-- <span class="profile-icon ml-1 flex md:hidden">
                      <img src="~/assets/img/icon/profile-dropdown.svg" alt="">
                      <img src="~/assets/img/icon/ic-arrow-white-bottom-18.svg" alt="" class="arrow">
                    </span> -->
                    </div>
                  </button>
                </UDropdown>
              </template>
            </li>
            <li class="sm:pr-4 md:pr-8 pr-1">
              <UToggle v-model="isDark" color="primary" />
            </li>
            <form>
              <select v-model="locale">
                <option value="en">en</option>
                <option value="id">id</option>
              </select>
            </form>
          </ul>
        </div>
      </UContainer>
    </nav>
  </header>
</template>