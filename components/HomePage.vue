<template>
    <v-container>
      <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
      align-tabs="center"
    >
      <v-tab value="one">Mathces</v-tab>
      <v-spacer></v-spacer>
      <v-tab value="two">New Matches</v-tab>
      <v-spacer></v-spacer>
      <v-tab value="three">Shortlist</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          <div>
          <v-row>
            <v-col>
             <v-img
                :src="`https://picsum.photos/500/300?image`" width="200px" ></v-img>
            </v-col>
            <v-col  class="lg:w-40">
              <p>
                4/432,
                ganthipuram temple,
                trichy-620102,
                Lorem ipsum dolor sit amet.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="md:text-right lg:text-left">
                <span class="mdi mdi-star-check-outline text-h5  bg-green rounded-2xl px-2 py-1  border border-green-400"></span>
                <span class="mdi mdi-message-processing-outline  bg-gray  rounded-2xl px-2 py-1 ml-3 border border-black text-h5 md-18"></span>
              </div>
            </v-col>
            <v-col>
              <div class="flex  border border-black bg-green rounded-3xl px-5 py-2">
                <span class="mdi mdi-heart-plus text-xl "></span>
                <h2 class="font-bold uppercase text-1xl mt-1  ml-3 ">Interest Record</h2>
              </div>
              
            </v-col>
           
          </v-row>
              <br>
              <hr>
        </div>
        
        <div class="mt-3">
          <v-row>
            <v-col>
             <v-img
                :src="`https://picsum.photos/500/300?image`" width="200px" ></v-img>
            </v-col>
            <v-col cols="5">
              <p>
                4/432,
                ganthipuram temple,
                trichy-620102,
                Lorem ipsum dolor sit amet.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="md:text-right lg:text-left">
                <span class="mdi mdi-star-check-outline text-h5  bg-green rounded-2xl px-2 py-1  border border-green-400"></span>
                <span class="mdi mdi-message-processing-outline  bg-gray  rounded-2xl px-2 py-1 ml-3 border border-black text-h5 md-18"></span>
              </div>
            </v-col>
            <v-col>
              <div class="flex  border border-black bg-green rounded-3xl px-5 py-2">
                <span class="mdi mdi-heart-plus text-xl "></span>
                <h2 class="font-bold uppercase text-1xl mt-1  ml-3 ">Interest Record</h2>
              </div>
            </v-col>
          </v-row>
          <br>
          <hr>
        </div>
        <div class="mt-3">
          <v-row>
            <v-col>
             <v-img
                :src="`https://picsum.photos/500/300?image`" width="200px" ></v-img>
            </v-col>
            <v-col cols="5">
              <p>
                4/432,
                ganthipuram temple,
                trichy-620102,
                Lorem ipsum dolor sit amet.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="md:text-right lg:text-left">
                <span class="mdi mdi-star-check-outline text-h5  bg-green rounded-2xl px-2 py-1  border border-green-400"></span>
                <span class="mdi mdi-message-processing-outline  bg-gray  rounded-2xl px-2 py-1 ml-3 border border-black text-h5 md-18"></span>
              </div>
            </v-col>
            <v-col>
              <div class="flex  border border-black bg-green rounded-3xl px-5 py-2">
                <span class="mdi mdi-heart-plus text-xl "></span>
                <h2 class="font-bold uppercase text-1xl mt-1  ml-3 ">Interest Record</h2>
              </div>
            </v-col>
          </v-row>
        </div>
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>