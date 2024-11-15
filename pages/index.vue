<template>
  <div class="home">
    <h1>Welcome to the Home Page!</h1>
    <p>This is a demo home page with some options passed from AEM:</p>


    <p>
      <span v-if="spaReadyEventFired" >We listened to the event 'spa-frame-ready' successfully, let's pull the cqOptions</span>
      <span v-else >We did not receive the 'spa-frame-ready' event yet.</span>
    </p>
    <pre style='text-align:left;padding:10px;font-size:11px;line-height:15px;color:#000;background:#BCFECB;'>
    content of cqOptions:
    {{ cqOptions }}
    </pre>
    
    <nuxt-link to="/about" class="link">Go to About Page</nuxt-link>

    <p>
      Loading JSON data:
      <ul>
        <li>
          Load data from https://stage-aem-backend.aida.de:8443/content/aida-component-library/demo-pages/test-components/AIDA-10528-CP-SPA-Frame.model.json
          <br>
          <button @click="loadJson('https://stage-aem-backend.aida.de:8443/content/aida-component-library/demo-pages/test-components/AIDA-10528-CP-SPA-Frame.model.json')">Load json</button>
        </li>
        <li>
          Load from free URL:
          <br>
          <input type="text" name="jsonurl" v-model="jsonurl">
          <button @click="loadJson(jsonurl)">Load json</button>
        </li>
      </ul>
    </p>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      cqOptionsType: typeof cqOptions,
      cqOptions: {},
      jsonurl: '< enter url >',
      spaReadyEventFired: false,
    };
  },
  mounted() {
    this.handleCQOptions();

    // add eventlistener to listen for cqOptions spa-frame-ready
    document.addEventListener('spa-frame-ready', () => {
      this.spaReadyEventFired = true;
      this.handleCQOptions();
    });
  },
  methods: {
    handleCQOptions() {
      if (typeof cqOptions !== 'undefined') {
        this.cqOptions = cqOptions;
      }
    },
    loadJson(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
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