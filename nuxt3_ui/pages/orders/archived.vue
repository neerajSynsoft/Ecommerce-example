<script setup lang="ts">
const { t } = useI18n()
definePageMeta({
  middleware: 'auth'
})

useHead({
  title: `${ t("menu.archived")} | Mengantar App`,
})
</script>

<template>
  {{ $t("menu.archived") }} page
</template>