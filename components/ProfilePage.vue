<template>
    <v-container>
        

        <v-row>
            <v-col >
                <v-avatar color="grey"   size="180"  rounded="0">
                    <v-img cover src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></v-img>
                </v-avatar>
                <v-row class="ml-3 mt-5">
                    <v-btn class="hover:underlined hover:text-blue-500">Add/Editphoto</v-btn>
                </v-row>
            </v-col>
            <v-col class="py-10" >
                <h2>Manoj</h2>
                <h2>34</h2>
                <h2>Hindu, Mahrathi</h2>
                <h2>Chennai, TamilNadu, India</h2>
                <h2>+91-7397157014</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <h1>Basic Details</h1>
            </v-col>
            <v-col cols="6" class="text-center">
                <v-btn class="bg-blue" v-if="!loggedIn" @click="AuthPageVue">Edit</v-btn>
                <v-btn class="bg-blue" v-else>Close</v-btn>
            </v-col>
        </v-row>
        <v-card>
        <v-card-text>
        <v-row >
            <v-col cols="8">
               <v-row>
                    <v-col>Name</v-col>
                    <v-col>:</v-col>
                    <v-col>Manoj</v-col>
               </v-row>
               <v-row>
                    <v-col>Age</v-col>
                    <v-col>:</v-col>
                    <v-col>34</v-col>
               </v-row>
               <v-row>
                    <v-col>Languages</v-col>
                    <v-col>:</v-col>
                    <v-col>Tamil</v-col>
               </v-row>
               <v-row>
                    <v-col>Marital Status</v-col>
                    <v-col>:</v-col>
                    <v-col>Unmarried</v-col>
               </v-row>
            </v-col>
        </v-row>
        </v-card-text>
    </v-card>
    </v-container>
</template>