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
            <h1 style="text-align: center; margin-top: 20px;">フレンド登録完了！</h1>
            <v-container>
                <v-row>
                    <v-col cols="3" offset="0">
                        <v-avatar
                            class="mb-4 profile-avatar"
                            color="grey-darken-1"
                            size="140"
                        ></v-avatar>
                    </v-col>
                    <v-col cols="3" offset="2">
                        <v-avatar
                            class="mb-4 profile-avatar"
                            color="grey-darken-1"
                            size="140"
                        ></v-avatar>
                    </v-col>
                </v-row>
            </v-container>
            
            
            <v-container>
                <v-row>
                    <v-col cols="8" offset="2">
                        <v-btn color="primary" block @click="dialog = false">閉じる</v-btn>
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
        dialog: true,
    }
    },
}
</script>