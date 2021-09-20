<template>
  <v-app>
    <v-app-bar app absolute color="primary" dark>
      <!-- app bar -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <site-title :ttl="title"></site-title> <!-- site-title : kebab case -->
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-magnify
            </v-icon>
          </v-btn>
        </template>
        <span>Search</span>
      </v-tooltip>
      <v-tooltip bottom>

        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="save" icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-check
            </v-icon>
          </v-btn>
        </template>
        <span>Save</span>
      </v-tooltip>
      <v-tooltip bottom>

        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="read" icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-read
            </v-icon>
          </v-btn>
        </template>
        <span>Read</span>
      </v-tooltip>
      <v-tooltip bottom>

        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="listen" icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-reload
            </v-icon>
          </v-btn>
        </template>
        <span>Listen</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <!-- nav -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <!-- nav title -->
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            <!-- sub title -->
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />

      <site-menu /> <!-- menu -->

    </v-navigation-drawer>

    <site-footer :ftr='footer' /> <!-- footer -->

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import siteTitle from './views/site/title.vue'
import siteFooter from './views/site/footer.vue'
import siteMenu from './views/site/menu.vue'
import { writeUserData, readUserData, listenUserData } from './plugins/firebase.js'
// Components registered under 'PascalCase' or 'camelCase' names have may be called however you like, except using 'snake_case'.

export default {
  components: { siteTitle, siteFooter, siteMenu },
  name: 'App',
  data: () => ({
    drawer: false,
    title: '나의 타이틀',
    footer: '나의 푸터',
    group: null,
    userId: 'Renfri-lovely-girl',
    name: 'Emma Appleton',
    born: '1991',
    imageUrl: 'https://static.wikia.nocookie.net/witcher/images/f/f1/Netflix_renfri_lovely.jpg'
  }),
  watch: {
    group () {
      this.drawer = false
    }
  },
  mounted () {
    console.clear()
    console.log(writeUserData)
    console.log(readUserData)
  },
  methods: {
    save () {
      console.clear()
      console.log('==> \'DB 쓰기\'를 시도합니다~ <==')
      writeUserData(this.userId, this.name, this.born, this.imageUrl)
    },
    read () {
      console.clear()
      console.log('==> \'DB 읽기\'를 시도합니다~ <==')
      readUserData(this.userId)
    },
    listen () {
      console.clear()
      console.log('==> \'DB 이벤트\'를 수신합니다~ <==')
      listenUserData(this.userId)
    }
  }
}
</script>
