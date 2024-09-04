<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is a demo home page with some options passed from AEM:</p>
    <ul>
      <li v-for="(value, key) in cqOptions" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
    <nuxt-link to="/about" class="link">Go to About Page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
.home {
  text-align: center;
  margin-top: 50px;
  background-color: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
}

h1 {
  color: #1565c0;
}

p {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: #00796b;
  font-weight: bold;
}

.link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #64b5f6;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.link:hover {
  background-color: #42a5f5;
}
</style>