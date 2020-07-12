<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <vue-cookie-accept-decline
                :ref="'myPanel1'"
                :elementId="'myPanel1'"
                :debug="false"
                :position="'bottom-left'"
                :type="'floating'"
                :disableDecline="false"
                :transitionName="'slideFromBottom'"
                @status="cookieStatus"
                @clickedAccept="cookieClickedAccept"
                @clickedDecline="cookieClickedDecline"
                @removedCookie="cookieRemovedCookie">

                <!-- Optional -->
                <div slot="message">
                Unsere Seite nutzt 🍪, um dir ein besseres Surferlebnis zu ermöglichen! <a href="/#/datenschutz" target="_blank">Erfahre mehr...</a>
                </div>

                <!-- Optional -->
                <div slot="declineContent">
                OPT OUT
                </div>

                <!-- Optional -->
                <div slot="acceptContent">
                OKAY!
                </div>
            </vue-cookie-accept-decline>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Realm Dash</h1>
                    <p class="lead text-white mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                    <!-- <img src="img/brand/apple.svg">
                    <img src="img/brand/google-play.svg"> -->
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <!-- <b-carousel-slide img-src="img/theme/img-3-579x406.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/img-3-579x406.png"></b-carousel-slide> -->
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
