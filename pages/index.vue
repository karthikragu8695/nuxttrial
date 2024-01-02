<template>
	<v-container>
		<v-card>
		<v-row class="px-2">
			<v-col cols="12" class="2" >
			<h2 >All Matches</h2>
			<p>Lorem ipsum dolor sit amet Deleniti, tempora!</p>
		</v-col>
		</v-row>
		
		<v-col cols="12">
   			<v-sheet
				class="mx-auto"
				max-width="1000"
			>
				<v-slide-group
				v-model="model"
				class="pa-4"
				center-active
				
				>
				<v-slide-group-item
					v-for="n in 15"
					:key="n"
					v-slot="{ isSelected, toggle }"
				>
					<v-card
					:color="isSelected ? 'primary' : 'grey-lighten-1'"
					class="ma-4"
					height="200"
					width="100"
					@click="toggle"
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
					</v-card>
				</v-slide-group-item>
				</v-slide-group>
			</v-sheet>
			</v-col>
				
		</v-card>
		<v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
         Show All
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          lines="two"
          subheader
        >
          <v-list-subheader>User Controls</v-list-subheader>
          <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
          <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          lines="two"
          subheader
        >
          <v-list-subheader>General</v-list-subheader>
          <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
            <template v-slot:prepend>
              <v-checkbox v-model="notifications"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
            <template v-slot:prepend>
              <v-checkbox v-model="sound"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
            <template v-slot:prepend>
              <v-checkbox v-model="widgets"></v-checkbox>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
	</v-container>

  <v-card
    class="mx-auto"
    max-width="425"
  >
    <v-list lines="two">
      <v-list-subheader>Today</v-list-subheader>

      <v-list-item v-for="profile in profiles" :key="profile.id"
        prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
        >
        <template v-slot:subtitle>
            <span class="font-weight-bold">{{ profile.name }}</span><br>
            <span class="font-weight-bold">{{ profile.age }}</span>
            <span class="font-weight-bold">{{ profile.profession }}</span>
            <span class="font-weight-bold">{{ profile.rasi }}</span><br>
        </template>
        <v-btn class="bg-red ">Show Details</v-btn>
      </v-list-item>
      <v-dialogue>
        
      </v-dialogue>
    </v-list>
  </v-card>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        profiles: [
          {
            
            id: 1,
            name: 'Karthik',
            age: 20,
            profession: 'Doctor',
            rasi: 'Thulam',
          },
          {
            id: 2,
            name: 'mathan',
            age: 21,
            profession: 'Developer',
            rasi: 'meth',
          },
          {
            id: 3,
            name: 'mohan',
            age: 22,
            profession: 'Trinner',
            rasi: 'mesam',
          },
          {
            id: 4,
            name: 'vaisu',
            age: 23,
            profession: 'HR',
            rasi: 'Thulam',
          },
          {
            id: 1,
            name: 'Monika',
            age: 24,
            profession: 'kafkaskfd',
            rasi: 'Thulam',
          },
        ]
      }
    },
  }

</script>