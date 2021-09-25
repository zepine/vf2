<template>
  <v-list>
    <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.icon"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </template>
      <v-list-item
        v-for="child in item.subItems"
        :key="child.title"
        :to="child.to"
      >
        <v-list-item-content>
          <v-list-item-title v-text="child.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({ // 변수를 정의하고 리턴
    items: [
      {
        title: 'Home',
        icon: 'mdi-home',
        subItems: [{ title: 'Intro' }],
        to: '/'
      },
      {
        title: 'About',
        icon: 'mdi-information-outline',
        active: true,
        subItems: [
          { title: 'Mission' },
          { title: 'Members' },
          { title: 'Adress' }
        ],
        to: '/about'
      },
      {
        title: 'Help',
        icon: 'mdi-help-circle-outline',
        to: '/help'
      }
    ],
    right: true
  })
}
</script>
