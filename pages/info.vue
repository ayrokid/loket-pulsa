<template>
  <div class="mt-1">
    <div class="row">
      <div v-for="item in campaign.data" :key="item.id" class="col-12">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ item.fullname }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Sunday, 28 January 2017</h6>
            <p class="card-text">{{ item.info_daily.substr(0, 100) }}...</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
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
    return {
      campaign: []
    }
  },
  mounted() {
    this.getCampaign()
  },
  methods: {
    async getCampaign() {
      try {
        const token = window.localStorage.getItem("userToken")
        this.$axios.setToken(token, "Bearer")
        const data = await this.$axios.$get(process.env.baseUrl + "campaign")
        console.log(data)
        this.campaign = data
      } catch (error) {
        console.log(Object.keys(error), error.response)
        this.$toast.error(error.response.statusText).goAway(2000)
      }
    }
  }
}
</script>

<style scoped>
</style>
