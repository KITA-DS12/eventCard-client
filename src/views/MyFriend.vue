<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Navbar />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sync Meets</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-img
          height="200"
          src="https://cdn.pixabay.com/photo/2018/01/19/07/57/shaking-hands-3091906_1280.jpg"
          cover
          class="text-white align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <div class="font-weight-bold ms-1 mb-2">
            <h1 class="card-title">フレンド</h1>
          </div>
          <v-row class="justify-end">
            <!-- <v-dialog
                    v-model="dialog"
                    persistent
                    width="1024"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn size="x-large" color="white" variant="text" icon="mdi-plus-thick" class="add-btn" v-bind="props"></v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">イベントを登録する</span>
                        </v-card-title>
                        <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                    label="イベント名*"
                                    required
                                    ></v-text-field>
                                </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                label="開始日*"
                                required
                                type="date"
                                ></v-text-field>
                            </v-col>
                            
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                label="終了日*"
                                hint="イベントが1日のみの場合は開始日と同じ日を入力してください"
                                persistent-hint
                                required
                                type="date"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                label="開催地*"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                label="概要"
                                required
                                ></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                label="メモ"
                                ></v-textarea>
                            </v-col>
                            
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue-darken-1"
                            variant="text"
                            @click="dialog = false"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue-darken-1"
                            variant="text"
                            @click="dialog = false"
                        >
                            Save
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog> -->
            <v-btn
              size="x-large"
              color="white"
              variant="text"
              icon="mdi-qrcode-scan"
              class="add-btn qr-btn"
            ></v-btn>
          </v-row>
          <MadeFriend />
        </v-img>

        <v-container class="py-8 px-6" fluid>
          <v-row>
            <v-col v-for="(event, i) in events" :key="event" cols="12">
              <v-card>
                <v-list lines="two">
                  <v-list-subheader>{{ event.name }}</v-list-subheader>
                  <template v-for="friend in outer_friends[i]" :key="friend">
                    <v-list-item>
                      <template v-slot:prepend>
                        <v-avatar color="grey-darken-1"></v-avatar>
                      </template>

                      <v-list-item-title>{{
                        friend.username
                      }}</v-list-item-title>

                      <v-list-item-subtitle>
                        {{}}
                      </v-list-item-subtitle>
                    </v-list-item>

                    <v-divider
                      v-if="n !== 6"
                      :key="`divider-${n}`"
                      inset
                    ></v-divider>
                  </template>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<style>
.timelines {
  margin-left: 20px;
}

.friends {
  margin-right: 5px;
}

.card-title {
  margin-left: 10px;
  margin-bottom: -65px;
}

.add-btn {
  margin-bottom: 10px;
}

.qr-btn {
  margin-right: 10px;
}
</style>

<script>
import Navbar from "../components/NavBar.vue";
import MakeFriend from "../components/MakeFriend.vue";
import MadeFriend from "../components/MadeFriend.vue";
import axios from "axios";

export default {
  data: () => ({
    cards: ["Event1", "Event2", "Event3", "Event4"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    events: null,
    particlpants: null,
    friends: null,
    outer_friends: [],
    inner_friends: [],
    dialog: false,
  }),
  components: { Navbar, MakeFriend, MadeFriend },
  mounted() {
    this.readEvents();
    this.readFriends();
    this.readParticlpants();
  },
  methods: {
    async readParticlpants() {
      this.outer_friends = [];
      if (!this.events) {
        await this.readEvents();
      }
      for await (const e of this.events) {
        this.inner_friends = [];
        await axios.get(`particlpant/users/${e.id}`).then((res) => {
          console.log("users", res.data);
          for (const user of res.data) {
            const friend = this.friends.find((f) => f.uid === user.uid);
            if (friend) {
              this.inner_friends.push(friend);
            }
          }
        });
        this.outer_friends.push(this.inner_friends);
      }
      console.log("outer", this.outer_friends);
    },
    async readEvents() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const uid = user.uid;
      await axios.get(`particlpant/events/${uid}`).then((res) => {
        this.events = res.data;
        console.log("events", res.data);
      });
    },
    async readFriends() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const uid = user.uid;
      await axios.get(`friends/${uid}`).then((res) => {
        this.friends = res.data;
        console.log("friends", res.data);
      });
    },
  },
};
</script>
