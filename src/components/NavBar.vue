<template>
    <v-sheet
    color="grey-lighten-4"
    class="pa-4"
    >
    <v-avatar
        class="mb-4"
        color="grey-darken-1"
        size="64"
    ></v-avatar>

    <div class="username">john@vuetifyjs.com</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
    <v-list-item
        v-for="[icon, text, to] in links"
        :key="icon"
        :to="to"
        link
    >
    <template v-slot:prepend>
        <v-icon size="large">{{ icon }}</v-icon>
      </template>

      <v-list-item-title>{{ text }}</v-list-item-title>
    </v-list-item>
    
    </v-list>
</template>

<script>

export default {
    data: () => ({
    drawer: null,
    links: [
        ['mdi-calendar', 'ManageEvent', '/myevent'],
        ['mdi-account-group', 'Friend', '/myfriend'],
        ['mdi-account', 'MyProfile', '/myprofile'],
        ['mdi-calendar-check', 'JoinedEvent', '/joinedevent'],
    ],
    }),
}
</script>