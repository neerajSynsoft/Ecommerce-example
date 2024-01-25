<script setup lang="ts">
import productInit from '~/constants/productInit';
import formInit from '~/constants/formInit';
import { config } from "~/config";
const { t } = useI18n();

definePageMeta({
  middleware: 'auth',
  layout: false,
})
useHead({
  title: `Reports | Mengantar App`,
})
const isOpen = ref(false)
const bumpModal = ref(false)
const editBump = ref(false)
const activeItem = ref('Add Product')
const isNewProduct = ref(true)
const enableProductOptions = ref(true)
const isProductOptionsEnable = ref("Enable")
const wholeSaleDataList = ref([{ count: "", price: "" }])
const items = ['Add Product', 'Checkout Page', 'Success Page']
const payload = ref<any>({ ...productInit, ...formInit })
const statusOptions = [
  {
    label: t("common.draft"),
    value: "draft",
  },
  {
    label: t("common.active"),
    value: "active",
  },
];
const stockOptions = [
  {
    label: 'Out of Stock',
    value: "Out of Stock",
  },
  {
    label: 'In Stock',
    value: "In Stock",
  },
];
watch(() => enableProductOptions.value, (val) => {
  payload.value.enableProductOptions = val;
  payload.value.type = val ? "variable" : "simple";
  isProductOptionsEnable.value = val ? "Disable" : "Enable";
  if (val) {
    // payload.value.isBump = false;
    payload.value.enableSplitPrice = false;
  }
  if (!payload.value._id) {
    // it should only work in add new product
    let isPriceAdded = false;
    if (payload.value.enableProductOptions) {
      if (
        payload.value.variablePrices &&
        payload.value.variablePrices.length > 0
      ) {
        payload.value.variablePrices.map((val: any) => {
          if (val.price && val.price > 0) {
            isPriceAdded = true;
          }
        });
      }
    } else {
      if (payload.value.price && payload.value.price > 0) {
        isPriceAdded = true;
      }
    }
    payload.value.orderSummary = isPriceAdded;
  }
})

const handelQuit = () => {
  isOpen.value = true;
}
const handelConfirm = () => {
  navigateTo('/orders')
  isOpen.value = false;
}
const handelAbort = () => {
  isOpen.value = false;
}
const handelStep = (step: string) => {
  activeItem.value = step;
}
const automaticFillUrl = () => {
  if (!payload.value.url)
    payload.value.url = payload.value.name
}
const increaseValue = (type: string, index: number) => {
  if (type == "RegularPrice") {
    payload.value.price =
      +(payload.value.price ? payload.value.price : 0) + 1;
  } else if (type == 'SKU') {
    payload.value.SKU = parseInt(payload.value.SKU) + 1;
  } else if (type == "StockQty") {
    payload.value.available =
      +(payload.value.available ? payload.value.available : 0) + 1;
  } else if (type == "SalePrice") {
    payload.value.priceCompare =
      +(payload.value.priceCompare ? payload.value.priceCompare : 0) +
      1;
  } else if (type == "CostPerItem") {
    payload.value.costPerItem = payload.value.costPerItem + 1;
  } else if (type == "wholesaleQty") {
    payload.value.whosaleData[index].count = payload.value.whosaleData[index]
      .count
      ? payload.value.whosaleData[index].count
      : 0;
    payload.value.whosaleData[index].count =
      +(payload.value.whosaleData[index].count) + 1;
  } else if (type == "wholesalePrice") {
    payload.value.whosaleData[index].price = payload.value.whosaleData[index]
      .price
      ? payload.value.whosaleData[index].price
      : 0;
    payload.value.whosaleData[index].price =
      +(payload.value.whosaleData[index].price) + 1;
  } else if (type == "BumpPrice") {
    payload.value.bumpPrice =
      +(payload.value.bumpPrice ? payload.value.bumpPrice : 0) + 1;
  } else if (type == "BumpWeight") {
    payload.value.bumpWeight =
      +(payload.value.bumpWeight ? payload.value.bumpWeight : 0) + 1;
  } else if (type == "splitBitPrice") {
    payload.value.splitPriceData[index].bidPrice =
      +(payload.value.splitPriceData[index].bidPrice) + 1;
  } else if (type == "splitSalePrice") {
    payload.value.splitPriceData[index].salePrice =
      +(payload.value.splitPriceData[index].salePrice) + 1;
  }
}
const decreaseValue = (type: string, index: number) => {
  if (type == "RegularPrice" && payload.value.price > 0) {
    payload.value.price = parseInt(payload.value.price) - 1;
    // } else if(type == 'SKU' && payload.value.SKU > 0) {
    //   payload.value.SKU = parseInt(payload.value.SKU) - 1;
  } else if (type == "StockQty" && payload.value.available > 0) {
    payload.value.available = parseInt(payload.value.available) - 1;
  } else if (type == "SalePrice" && payload.value.priceCompare > 0) {
    payload.value.priceCompare = parseInt(payload.value.priceCompare) - 1;
  } else if (type == "CostPerItem" && payload.value.costPerItem > 0) {
    payload.value.costPerItem = parseInt(payload.value.costPerItem) - 1;
  } else if (
    type == "wholesaleQty" &&
    payload.value.whosaleData[index].count > 0
  ) {
    payload.value.whosaleData[index].count =
      parseInt(payload.value.whosaleData[index].count) - 1;
  } else if (
    type == "wholesalePrice" &&
    payload.value.whosaleData[index].price > 0
  ) {
    payload.value.whosaleData[index].price =
      parseInt(payload.value.whosaleData[index].price) - 1;
  } else if (type == "BumpPrice" && payload.value.bumpPrice > 0) {
    payload.value.bumpPrice = parseInt(payload.value.bumpPrice) - 1;
  } else if (type == "BumpWeight" && payload.value.bumpWeight > 0) {
    payload.value.bumpWeight = parseInt(payload.value.bumpWeight) - 1;
  } else if (
    type == "splitBitPrice" &&
    payload.value.splitPriceData[index].bidPrice > 0
  ) {
    payload.value.splitPriceData[index].bidPrice =
      parseInt(payload.value.splitPriceData[index].bidPrice) - 1;
  } else if (
    type == "splitSalePrice" &&
    payload.value.splitPriceData[index].salePrice > 0
  ) {
    payload.value.splitPriceData[index].salePrice =
      parseInt(payload.value.splitPriceData[index].salePrice) - 1;
  }
}
const addWhosaleData = () => {
  wholeSaleDataList.value.push({ count: "", price: "" });
  payload.value.whosaleData = payload.value.whosaleData.concat(
    JSON.parse(JSON.stringify(wholeSaleDataList.value))
  );
  wholeSaleDataList.value = [];
}
const removeWhosale = (num: number) => {
  payload.value.whosaleData.splice(num, 1);
  // for (let i in [0, 1, 2, 3, 4]) {
  //   if (i >= num) {
  //     payload.value.whosaleData[i] = { count: "", price: "", priceText: "" };
  //   }
  // }
  // this.whosaleValidation();
}
</script>

