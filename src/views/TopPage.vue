<template>
    <v-app>
        <div class="main">
            <h2 class="subtitle">イベントを通じて出会った仲間との繋がりを大切に</h2>
            <h1 class="app-name">Sync Meets</h1>
            <h2>Sync Meatはあなたのイベントでの出会いを記憶し、それを次のアクションへと繋げます</h2>
            <v-container class="btn-area">
                <v-row>
                    <v-col cols="3" offset="3">
                        <v-btn block color="#5E35B1" variant="tonal">
                            Log in
                        </v-btn>
                    </v-col>
                    <v-col cols="3">
                        <v-btn block color="#5E35B1" variant="tonal">
                            Sign in
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>

        </div>
    </v-app>
</template>

<style>

.main {
    text-align: center;
}

.subtitle {
    margin-top: 120px;
}

.app-name {
    font-size: 80px;
    margin-bottom: 30px;
}

.btn-area {
    margin-top: 20px;
}


</style>