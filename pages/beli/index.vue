<template>
  <div class="mt-1">
    <div class="row">
      <div class="col-12">
        <div class="bs-glyphicons">
          <ul class="bs-glyphicons-list">
            <li>
              <a href="/beli/pulsa">
                <i class="fa fa-mobile" aria-hidden="true"/>
                <span class="glyphicon-class">Pulsa Reguler</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-bolt" aria-hidden="true"/>
                <span class="glyphicon-class">Pulsa Listrik</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-retweet" aria-hidden="true"/>
                <span class="glyphicon-class">Pulsa Transfer</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-internet-explorer" aria-hidden="true"/>
                <span class="glyphicon-class">Paket Internet</span>
              </a>
            </li>
            <li>
              <i class="fa fa-apple" aria-hidden="true"/>
              <span class="glyphicon-class">iTunes Gift Card</span>
            </li>
            <li>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"/>
                <span class="glyphicon-class">Paket SMS</span>
              </a>
            </li>
            <li>
              <a href="">                    
                <i class="fa fa-phone" aria-hidden="true"/>
                <span class="glyphicon-class">Paket Telephone</span>
              </a>
            </li>
            <li>
              <i class="fa fa-gamepad"/>
              <span class="glyphicon-class">Voucher Game</span>
            </li>
            <li>
              <i class="fa fa-motorcycle"/>
              <span class="glyphicon-class">Saldo Gojek</span>
            </li>
            <li>
              <i class="fa fa-bicycle"/>
              <span class="glyphicon-class">Saldo Grab</span>
            </li>
            <li>
              <i class="fa fa-google"/>
              <span class="glyphicon-class">Google Play</span>
            </li>  
            <li>
              <i class="fa fa-wifi"/>
              <span class="glyphicon-class">@Wifi.id</span>
            </li>                  
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "app",
  // middleware: "authenticated",
  data() {
    return {}
  },
  mounted() {
    // this.getCampaign()
  },
  methods: {}
}
</script>

<style scoped>
@media (min-width: 768px) {
  .bs-glyphicons {
    margin-right: 0;
    margin-left: 0;
  }
}

.bs-glyphicons {
  margin: 0 0px 20px;
}

.bs-glyphicons-list {
  padding-left: 0;
  list-style: none;
}

.bs-glyphicons li {
  float: left;
  width: 25%;
  height: 115px;
  padding: 10px;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  background-color: #3897d1;
  border: 2px solid #f6f8fa;
}

.bs-glyphicons li a {
  color: #ffffff;
  text-decoration: none;
}

.bs-glyphicons li i {
  font-size: 50px;
  margin-bottom: 15px;
}

@media (max-width: 767px) {
  .bs-glyphicons li {
    width: 33%;
  }

  .bs-glyphicons li {
    font-size: 12px;
  }
}

.bs-glyphicons li:hover {
  background-color: #ffffff;
  border: 2px solid #3897d1;
}

.bs-glyphicons li:hover a {
  color: #3897d1 !important;
}

.bs-glyphicons li a:hover {
  color: #3897d1 !important;
}

.bs-glyphicons .glyphicon {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 30px;
}

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bs-glyphicons .glyphicon-class {
  display: block;
  text-align: center;
  word-wrap: break-word;
}
</style>
