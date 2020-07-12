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
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Unser neustes Spiel
                                    <span>Gravity Bird</span>
                                </h1>
                                <p class="lead text-white">Erreiche den Highscore in dem du mit dem Vogel gegen die Gravitation und anderen Gefahren kämpfst!
                                <b>Jetzt neu für Android und Apple</b></p>
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
                                    <h6 class="text-primary text-uppercase">Projektplanung- & mangement</h6>
                                    <p class="description mt-3">Wir planen und delegieren Ihr Projekt nach Ihren Wünschen. Sie müssen weiter nichts tun.</p>
                                    <div>
                                        <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>kreativität</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Mehr erfahren
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Wunschentwicklung</h6>
                                    <p class="description mt-3">Wir entwickeln ihr Projekt genau nach Ihren Wünschen und Vorstellungen. Sie müssen nichts tun.</p>
                                    <div>
                                        <badge type="success" rounded>entwicklung</badge>
                                        <badge type="success" rounded>wunsch</badge>
                                        <badge type="success" rounded>vorstellung</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Mehr erfahren
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Stetige Wartung</h6>
                                    <p class="description mt-3">Nach der Entwicklung übernehmen wir für Sie die Wartung Ihres Projektes. Sie müssen auch hier nichts tun.
                                    </p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>wartung</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Mehr erfahren
                                    </base-button>
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
                        <h2 class="display-3">Die Nordlichter</h2>
                        <p class="lead text-muted">Unser Team besteht aus Schulfreunde welche alle in der nördlichsten Stadt Deutschlands aufgewachsen sind.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-6 mb-5 mb-lg-6">
                        <div class="px-4">
                            <a href="/#/sascha-dolgow">
                                <img v-lazy="'img/theme/team-1-150x150.jpg'"
                                    class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    style="width: 200px;">
                            </a>
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Sascha Dolgow</span>
                                    <small class="h6 text-muted">CEO & App-Developer</small>
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
                    <div class="col-md-6 col-lg-6 mb-5 mb-lg-6">
                        <div class="px-4">
                            <a href="/#/luca-kohls">
                                <img v-lazy="'img/theme/team-2-150x150.jpg'"
                                    class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    style="width: 200px;">
                            </a>
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Luca Stephan Kohls</span>
                                    <small class="h6 text-muted">CEO & System-Administrator</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://twitter.com/kohls_luca" type="primary" target="_blank" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://www.instagram.com/luca_kohls17/" type="primary" target="_blank" icon="fa fa-instagram" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:kohls@onemanpublisher.com" type="primary" icon="fa fa-envelope" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-6 mb-7 mb-lg-0">
                        <div class="px-4">
                            <a href="/#/baris-avci">
                                <img v-lazy="'img/theme/team-3-150x150.jpg'"
                                    class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    style="width: 200px;">
                            </a>
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Baris Ozan Avci</span>
                                    <small class="h6 text-muted">Trainee App-Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://www.instagram.com/baris_.avci" type="danger" target="_blank" icon="fa fa-instagram" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:avic@onemanpublisher.coM" type="danger" icon="fa fa-envelope" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 mb-7 mb-lg-0">
                        <div class="px-4">
                            <a href="/#/alexander-vaymer">
                                <img v-lazy="'img/theme/team-4-640x640.jpg'"
                                    class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    style="width: 200px;">
                            </a>
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Alexander Vaymer</span>
                                    <small class="h6 text-muted">Trainee Web-Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://www.instagram.com/alexvaymer" type="success" target="_blank" icon="fa fa-instagram" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:vaymer@onemanpublisher.com" type="success" icon="fa fa-envelope" rounded
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
                                <h3 class="text-white">Wir erstellen genau das, was Sie brauchen!</h3>
                                <p class="lead text-white mt-3">Gerade als ein kleines Team, sind wir im Stande für Sie in kurzer Zeit genau die Anwendung für Sie zu kreieren, die Sie benötigen.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="mailto:info@onemanpublisher.com"
                                            type="white" block size="lg">
                                    Kontakt aufnehmen
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
