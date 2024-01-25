<script setup lang="ts">
const { t } = useI18n()
definePageMeta({
  middleware: 'auth'
})
useHead({
  title: `${t("menu.abandoned")} | Mengantar App`,
})

</script>
<template>
  {{ $t("menu.abandoned") }} page
</template>