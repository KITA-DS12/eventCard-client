<template>
    <div class="text-center">
    <v-btn
        color="primary"
        @click="dialog = true"
    >
        Open Dialog
    </v-btn>

    <v-dialog
        v-model="dialog"
        width="auto"
    >
        <v-card>
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
        <v-card-text>
            イベント 太郎 さんと出会いました。<br>友だち登録をしますか？
        </v-card-text>
        
        <v-container>
            <v-row>
                <v-col cols="3" offset="3">
                    <v-btn color="primary" block @click="dialog = false">キャンセル</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn color="primary" block @click="dialog = false">登録</v-btn>
                </v-col>
            </v-row>
        </v-container>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
export default {
    data () {
    return {
        dialog: false,
    }
    },
}
</script>