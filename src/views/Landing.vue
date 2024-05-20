<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
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
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">{{ $t('landingpage_newestGame') }}
                                    <span>{{ $t('landingpage_game') }}</span>
                                </h1>
                                <p class="lead text-white">{{ $t('landingpage_gameShortDesc') }}<br>
                                <b>{{ $t('landingpage_gameShortDesc2') }}</b></p>
                                <a href="https://apps.apple.com/de/app/the-real-gravity-bird/id1514182670"><img src="img/brand/apple.svg"></a>
                                <a href="https://play.google.com/store/apps/details?id=com.onemanpublisher.TapToLive&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img src="img/brand/google-play.svg"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">{{ $t('landingpage_ersteKachelü') }}</h6>
                                    <p class="description mt-3">{{ $t('landingpage_ersteKachelt') }}</p>
                                    <div>
                                        <badge type="primary" rounded>{{ $t('landingpage_ersteKachelb1') }}</badge>
                                        <badge type="primary" rounded>{{ $t('landingpage_ersteKachelb2') }}</badge>
                                        <badge type="primary" rounded>{{ $t('landingpage_ersteKachelb3') }}</badge>
                                    </div>
                                    <!-- <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Mehr erfahren
                                    </base-button> -->
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">{{ $t('landingpage_zweiteKachelü') }}</h6>
                                    <p class="description mt-3">{{ $t('landingpage_zweiteKachelt') }}</p>
                                    <div>
                                        <badge type="success" rounded>{{ $t('landingpage_zweiteKachelb1') }}</badge>
                                        <badge type="success" rounded>{{ $t('landingpage_zweiteKachelb2') }}</badge>
                                        <badge type="success" rounded>{{ $t('landingpage_zweiteKachelb3') }}</badge>
                                    </div>
                                    <!-- <base-button tag="a" href="#" type="success" class="mt-4">
                                        Mehr erfahren
                                    </base-button> -->
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">{{ $t('landingpage_dritteKachelü') }}</h6>
                                    <p class="description mt-3">{{ $t('landingpage_dritteKachelt') }}</p>
                                    <div>
                                        <badge type="warning" rounded>{{ $t('landingpage_dritteKachelb1') }}</badge>
                                        <badge type="warning" rounded>{{ $t('landingpage_dritteKachelb2') }}</badge>
                                        <badge type="warning" rounded>{{ $t('landingpage_dritteKachelb3') }}</badge>
                                    </div>
                                    <!-- <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Mehr erfahren
                                    </base-button> -->
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">{{ $t('landingpage_team_ü') }}</h2>
                        <p class="lead text-muted">{{ $t('landingpage_team_üu') }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="px-4">
                            <a href="/#/sascha-dolgow">
                                <img v-lazy="'img/theme/team-1-150x150.jpg'"
                                    class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    style="width: 200px;">
                            </a>
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">{{ $t('landingpage_team_sascha') }}</span>
                                    <small class="h6 text-muted">{{ $t('landingpage_team_saschau') }}</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://www.instagram.com/sasdolgow" type="warning" target="_blanK" icon="fa fa-instagram" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:dolgow@onemanpublisher.com" type="warning" icon="fa fa-envelope" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="px-4">
                            <a href="/#/luca-kohls">
                                <img v-lazy="'img/theme/team-2-150x150.jpg'"
                                    class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    style="width: 200px;">
                            </a>
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">{{ $t('landingpage_team_luca') }}</span>
                                    <small class="h6 text-muted">{{ $t('landingpage_team_lucau') }}</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://twitter.com/kohls_luca" type="primary" target="_blank" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://www.instagram.com/luca.kohls/" type="primary" target="_blank" icon="fa fa-instagram" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:kohls@onemanpublisher.com" type="primary" icon="fa fa-envelope" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="warning"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">{{ $t('landingpage_yellowbox_ü') }}</h3>
                                <p class="lead text-white mt-3">{{ $t('landingpage_yellowbox_t') }}</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="mailto:info@onemanpublisher.com"
                                            type="white" block size="lg">
                                    {{ $t('landingpage_yellowbox_b') }}
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
