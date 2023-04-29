<template>
    <v-dialog
        v-model="dialog"
        width="1024"
        >
        <template v-slot:activator="{ props }">
            <v-btn color="primary" @click="dialog = true">プロフィール情報を更新する</v-btn>
        </template>
        <v-card>
            <v-card-title>
            <span class="text-h5">プロフィール編集</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        label="ユーザー名*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="表示するメールアドレス"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="所属"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                        label="メモ"
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-file-input
                            label="ユーザーアイコン"
                            variant="filled"
                            prepend-icon="mdi-image"
                        ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Twitter"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Github"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Qiita"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="その他URL"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <h3>名刺カラー</h3>
                        <v-color-picker
                        v-model="c2"
                        hide-inputs
                        show-swatches
                        ></v-color-picker>
                    </v-col>
                    <v-col cols="8">
                        <Background />
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
    </v-dialog>
</template>

<script>
import Background from "../components/CardBackground.vue";
export default {
    data: () => ({
        dialog: false,
    }),
    components: { Background }
}
</script>