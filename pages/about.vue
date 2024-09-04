<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page with some options passed from AEM:</p>
    <ul>
      <li v-for="(value, key) in cqOptions" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
    <nuxt-link to="/" class="link">Go to Home Page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      cqOptions: {},
    };
  },
  mounted() {
    this.handleCQOptions();
  },
  methods: {
    handleCQOptions() {
      this.cqOptions = window.cqOptions || {};
    },
  },
}
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 50px;
  background-color: #fce4ec;
  padding: 20px;
  border-radius: 8px;
}

h1 {
  color: #ad1457;
}

p {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: #d81b60;
  font-weight: bold;
}

.link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ec407a;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.link:hover {
  background-color: #e91e63;
}
</style>