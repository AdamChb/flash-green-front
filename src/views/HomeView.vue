<template>
  <div>
    <HeroSection />
    <HowToUseSection />
    <CtaSection />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import HowToUseSection from "@/components/HowToUseSection.vue";
import CtaSection from "@/components/CtaSection.vue";

export default {
  name: "HomeView",
  components: { HeroSection, HowToUseSection, CtaSection },
};
</script>
