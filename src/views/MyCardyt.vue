<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-col style="text-align: center;">
                        <v-avatar class="mb-4 user_icon" color="grey-darken-1" size="300px">
                            <img src="../assets/card/IMG_8829.jpg" alt="avatar image" style="max-width: 300px;"/>
                        </v-avatar><br>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col style="text-align: center;">
                        <v-title class="user_name">石井 雄大</v-title><br>
                        <v-subtitle class="user_name_en">Ishii Yuta</v-subtitle>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <img src="../assets/card/qry.png" alt="avatar image" style="max-width: 300px;"/>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<style>

.user_icon {
    margin-top: 50px;
}

.user_name {
    font-size: 50px;
    margin-bottom: 0px;
}

.user_name_en {
    margin-top: 0px;
    font-size: 30px;
}

</style>