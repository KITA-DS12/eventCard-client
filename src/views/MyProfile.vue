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
                src="https://pixabay.com/get/g61c7c3de228868fcf88446004792f6f7056d87b6781427a243a84031e47f4e01e891d3ea0b8fa95157e79cb81b268510_640.jpg"
                cover
                class="text-white align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                
                <div class="font-weight-bold ms-1 mb-2">
                    <h1 class="card-title">プロフィール</h1>
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
                
        
                <v-card
                    color="#952175"
                    theme="dark"
                    class="profile-card"
                    width="425px"
                    height="260px"
                >
                <v-responsive :aspect-ratio="5/3">
                    
                        
                        <v-card-title class="text-h5" style="margin-top: 10px;">
                        イベント 太郎
                        </v-card-title>

                        <v-card-subtitle style="margin-top: -10px; margin-left: 5px; margin-bottom: 5px;">SDGs大学ウェルビーイング学部</v-card-subtitle>
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            aspect-ratio="16/9"
                            cover
                        >
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                <v-card-actions>
                                    <v-avatar
                                        class="mb-4 profile-avatar"
                                        color="grey-darken-1"
                                        size="140"
                                    ></v-avatar>
                                </v-card-actions>
                            </div>

                            <v-avatar
                                class="mb-4 profile-qr"
                                color="grey-darken-1"
                                size="140"
                                rounded="0"
                            ></v-avatar>
                            </div>
                        </v-img>
                </v-responsive>
                </v-card>
            
                <v-card
                    class="profile-card"
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    cover
                    ></v-img>

                    <v-card-title>
                    Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                    1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="orange-lighten-2"
                        variant="text"
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show = !show"
                    ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
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

    .profile-card {
        margin: 30px;
    }

    .profile-avatar {
        margin: 20px 0px 10px 35px;
    }

    .profile-qr {
        margin: 25px 35px 10px 0px;
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