<template>
  <div class="w-full max-w-screen-2xl m-auto">
    <header class="fixed top-0 w-full max-w-screen-2xl m-auto z-10">
      <div class="h-16 bg-blue-600 flex justify-between items-center">
        <img src="~/assets/images/formulir-logo-light.png" :class="`h-[20px] w-[150px] ml-3 cursor-pointer`" alt="Logo"
          @click="handelQuit" />
        <div>
          <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
            <li v-for="(item, index) in items" @click="handelStep(item)"
              :class="`flex items-center ${item === activeItem ? 'text-white' : 'text-[#97A3DD]'} cursor-pointer space-x-2.5 rtl:space-x-reverse`">
              <UIcon v-if="index > 0" name="i-heroicons-chevron-right-solid" class="bg-white mr-2" />
              <span
                :class="`flex items-center justify-center w-8 h-8 border ${item === activeItem ? 'border-white' : 'border-[#97A3DD]'} rounded-full shrink-0`">
                {{ index + 1 }}
              </span>
              <span class="items-center flex gap-2">
                <h3 class="font-sm leading-tight">{{ item }}</h3>
              </span>
            </li>
          </ol>
        </div>
        <UIcon name="i-heroicons-x-mark-solid" class="mr-3 bg-white cursor-pointer" @click="handelQuit" />
      </div>
    </header>

    <section class="relative w-full max-w-screen-2xl m-auto mt-16 flex bg-blue-50">
      <div class="w-[50%] min-h-full p-7">
        <div class="section_title mt-0 mb-7 add-new-product__header-title"
          :class="payload.formOption == 'single' && !isNewProduct ? 'add-new-product__header-title--with-action' : ''">
          <div v-if="isNewProduct"
            class="text-2xl font-medium leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
            {{ $t("common.productshipping") }}
          </div>
          <div v-else class="step-title product-title-shrink">
            <!-- <template v-if="payload.name">
                  <template v-if="truncatedText(payload.name, false)">
                    <vs-tooltip>
                      {{truncatedText(payload.name)}}
                      <template #tooltip>
                        {{payload.name}}
                      </template>
                    </vs-tooltip>
                  </template>
                  <template v-else>{{ payload.name }}</template>
                </template> -->
          </div>
          <div v-if="payload.formOption == 'single' && !isNewProduct" class="more-action">
            <b-dropdown id="dropdown-dropleft" class="pp-btn-dots pp-dropdown" dropleft variant="link"
              toggle-class="text-decoration-none" no-caret>
              <template #button-content>
                <div class="pp-button-white--fill">
                  <span>More Action</span>
                  <img src="~/assets/img/icon/ic-arrow-dropdown.svg" />
                </div>
              </template>
              <!-- <b-dropdown-item>
                    <div @click="openFollowupModal">
                      <img
                        class="mr-1"
                        :src="require('~/assets/icons/ic-checkout-white.svg')"
                      />
                      <span>{{ $t("common.FollowUpText") }}</span>
                    </div>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <div @click="() => (notificationsModal = true)">
                      <img
                        class="mr-1"
                        :src="
                          require('~/assets/icons/ic-notifications-white.svg')
                        "
                      />
                      <span>{{ $t("common.Notifications") }}</span>
                    </div>
                  </b-dropdown-item> -->
              <!-- <b-dropdown-item>
                    <div @click="() => (deleteModal = true)">
                      <img
                        class="mr-1"
                        :src="require('~/assets/icons/ic-delete-white.svg')"
                      />
                      <span>{{ $t("common.delete") }}</span>
                    </div>
                  </b-dropdown-item> -->
            </b-dropdown>
          </div>
        </div>
        <div class="add-new-product-step1__container">
          <div class="add-new-product-step1__section-group">
            <!-- FORM OPTION SINGLE OR MULTIPLE FORMS -->
            <div id="add-new-product-step1__type-form" v-if="isNewProduct" class="flex flex-col gap-5">
              <div class="add-new-product__card-container p-4 bg-white rounded-md">
                <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                  <img src="~/assets/img/icon/formOption.svg" />
                  <p class="text-[#203551] font-medium text-md">{{ $t("common.formOption") }}</p>
                </div>
                <div class="add-new-product-step1__type-form__content">
                  <SwitchGreenSelected v-model:value="payload.formOption" :options="[
                    { id: 'single', text: 'Single Form' },
                    { id: 'multiple', text: 'Multiple Forms' },
                  ]" :full="true" :className="'maxWidth'" />
                  <div class="flex gap-4 items-center text-xs mt-2">
                    <p class="text-xs text-gray-400 dark:text-white w-full px-2">
                      {{ $t("product.createSingleForm") }}
                    </p>
                    <p class="text-xs text-gray-400 dark:text-white w-full px-2">
                      {{ $t("product.createMultiForm") }}
                    </p>
                  </div>

                </div>
              </div>
              <!-- IMAGES -->
              <div id='upload-product-images' class="card section_card p-4 bg-white rounded-md">
                <div class="card-body">
                  <div class="card_wrapper">
                    <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                      <img src="~/assets/img/icon/Images.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("common.images") }}</p>
                    </div>
                    <div class="text-xs text-gray-400 dark:text-white mb-5">
                      {{ $t("common.Upload10") }}
                    </div>
                    <div class="upload_wrapper w-100" style="row-gap: 10px">
                      <draggable v-model:files="payload.images" :maxAllowedFiles="10" />
                    </div>
                    <div class="text-xs text-gray-400 dark:text-white mt-5">
                      {{ $t("common.YouCan") }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- OPTIONS -->
              <div id="add-new-product-step1__options" class="card section_card p-4 bg-white rounded-md">
                <div class="card-body">
                  <div class="card_wrapper">
                    <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                      <img src="~/assets/img/icon/Options.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("common.options") }}</p>
                    </div>
                  </div>
                  <!-- Name -->
                  <div class="w-full">
                    <label class="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                      {{ $t("common.ProductName") }} &ensp;
                      <span class="text-xs text-gray-400 dark:text-white"> {{ $t("common.willAppear") }}</span>
                    </label>
                    <div class="flex mt-1 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <UInput type="text" size="md" class="text-sm block w-full" variant="none" v-model="payload.name"
                        v-on:blur="automaticFillUrl()" :placeholder="$t('common.enterProductName')" />
                    </div>
                    <!-- {{
                        $t("common.name") +
                        " " +
                        $t("validation.required")
                        $t("validation.namelength")
                      }} -->
                  </div>

                  <!-- URL -->
                  <div class="w-full my-5">
                    <label class="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                      {{ $t("common.url") }}
                    </label>
                    <div class="flex mt-1 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <div class="flex items-center justify-center bg-blue-50 w-10 h-auto border-r-gray-300
                            dark:border-r-gray-700 border-r rounded-s-lg">
                        <img src="~/assets/img/icon/tilted_line.png" />
                      </div>
                      <UInput type="text" size="md" class="text-sm block w-full" variant="none"
                        placeholder="Enter page URL" v-model="payload.url" />
                    </div>
                    <!--{{ $t("validation.checkoutUrlAlreadyExist") }}
                          {{ $t("validation.namelength") }} -->
                    <!-- <span class="text-url">{{ domainText }}</span> -->
                  </div>

                  <div class="d-flex flex-column category-status gap-5">
                    <!-- Category -->
                    <div class="w-100">
                      <CategoryInput v-model:value="payload" />
                    </div>

                    <!-- Status -->
                    <div class="w-100">
                      <div class="input-label title-font flex items-center mb-3">
                        <div>
                          <label class="title-font sub-title">{{
                            $t("common.status")
                          }}</label>
                        </div>
                        <div class="h-[18px]">
                          <UPopover mode="hover" :popper="{ offsetDistance: 10, placement: 'top' }">
                            <img class="ml-1 pointer" src="~/assets/img/icon/Hint.svg" />
                            <template #panel>
                              <div class="p-3 bg-gray-600 text-white rounded-md max-w-sm">
                                <span class="">
                                  {{ $t("product.activeProductOrderMSG") }}<br />
                                  {{ $t("product.draftProductOrderMSG") }}</span>
                              </div>
                            </template>
                          </UPopover>
                        </div>
                      </div>
                      <USelectMenu class="w-full" size="md" v-model="payload.status" :options="statusOptions"
                        placeholder="Select status" value-attribute="value" option-attribute="label" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- PRICING -->
              <div id="add-new-product-step1__pricing" class="card section_card p-4 bg-white rounded-md">
                <div class="card-body">
                  <div class="card_wrapper">
                    <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                      <img src="~/assets/img/icon/Pricing.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("common.pricing") }}</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <!-- Price and sale price -->
                    <div class="col-span-1">
                      <InputPrice v-model:value="payload.price" :label="$t('common.regularPrice')" placeholder="0"
                        :increaseValue="increaseValue" :decreaseValue="decreaseValue" type="RegularPrice"
                        :iconText="true" />
                    </div>
                    <div class="col-span-1">
                      <InputPrice v-model:value="payload.priceCompare" :label="$t('common.salePrice')" placeholder="0"
                        :increaseValue="increaseValue" :decreaseValue="decreaseValue" type="SalePrice" :iconText="true" />
                    </div>
                    <div class="col-span-1">
                      <InputPrice v-model:value="payload.costPerItem" :label="$t('common.costPerItem')" placeholder="0"
                        :icon="true" :tooltipText="$t('hint.wontSee')" type="CostPerItem" :increaseValue="increaseValue"
                        :decreaseValue="decreaseValue" :iconText="true" />
                    </div>
                    <!-- Wholse sale price -->
                    <div class="flex items-center text-primary dark:text-white col-span-2"
                      v-if="payload.whosale == false">
                      <span @click="() => (payload.whosale = true)" class="flex items-center gap-2 cursor-pointer">
                        <img style="width: 20px" src="~/assets/img/icon/bluePlus.svg" />
                        {{ $t("text.AddWholesalePrices") }}
                      </span>
                    </div>
                    <div class="flex items-center dark:text-white text-primary col-span-2" v-else>
                      <span @click="() => (payload.whosale = false)"
                        class="remove_wholeSaleData flex items-center gap-2 cursor-pointer">
                        <img style="width: 20px" src="~/assets/img/icon/blueMinus.svg" />
                        {{ $t("text.RemoveWholesalePrices") }}
                      </span>

                    </div>

                    <!-- Wholse sale price -->
                    <div v-if="payload.whosale" class="col-span-2">
                      <div class="flex w-full text-sm font-medium text-gray-900 dark:text-white">
                        <div class="w-1/2 pl-5">Minimum Buy</div>
                        <div class="w-1/2 pl-4">Price to Be</div>
                      </div>
                      <div v-for="(data, i) in payload.whosaleData" v-bind:key="i" class="price-field-wrapper flex mb-3">
                        <img src="~/assets/img/bigger-than-equal.svg" alt="icon" />
                        <InputPrice v-model:value="payload.whosaleData[i]['count']" placeholder="0" type="wholesaleQty"
                          :index="i" :increaseValue="increaseValue" :decreaseValue="decreaseValue" />
                        <img src="~/assets/img/equal.svg" alt="icon" />
                        <InputPrice v-model:value="payload.whosaleData[i]['price']" placeholder="0" type="wholesalePrice"
                          :index="i" :iconText="true" :increaseValue="increaseValue" :decreaseValue="decreaseValue" />
                        <img src="~/assets/img/close.svg" alt="" @click="removeWhosale(i)" class="cursor-pointer" />
                      </div>
                      <div class="flex items-center text-primary dark:text-white">
                        <span @click="addWhosaleData()" class="flex items-center gap-2 cursor-pointer">
                          <img style="width: 20px" src="~/assets/img/icon/bluePlus.svg" />
                          {{ $t("text.AddWholesalePrices") }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- INVENTORY -->
              <div id="add-new-product-step1__iventory" class="card section_card p-4 bg-white rounded-md">
                <div class="card-body">
                  <div class="card_wrapper">
                    <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                      <img src="~/assets/img/icon/Inventory.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("common.inventory") }}</p>
                    </div>
                  </div>
                  <div class="w-full">
                    <label class="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                      {{ $t("common.SKU") }} {{ $t("common.SKU2") }}
                    </label>
                    <div class="flex mt-1 border border-gray-300 dark:border-gray-700 rounded-lg">
                      <UInput type="text" size="md" class="text-sm block w-full" variant="none" v-model="payload.SKU" />
                    </div>
                  </div>
                  <div class="flex gap-4 mt-3">
                    <div class="track-quality">
                      <UCheckbox color="primary" :label="$t('common.TrackQuantity')" v-model="payload.trackQuantity" />
                    </div>
                    <div class="continue-selling">
                      <UCheckbox color="primary" :label="$t('common.ContinueStock')" v-model="payload.continueSelling"
                        :disabled="!payload.trackQuantity" />
                    </div>
                  </div>
                  <div v-if="payload.trackQuantity" class="parent-contentinventroy">
                    <div class="flex gap-4 mt-5 mb-0">
                      <div class="w-full">
                        <label class="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                          {{ $t("common.stockStatus") }}
                        </label>
                        <USelectMenu class="w-full mt-1" size="md" v-model="payload.stockStatus" :options="stockOptions"
                          placeholder="Select status" value-attribute="value" option-attribute="label" />
                      </div>
                      <div class="w-full">
                        <InputPrice v-model:value="payload.available" :label="$t('common.stockQuantity')" placeholder="0"
                          :increaseValue="increaseValue" :decreaseValue="decreaseValue" type="StockQty" />
                        <!-- <div
                        v-if="
                          submitted &&
                          $v.payload.available &&
                          !$v.payload.available.stockQuantityValidator
                        "
                        class="invalid-feedback-custom"
                      >
                        {{ $t("Please enter a valid integer number") }}
                      </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- PRODUCT OPTIONS -->
              <div id="add-new-product-step1__product-options" class="card section_card p-4 bg-white rounded-md">
                <div class="card-body">
                  <div
                    class="add-new-product-step1__product-options__header flex justify-between border-b border-blue-100 mb-4 pb-4">
                    <div class="flex items-center gap-4 ">
                      <img src="~/assets/img/icon/product-option.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("common.productOptions") }}</p>
                    </div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <div class="enable-option-title">
                        {{ isProductOptionsEnable }}
                        <span>{{ $t("common.productOptions") }}</span>
                      </div>
                      <div class="align-items-center">
                        <UToggle size="md" v-model="enableProductOptions" />
                      </div>
                    </div>
                  </div>
                  <div class="add-new-product-step1__product-options__content" v-if="enableProductOptions">
                    <div class="title-font sub-title2 hallow product-option-hallow">
                      <div class="flex justify-between align-items-center">
                        <div class="flex flex-wrap gap-4 text-sm font-medium text-gray-900 dark:text-white">
                          <UCheckbox v-model="payload.multiplyVariations" name="multiplyVariations"
                            :label="$t('text.enablemultiplevariations')"
                            :disabled="payload.variablePrices.length === 0 ? true : false" />
                          <UCheckbox v-model="payload.cartOrder" name="cartOrder" :label="$t('text.cartOrder')"
                            :disabled="payload.multiplyVariations ? false : true" />
                          <UCheckbox v-model="payload.addQuantity" name="addQuantity" :label="$t('text.addQuantity')" />
                        </div>

                        <UPopover :popper="{ placement: 'right', offsetDistance: 10 }">
                          <img src="~/assets/img/icon/info-question.svg" alt="" />

                          <template #panel>
                            <div class="max-w-sm bg-blue-600">
                              <!-- <div class="flex justify-end p-3 border-b border-custom-100">
                                      <span class="cursor-pointer">
                                        <img
                                        src="~/assets/img/icon/close-white.svg"
                                        alt=""/>
                                      </span>
                                    </div> -->
                              <ul class="max-h-96 overflow-auto">
                                <li>
                                  <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                                    <img src="~/assets/img/icon/multi-order-info.svg" alt="">
                                    <div class="ml-4">
                                      <h4 class="font-[600] text-sm tracking-tight text-white mb-2">{{
                                        $t("text.enablemultiplevariations") }}</h4>
                                      <span class="font-[400] text-xs leading-5 tracking-tight text-slate-300">
                                        {{ $t("text.multipleVariationsInfo") }}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="py-4 mx-4 flex items-start border-b border-custom-100">
                                    <img src="~/assets/img/icon/cart-info.svg" alt="">
                                    <div class="ml-4">
                                      <h4 class="font-[600] text-sm tracking-tight text-white mb-2">{{
                                        $t("text.cartOrder") }}</h4>
                                      <span class="font-[400] text-xs leading-5 tracking-tight text-slate-300">
                                        {{ $t("text.cartOrderInfo") }}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="py-4 mx-4 flex items-start border-custom-100">
                                    <img src="~/assets/img/icon/quantity-info.svg" alt="">
                                    <div class="ml-4">
                                      <h4 class="font-[600] text-sm tracking-tight text-white mb-2">{{
                                        $t("text.addQuantity") }}</h4>
                                      <span class="font-[400] text-xs leading-5 tracking-tight text-slate-300">
                                        {{ $t("text.addQuantityInfo") }}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </template>
                        </UPopover>
                      </div>
                      <div class="mt-5 flex gap-4 items-center">
                        <UCheckbox v-model="payload.marketPlaceStyle" name="marketPlaceStyle"
                          :label="$t('text.marketplaceStyle')" />
                      </div>
                    </div>
                    <!-- <div class="product-attributes">
                        <draggable
                          v-model="newAttribute"
                          group="newAttribute"
                          @start="onStartDragP"
                          @end="onEndDragP"
                          style="cursor: -webkit-grab; cursor: grab"
                        >
                          <div :key="i" v-for="(attr, i) in newAttribute">
                            <div v-if="attr.isSave && attr.value.length">
                              <div
                                style="
                                  border-bottom: 1px solid #e5e8eb;
                                  margin: 0px 0 20px 0;
                                  padding-bottom: 20px;
                                "
                              >
                                <div>
                                  <div
                                    class="flex"
                                    :class="i != 0 ? 'justify-between' : ''"
                                  >
                                    <label class="title-font sub-title2">{{
                                      attr.name
                                    }}</label>
                                    <div
                                      v-if="attr.isMainVariation"
                                      class="mb-10 ml-10 d-flex align-items-center fw-500 fs-14"
                                      style="color: #203551"
                                    >
                                      <img
                                        src="~/assets/img/icon/verify.svg"
                                        class="mr-5px"
                                      />
                                      {{ $t("common.mainVariation") }}
                                    </div>
                                    <div
                                      v-else
                                      style="color: #2e47ba"
                                      class="fs-13 fw-500 ml-10 pointer"
                                      @click="makeMainVariation(i)"
                                    >
                                      {{ $t("common.makeMainVariation") }}
                                    </div>
                                  </div>
                                  <div class="flex justify-between ukuran">
                                    <div class="sixDots">
                                      <img
                                        src="~/assets/img/icon/sixDots.svg"
                                      />
                                    </div>
                                    <div
                                      class="flex justify-start align-items-center ukuran-flex"
                                    >
                                      <div
                                        :key="index"
                                        v-for="(elem, index) in attr.value"
                                        class="product-options-value overflow-wrap--anywhere"
                                      >
                                        <div v-if="elem !== ''">{{ elem }}</div>
                                      </div>
                                    </div>
                                    <div
                                      class="edit-variation"
                                      @click="editVar(attr)"
                                    >
                                      <img
                                        src="~/assets/img/icon/edit-grey.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div v-else>
                              <label
                                class="title-font sub-title2 option-marign-left"
                                style="margin-left: 25px"
                              >
                                {{ $t("common.optionName") }}
                              </label>
                              <ul
                                style="
                                  margin: 0;
                                  list-style-type: none;
                                  padding: 0;
                                "
                              >
                                <li>
                                  <div class="flex align-items-center">
                                    <div>
                                      <img
                                        src="~/assets/img/icon/sixDots.svg"
                                      />
                                    </div>
                                    <div
                                      style="
                                        max-width: 550px;
                                        width: 100%;
                                        margin: 0px 15px;
                                        margin: 0px 15px;
                                      "
                                      class="max-width-option-values"
                                    >
                                      <div>
                                        <b-dropdown
                                          class="pp-dropdown pp-btn pp-btn-filter-dropdown product-status-dropdown product-category-dropdown"
                                          id="variantDropdown"
                                          toggle-class="text-decoration-none"
                                          ref="variantDropdown"
                                        >
                                          <template #button-content>
                                            <div
                                              class="flex items-center w-100 align-items-center justify-content-between"
                                            >
                                              <input
                                                v-model="newAttribute[i].name"
                                                type="text"
                                                placeholder="Input Or Select Attributes"
                                                readonly
                                                style="
                                                  border: none;
                                                  outline: none;
                                                  padding: 0;
                                                  margin: 0;
                                                  font-size: 13px;
                                                  font-weight: 400;
                                                  line-height: 18px;
                                                  letter-spacing: 0.02em;
                                                  color: #6c7e95;
                                                  text-transform: capitalize;
                                                "
                                              />

                                              <i class="vs-icon-arrow"></i>
                                            </div>
                                          </template>
                                          <div
                                            class="d-flex gap-20px flex-column overflow-auto"
                                          >
                                          <vs-radio
                                            v-for="(elem, ind) in VariationsPriceOptions"
                                            v-bind:key="ind"
                                            v-model="newAttribute[i].name"
                                            :taggable="true"
                                            :val="elem.value"
                                          >
                                            <div
                                              v-if="
                                                newAttribute[i].name !=
                                                elem.value
                                              "
                                              class="d-flex align-items-center justify-content-between"
                                              @click="closevariantdropdown()"
                                            >
                                              {{elem.name}}
                                            </div>
                                            <div
                                              v-if="
                                                newAttribute[i].name ==
                                                elem.value
                                              "
                                              class="sip-active d-flex align-items-center justify-content-between"
                                              @click="closevariantdropdown()"
                                            >
                                              {{elem.name}}
                                              <img
                                                src="~/assets/img/icon/checked-silver.svg"
                                                alt=""
                                              />
                                            </div>
                                          </vs-radio>
                                            
                                          </div>
                                        </b-dropdown>
                                      </div>
                                    </div>
                                    <div class="delete-attribute">
                                      <img
                                        class="pointer"
                                        @click="removeAttr(i)"
                                        src="~/assets/img/icon/Delete-grey.svg"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    style="
                                      padding: 20px 0 0 0;
                                      margin-left: 25px;
                                    "
                                    class="Product-Options"
                                  >
                                    <label class="title-font sub-title2">{{
                                      $t("common.optionValues")
                                    }}</label>
                                  </div>
                                  <ul
                                    v-for="(val, k) in attr.value"
                                    v-bind:key="k"
                                    style="
                                      margin: 0 0 15px;
                                      list-style-type: none;
                                      padding: 0 0 0 0px;
                                    "
                                  >
                                    <li>
                                      <div class="flex align-items-center">
                                        <div>
                                          <img
                                            src="~/assets/img/icon/sixDots.svg"
                                          />
                                        </div>
                                        <div
                                          style="
                                            max-width: 550px;
                                            width: 100%;
                                            margin: 0px 15px;
                                          "
                                          class="max-width-option-values"
                                        >
                                          <vs-input
                                            :maxLength="100"
                                            type="text"
                                            class="vs-form-control attr-val-input"
                                            :placeholder="
                                              attr.name == 'Ukuran'
                                                ? 'Medium'
                                                : attr.name == 'Warna'
                                                ? 'Hitam'
                                                : attr.name == 'Material'
                                                ? 'Karet'
                                                : attr.name == 'Tipe'
                                                ? 'Klasik'
                                                : 'Input Option'
                                            "
                                            v-model="attr.value[k]"
                                            :ref="'options' + k"
                                            @change="
                                              attr.value[
                                                attr.value.length - 1
                                              ] != ''
                                                ? addMoreOption(i, k)
                                                : ''
                                            "
                                          >
                                          </vs-input>
                                        </div>
                                        <div v-if="k !== attr.value.length - 1">
                                          <img
                                            class="pointer"
                                            @click="removeSubAttr(i, k)"
                                            src="~/assets/img/icon/Delete-grey.svg"
                                          />
                                        </div>
                                        <div
                                          v-else
                                          class="add-new-product-step1__product-options__option-values__delete"
                                        ></div>
                                      </div>
                                    </li>
                                  </ul>
                                  <div class="parent-option-value-done-button">
                                    <button
                                      :disabled="
                                        attr.name === '' || attr.value == ''
                                      "
                                      @click="saveAttributes(i)"
                                      type="button"
                                      class="pp-button-blue--border"
                                    >
                                      {{ $t("common.done") }}
                                    </button>

                                    <div
                                      v-if="submitted && enableProductOptions && payload.attributes.length == 0" 
                                      class="invalid-feedback-custom"
                                    >
                                      {{
                                        $t("common.productOptions") +
                                        " " +
                                        $t("validation.required")
                                      }}
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </draggable>
                        <div
                          class="btn-st add-another-option-btn"
                          @click="addNewAttributes()"
                        >
                          <img
                            src="~/assets/img/icon/bluePlus.svg"
                            style="width: 20px !important"
                          />{{ $t("common.addOption") }}
                        </div>
                      </div> -->
                  </div>

                </div>
              </div>

              <!-- OTHERS BUMP -->
              <div id="add-new-product-step1__others-bump" class="card section_card p-4 bg-white rounded-md">
                <div class="card-body">
                  <div class="card_wrapper">
                    <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                      <img src="~/assets/img/icon/Others_block.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("menu.others") }}</p>
                    </div>
                  </div>
                  <div class="card_wrapper">
                    <div class="w-100">
                      <div class="input-label mb-2">
                        <div class="font-bold">Bump</div>
                      </div>
                    </div>
                    <div :class="`form-group pb-3 ${payload.isBump && 'border-b border-blue-100'}`">
                      <div>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-3">
                            <img src="~/assets/img/icon/bump-illus.svg" />
                            <label class="text-sm font-medium text-gray-900 dark:text-white">
                              {{ $t("common.isBump") }}
                            </label>
                            <UToggle size="md" v-model="payload.isBump" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="payload.isBump">
                      <div>
                        <div v-if="payload.bumpArray.length >= 3">
                          <div class="flex items-center">
                            <img class="mr-10" :src="require('~/assets/img/icon/blue_info.svg')
                              " />
                            <span class="bump-warn-text">{{
                              $t("text.maxBumpWarn")
                            }}</span>
                          </div>
                        </div>
                        <div v-else>
                          <div
                            class="addBump pt-3 pb-2 custom-disable flex items-center gap-3 text-sm font-medium text-primary dark:text-white cursor-pointer"
                            @click="() => {
                                  editBump = false;
                                  bumpModal = true;
                                }
                                ">
                            <span class="">
                              <img style="width: 20px" src="~/assets/img/icon/bluePlus.svg" />
                            </span>
                            {{ $t("text.addBumpOrder") }}
                          </div>
                          <div class="pl-7 text-sm text-gray-500 dark:text-white">{{ $t("text.maxBump") }}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- bump modal  -->
                  <UModal v-model="bumpModal" prevent-close :overlay="false">
                    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                      <template #header>
                        <div class="flex items-center justify-between">
                          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Modal
                          </h3>
                          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="bumpModal = false" />
                        </div>
                      </template>

                      <Placeholder class="h-32" />
                    </UCard>
                  </UModal>

                  
                </div>
              </div>

              <!-- SECURITY -->
              <div id="add-new-product-step1__others-bump" class="card section_card p-4 bg-white rounded-md">
                <div class="card-body">
                  <div class="card_wrapper">
                    <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                      <img src="~/assets/img/icon/captcha-settings-icon.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("common.security") }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="input-label mb-2">
                        <div class="font-medium">{{ $t("text.enableCaptcha") }}</div>
                        <p class="text-gray-400 text-sm max-w-[420px]">{{ $t("text.showCaptchaMsg") }}</p>
                      </div>
                      <UToggle size="md" v-model="payload.isCaptchaEnable" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Assign Product To -->
              <div id="add-new-product-step1__others-bump" class=" p-4 bg-white rounded-md">
                    <div class="flex items-center gap-4 border-b border-blue-100 mb-4 pb-4">
                      <img src="~/assets/img/icon/assignTo.svg" />
                      <p class="text-[#203551] font-medium text-md">{{ $t("common.AssignProductto") }}</p>
                    </div>
                    <div> 
                      <Placeholder class="h-48" />
                      <!-- <assignation v-model="payload"  /> -->
                    </div>
              </div>

            </div>
          </div>


        </div>
      </div>
      <div
        class="p-7 overflow-y-auto left-[50%] right-0 border-l border-[#bfcee0] fixed max-h-[calc(100%-65px)] w-[50%] max-w-[768px]">
        fghrdh
      </div>

    </section>
    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800 text-center' }">
        <h3 class="text-md font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
          {{ $t('common.leave') }}</h3>
        <div class="w-full flex gap-6 justify-center px-4 pb-3 pt-5">
          <UButton class="px-5 py-2 rounded-md" @click="handelAbort">
            Cancel
          </UButton>
          <UButton class="px-5 py-2 rounded-md" @click="handelConfirm">
            Yes
          </UButton>
        </div>
      </UCard>
    </UModal>
  </div>
</template>


