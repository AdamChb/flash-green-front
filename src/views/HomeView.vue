<template>
  <div>
    <HeroSection />
    <HowToUseSection />
    <CtaSection />
  </div>
</template>

<script>
import Header          from '@/components/Header.vue'
import HeroSection     from '@/components/HeroSection.vue'
import HowToUseSection from '@/components/HowToUseSection.vue'
import CtaSection      from '@/components/CtaSection.vue'

export default {
  name: 'HomeView',
  components: { Header, HeroSection, HowToUseSection, CtaSection }
}
</script>