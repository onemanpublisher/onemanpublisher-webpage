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
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <!-- Basic elements -->
                        <h2 class="mb-5"><span>{{ $t('datenschutz_title') }}</span></h2>
                        <ul>
            		<li><a href="#V1"><strong>{{ $t('datenschutz_list1') }}</strong></a></li>
            		<li><a href="#V2"><strong>{{ $t('datenschutz_list2') }}</strong></a></li>
    				<li><a href="#V3"><strong>{{ $t('datenschutz_list3') }}</strong></a></li>
            		<li><a href="#V4"><strong>{{ $t('datenschutz_list4') }}</strong></a></li>
        			<li><a href="#V5"><strong>{{ $t('datenschutz_list5') }}</strong></a></li>
            		<li><a href="#V6"><strong>{{ $t('datenschutz_list6') }}</strong></a></li>
            		<li><a href="#V7"><strong>{{ $t('datenschutz_list7') }}</strong></a></li>
        		</ul>
        		<p>{{ $t('datenschutz_t') }}<br>
            	<h4><a name="V1"></a><strong>{{ $t('datenschutz_1_ü') }}</strong></h4>
            	{{ $t('datenschutz_1_1') }} <b><a href="mailto:info@onemanpublisher.com">{{ $t('datenschutz_1_1_link') }}</a></b>{{ $t('datenschutz_1_1_2') }}<br>
            	{{ $t('datenschutz_1_2') }}<b>{{ $t('datenschutz_1_2_b') }}<a href="mailto:app@lucakohls.de">{{ $t('datenschutz_1_2_link') }}</a></b>{{ $t('datenschutz_1_2_3') }}<br>
            	{{ $t('datenschutz_1_3') }}<br>
				<h4><a name="V2"></a><strong>{{ $t('datenschutz_2_ü') }}</strong></h4>
				{{ $t('datenschutz_2_1') }}<strong>{{ $t('datenschutz_2_1_b') }}</strong>{{ $t('datenschutz_2_1_2') }}<br>
				<ul>
					<li>{{ $t('datenschutz_2_1_li1') }}</li>
					<li>{{ $t('datenschutz_2_1_li2') }}</li>
					<li>{{ $t('datenschutz_2_1_li3') }}</li>
					<li>{{ $t('datenschutz_2_1_li4') }}</li>
					<li>{{ $t('datenschutz_2_1_li5') }}</li>
					<li>{{ $t('datenschutz_2_1_li6') }}</li>
					<li>{{ $t('datenschutz_2_1_li7') }}</li>
					<li>{{ $t('datenschutz_2_1_li8') }}</li>
				</ul>
				{{ $t('datenschutz_2_1_3') }}<br>
				{{ $t('datenschutz_2_1_4') }}<br>
				{{ $t('datenschutz_2_2') }}<strong>{{ $t('datenschutz_2_2_b') }}</strong>{{ $t('datenschutz_2_2_2') }}<br>
				<h4><a name="V3"></a><strong>{{ $t('datenschutz_3_ü') }}</strong></h4>
				{{ $t('datenschutz_3_t') }}
				<ul>
					<li>{{ $t('datenschutz_3_li1') }}</li>
					<li>{{ $t('datenschutz_3_li2') }}</li>
					<li>{{ $t('datenschutz_3_li3') }}</li>
				</ul>
				<h4><a name="V4"></a><strong>{{ $t('datenschutz_4_ü') }}</strong></h4>
				{{ $t('datenschutz_4_1') }}<br>
				{{ $t('datenschutz_4_2') }}<br>
				<ul>
					<li>{{ $t('datenschutz_4_2_li1') }}</li>
					<li>{{ $t('datenschutz_4_2_li2') }}</li>
				</ul>
				{{ $t('datenschutz_4_2_2') }}<br>
				{{ $t('datenschutz_4_2_3') }}<br>
				<h4><a name="V5"></a><strong>{{ $t('datenschutz_5_ü') }}</strong></h4>
				{{ $t('datenschutz_5_1') }}
				<ul>
					<li>{{ $t('datenschutz_5_1_li1') }}</li>
					<li>{{ $t('datenschutz_5_1_li2') }}</li>
					<li>{{ $t('datenschutz_5_1_li3') }}</li>
					<li>{{ $t('datenschutz_5_1_li4') }}</li>
					<li>{{ $t('datenschutz_5_1_li5') }}</li>
				</ul>
				{{ $t('datenschutz_5_2') }}
				<ul>
					<li>{{ $t('datenschutz_5_2_li1') }}</li>
					<li>{{ $t('datenschutz_5_2_li2') }}</li>
				</ul>
				<h4><a name="V6"></a><strong>{{ $t('datenschutz_6_ü') }}</strong></h4>
				{{ $t('datenschutz_6_1') }}<b>{{ $t('datenschutz_6_1_b') }}</b>{{ $t('datenschutz_6_1_2') }}<br>
				{{ $t('datenschutz_6_2') }}<br>
				<h4><a name="V7"></a><strong>{{ $t('datenschutz_7_ü') }}</strong></h4>
				{{ $t('datenschutz_7_1') }}<br>
				{{ $t('datenschutz_7_2') }}<br>
				{{ $t('datenschutz_7_3') }}<a href="https://www.onemanpublisher.com/#/datenschutz/">{{ $t('datenschutz_7_3_link') }}</a>{{ $t('datenschutz_7_3_2') }}
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
