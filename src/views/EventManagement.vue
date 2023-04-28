<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Navbar />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Event Passport</v-toolbar-title>
    </v-app-bar>

    <v-dialog v-model="addEventDialog" width="420px">
      <v-card>
        <h1 style="text-align: center; margin-top: 20px">
          イベントを作成しました！
        </h1>
        <h3 style="text-align: center; margin-top: 20px">
          QRコードを参加者に共有しましょう！
        </h3>
        <br />
        <v-container>
          <v-row>
            <v-col cols="6" offset="0">
              <v-btn color="primary" block @click="addEventDialog = false"
                >閉じる</v-btn
              >
            </v-col>
            <v-col cols="6" offset="0">
              <v-btn color="primary" block @click="addEventDialog = false"
                >QRコードを表示する</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>

    <v-main>
      <v-card>
        <v-img
          height="200"
          src="https://cdn.pixabay.com/photo/2017/08/10/05/56/calendar-2618814_1280.jpg"
          cover
          class="text-white align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <div class="font-weight-bold ms-1 mb-2">
            <h1 class="card-title">主催したイベント一覧</h1>
          </div>
          <v-row class="justify-end">
            <v-dialog v-model="dialog" persistent width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  size="x-large"
                  color="white"
                  variant="text"
                  icon="mdi-plus-thick"
                  class="add-btn"
                  v-bind="props"
                ></v-btn>
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
                          v-model="eventName"
                          label="イベント名*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="dateStart"
                          label="開始日*"
                          required
                          type="date"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="dateEnd"
                          label="終了日*"
                          hint="イベントが1日のみの場合は開始日と同じ日を入力してください"
                          persistent-hint
                          required
                          type="date"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="location"
                          label="開催地*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="url" label="URL"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="description"
                          label="概要"
                          required
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
                    @click="createEvent"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- <v-btn size="x-large" color="white" variant="text" icon="mdi-qrcode-scan" class="add-btn qr-btn"></v-btn> -->
          </v-row>
        </v-img>
        <AddEvent />

        <v-timeline align="start" side="end" class="timelines">
          <v-timeline-item
            v-for="(event, i) in events"
            :key="i"
            :dot-color="event.color"
            size="small"
          >
            <template v-slot:opposite>
              <div
                :class="`pt-1 headline font-weight-bold text-${event.color}`"
                v-text="event.date_start"
              ></div>
              <div
                :class="`pt-1 headline font-weight-bold text-${event.color} text-center`"
              >
                |
              </div>
              <div
                :class="`pt-1 headline font-weight-bold text-${event.color}`"
                v-text="event.date_end"
              ></div>
            </template>
            <div>
              <h2
                :class="`mt-n1 headline font-weight-light mb-4 text-${event.color}`"
              >
                <div
                  :class="`pt-1 headline font-weight-bold text-${event.color}`"
                  v-text="event.name"
                ></div>
              </h2>
              <a :href="event.url">
                <div v-text="event.url"></div>
              </a>
              <div v-text="event.description"></div>
              <br />
              <v-row>
                <v-space />
                <v-icon>mdi-map-marker</v-icon>

                <div v-text="event.location"></div>
              </v-row>
              <br />

              <div class="text-center">
                <v-dialog v-model="dialog_qr" width="auto">
                  <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props"
                      >QRコードを表示する</v-btn
                    >
                  </template>

                  <v-card>
                    <vue-qrcode
                      :value="'http://localhost:5173/myevent'"
                      tag="img"
                    ></vue-qrcode>
                    <v-card-actions>
                      <v-btn color="primary" block @click="dialog_qr = false"
                        >閉じる</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
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
import AddEvent from "../components/AddEvent.vue";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import axios from "axios";

export default {
  data: () => ({
    addEventDialog: false,
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    eventName: "",
    dateStart: new Date(),
    dateEnd: new Date(),
    location: "",
    url: "",
    description: "",
    events: null,
    dialog: false,
    dialog_qr: false,
  }),
  components: { Navbar, AddEvent, VueQrcode },
  mounted() {
    this.readEvents();
  },
  methods: {
    async readEvents() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const uid = user.uid;
      await axios.get(`event/${uid}`).then((res) => {
        this.events = res.data;
      });
    },
    async createEvent() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const uid = user.uid;
      await axios
        .post(`event/${uid}`, {
          name: this.eventName,
          date_start: this.dateStart,
          date_end: this.dateEnd,
          location: this.location,
          url: this.url,
          description: this.description,
          category: "",
        })
        .then((res) => {
          console.log(res.data);
          this.readEvents();
          this.dialog = false;
          this.addEventDialog = true;
        });
    },
  },
};
</script>
