<template>
    <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
    >
    <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-primary"
        show-arrows
    >
        <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
        >
        <!-- <v-card
            color="grey-lighten-1"
            :class="['ma-4', selectedClass]"
            height="200"
            width="100"
            @click="toggle"
        > -->
        <v-img
            src="data:image/jpeg;base64,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"
            :class="['ma-4', selectedClass]"
            height="100"
            width="200"
            @click="toggle"
            cover
            >
            <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
                <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
                ></v-icon>
            </v-scale-transition>
            </div>
        <!-- </v-card> -->
        </v-img>
        </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
        <v-sheet
        v-if="model != null"
        height="200"
        >
        <div class="d-flex fill-height align-center justify-center">
            <h3 class="text-h6">
            Selected {{ model }}
            </h3>
        </div>
        </v-sheet>
    </v-expand-transition>
    </v-sheet>
</template>

<script>
export default {
data: () => ({
    model: null,
}),
}
</script>
