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
        width="420px"
    >
        <v-card>
            <h1 style="text-align: center; margin-top: 20px;">イベントを作成しました！</h1>
            <h3 style="text-align: center; margin-top: 20px;">QRコードを参加者に共有しましょう！</h3>
            <br>
            <v-container>
                <v-row>
                    <v-col cols="6" offset="0">
                        <v-btn color="primary" block @click="dialog = false">閉じる</v-btn>
                    </v-col>
                    <v-col cols="6" offset="0">
                        <v-btn color="primary" block @click="dialog = false">QRコードを表示する</v-btn>
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