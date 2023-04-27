<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <Navbar />
        </v-navigation-drawer>
    
        <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    
        <v-toolbar-title>Event Passport</v-toolbar-title>
        </v-app-bar>
    
        <v-main>
            <v-card>
                <v-img
                height="200"
                src="https://pixabay.com/get/g65e06d76349798dd969cc96554c06c18ae675ca023ef6d3ffc1362325f422f691aaede92387b1356b6dc5b0e10acaa66638f64d66b9f886d8137fcf3beedc57a_640.jpg"
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
                    <v-btn size="x-large" color="white" variant="text" icon="mdi-qrcode-scan" class="add-btn qr-btn"></v-btn>
                </v-row>
                </v-img>
                
        
                
            
                <v-container
                class="py-8 px-6"
                fluid
              >
                <v-row>
                  <v-col
                    v-for="card in cards"
                    :key="card"
                    cols="12"
                  >
                    <v-card>
        
                      <v-list lines="two">
                        <v-list-subheader>{{ card }}</v-list-subheader>
                        <template v-for="n in 6" :key="n">
                          <v-list-item>
                            <template v-slot:prepend>
                              <v-avatar color="grey-darken-1"></v-avatar>
                            </template>
        
                            <v-list-item-title>フレンド {{ n }}</v-list-item-title>
        
                            <v-list-item-subtitle>
                              過去n度、同じイベントに参加しました
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
    export default {
        data: () => ({
            cards: ['Event1', 'Event2', 'Event3', 'Event4'],
            drawer: null,
            links: [
                ['mdi-inbox-arrow-down', 'Inbox'],
                ['mdi-send', 'Send'],
                ['mdi-delete', 'Trash'],
                ['mdi-alert-octagon', 'Spam'],
            ],
            event_data: [
                {
                color: 'cyan',
                startdate: '2023/4/29',
                enddate: '2023/4/29',
                eventname: '技育キャラバン',
                text: 'これは京都で開催された対面でのハッカソンです',
                loc: '京都府',
                },
                {
                color: 'green',
                startdate: '2023/4/29',
                enddate: '2023/4/29',
                eventname: 'ハッカソン vol4',
                text: 'これはオンラインで開催されたハッカソンです',
                loc: 'オンライン',
                },
                {
                color: 'pink',
                startdate: '2023/4/29',
                enddate: '2023/4/29',
                eventname: 'ハッカソン vol3',
                text: 'これはオンラインで開催されたハッカソンです',
                loc: 'オンライン',
                },
                {
                color: 'amber',
                startdate: '2023/4/29',
                enddate: '2023/4/29',
                eventname: 'ハッカソン vol2',
                text: 'これはオンラインで開催されたハッカソンです',
                loc: 'オンライン',
                },
                {
                color: 'orange',
                startdate: '2023/4/29',
                enddate: '2023/4/29',
                eventname: 'ハッカソン vol1',
                text: 'これはオンラインで開催されたハッカソンです',
                loc: 'オンライン',
                },
            ],
            dialog: false,
        }),
        components: { Navbar }
    }
    </script>