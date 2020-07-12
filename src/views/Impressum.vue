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
        </section>
        <section class="section section-components pb-0" id="section-components">
            <div class="container">
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
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <!-- Basic elements -->
                        <h2 class="mb-5"><span>Impressum</span></h2>
                        <b><h5>Angaben gemäß § 5 TMG:</h5></b><br>
                        onemanpublisher GbR<br>
                        Ochsenweg 50<br>
                        24941 Flensburg<br>
                        <br>
                        <b>E-Mail:</b> info [at] onemanpublisher.com<br>
                        <hr>
                        <b>vertreten durch die Geschäftsführung</b><br>
                        Herr Luca Stephan Kohls<br>
                        Herr Sascha Dolgow<br>
                        <hr>
                        <b>Haftungshinweis</b><br>
                        <p>Hiermit distanzieren wir uns, trotz sorgfältiger Prüfung, von den Inhalten aller Links dieser Seite und machen uns diese Inhalte nicht zu eigen.<br>
                        Der Inhalt der jeweiligen Links hat dessen Inhaber zu verantworten.</p>
                        <hr>
                        <b>Online-Streibeteiligung</b><br>
                        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie unter <a href="http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</a>. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.</p>
                        <p>Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und werden von Fall zu Fall individuell über eine Teilnahme entscheiden.</p>
                        <hr>
                        <b>Datenschutz</b><br>
                        Unsere Datenschutzerklärung ist unter <a href="https://onemanpublisher.com/#/datenschutz">https://onemanpublisher.com/#/datenschutz</a> jederzeit aufrufbar.
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: "Impressum",
  components: {}
};
</script>
<style>
</style>
