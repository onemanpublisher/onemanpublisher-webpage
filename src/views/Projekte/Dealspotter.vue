<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
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
                    {{ $t('global_cookie_notice') }} <a href="/#/datenschutz" target="_blank">{{ $t('global_cookie_more') }}</a>
                </div>

                <!-- Optional -->
                <div slot="declineContent">
                    {{ $t('global_cookie_optout') }}
                </div>

                <!-- Optional -->
                <div slot="acceptContent">
                    {{ $t('global_cookie_okay') }}
                </div>
            </vue-cookie-accept-decline>
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">{{ $t('dealspotter_ü') }}</h1>
                    <p class="lead text-white mt-4">{{ $t('dealspotter_t') }}</p>
                    <a href="https://www.deal-spotter.de"
                       class="btn btn-white mt-4">{{ $t('dealspotter_b') }}</a>
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/theme/img-2-579x406.png"></b-carousel-slide>
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
