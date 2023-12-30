<template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-row>
                    <v-select
                        label="Marital Status"
                        :items="['Never Married', 'Windower', 'Divorced', 'Awaiting Divorce']"
                        variant="outlined">
                    </v-select>
                </v-row>
                <v-row>
                    <v-select
                        label="Caste"
                        :items="['Intercaste', 'Irani', 'Others', 'Parsi','Dont wish to specify']"
                        variant="outlined">
                    </v-select>
                </v-row>
                <v-row>
                    <v-col>
                        <h2 class="text-h6">Willing to marry from other communities?</h2>
                    </v-col>
                    <v-col>
                        <v-radio-group inline>
                            <v-radio label="No" color="orange" value="one"></v-radio>
                            <v-radio label="Yes" color="orange" value="two"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
                <v-row>
                    <h2 class="text-h5 font-bold">Groom's Current Location</h2>
                </v-row>
                <v-row class="mt-10">
                    <v-select
                        label="COUNTRY LIVING IN"
                        :items="['India', 'united states of america', 'saudi arabia', 'malaysia']"
                        variant="outlined">
                    </v-select>
                </v-row>
                <v-row>
                    <v-select
                        label="STATE LIVING IN"
                        :items="['Andra pradesh', 'bihar', 'Daman', 'Assam','Goa' ]"
                        variant="outlined">
                    </v-select>
                </v-row>
                <v-row>
                    <v-select
                        label="CITY LIVING IN"
                        :items="[]"
                        variant="outlined">
                    </v-select>
                </v-row>
                <v-row class=" justify-center">
                    <v-btn size="large" class="text-center bg-orange rounded-2xl ">Continue</v-btn>
                </v-row>
            

            </v-card-text>
        </v-card>
    </v-container>
</template>

