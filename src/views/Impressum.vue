<template>
    <div>
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
                        <h1 class="text-white font-weight-light">{{ $t('impressum_title') }}</h1>
                        <p class="lead text-white mt-4">{{ $t('impressum_utitle') }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-components pb-0" id="section-components">
            <div class="container">
                {{ $t('impressum_adress') }}<br>
                {{ $t('impressum_adress2') }}<br>
                {{ $t('impressum_adress3') }}<br>
                <br>
                <b>{{ $t('impressum_ust') }}</b> {{ $t('impressum_ust2') }}<br>
                <br>
                <b>{{ $t('impressum_email') }}</b> {{ $t('impressum_email2') }}<br>
                <b>{{ $t('impressum_gpg') }}</b> {{ $t('impressum_gpg2') }}<br>
                <hr>
                <b>{{ $t('impressum_vertretung') }}</b><br>
                {{ $t('impressum_vertretung2') }}<br>
                {{ $t('impressum_vertretung3') }}<br>
                <hr>
                <b>{{ $t('impressum_haftung') }}</b><br>
                <p>{{ $t('impressum_haftung2') }}<br>
                {{ $t('impressum_haftung3') }}</p>
                <hr>
                <b>{{ $t('impressum_osb') }}</b><br>
                <p>{{ $t('impressum_osb2') }} <a href="http://ec.europa.eu/consumers/odr">{{ $t('impressum_osblink') }}</a>{{ $t('impressum_osb3') }}</p>
                <p>{{ $t('impressum_osb4') }}</p>
                <hr>
                <b>{{ $t('impressum_datenschutz') }}</b><br>
                {{ $t('impressum_datenschutz2') }} <a href="https://onemanpublisher.com/#/datenschutz">{{ $t('impressum_datenschutzlink') }}</a>{{ $t('impressum_datenschutz3') }}
            </div>
        </section>
    </div>
</template>