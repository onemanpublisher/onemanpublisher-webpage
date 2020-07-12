<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-5-150x150.jpg'" class="rounded-circle">
                                        <!-- <img v-lazy="'img/theme/team-5-800x800.jpg'" class="rounded-circle"> -->
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <!-- <base-button type="info" size="sm" class="mr-4">Connect</base-button> -->
                                    <a href="mailto:dolgow@onemanpublisher.com"><base-button type="default" size="l" class="float-right">Message</base-button></a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading"></span>
                                        <span class="description"></span>
                                    </div>
                                    <div>
                                        <span class="heading"></span>
                                        <span class="description"></span>
                                    </div>
                                    <div>
                                        <span class="heading"></span>
                                        <span class="description"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="text-center mt-5">
                            <h3>Sascha Dolgow
                                <span class="font-weight-light">, 20</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Flensburg, Deutschland</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Chief Executive Officer</div>
                            <div><i class="ni education_hat mr-2"></i>App-Developer (Android & iOS)</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <a href="#">Mehr...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
