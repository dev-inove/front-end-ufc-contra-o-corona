<template>
    <div class="home">
        <Header />
        <Actions />
        <!-- <Productions /> -->
        <CallToAction />
        <Necessities />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Actions from '../components/Actions/Actions.vue'
// import Productions from '../components/Productions/Productions.vue'
import CallToAction from '../components/Call to Action/CallToAction.vue'
import Necessities from '../components/Necessities/Necessities.vue'
import Footer from '../components/Footer/Footer.vue'

export default {
    components: {
        Header,
        Actions,
        // Productions,
        CallToAction,
        Necessities,
        Footer
    }
}
</script>

<style></style>
