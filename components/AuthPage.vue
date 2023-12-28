<template>
    <v-container>
        <v-form fast-fail @submit.prevent>
        
        <v-card>
            <v-card-text>
                <v-row  class="mt-2" >
                    <v-col>
                        <h2>Matrimony</h2>
                    </v-col>
                     <v-spacer></v-spacer>
                     <v-col >
                        <v-btn  v-if="!show" @click="show=true" size="large" class="text-orange px-3"  color="white">Login </v-btn>
                       
                    </v-col>
                </v-row>
                
                <v-row class="mt-10">
                    <v-col cols="12" >
                        <v-autocomplete
                            label="Autocomplete"
                            :items="['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Relative','Friend']"
                            variant="outlined"
                            v-model="select"
                            :rules="SelectRules"
                            ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                         label="Name"
                        v-model="firstName"
                        :rules="firstNameRules"
                        variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-radio-group inline   >
                            <v-radio label="Male" v-model="Radio" :rules="RadioRules" class="border border-black pr-5"  value="one"></v-radio>
                            <v-radio label="Female" class="border border-black pr-5 ml-5"  value="two"></v-radio>
                            </v-radio-group>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-select
                        label="Day"
                        :items="['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15']"
                        variant="outlined"
                        v-model="selectDate"
                        :rules="SelectDateRules"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                        label="Month"
                        v-model="selectMonth"
                        :rules="SelectMonthRules"
                        :items="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec',]"
                        variant="outlined"
                        ></v-select>
                    </v-col>
                    <v-col cols="5">
                        <v-select
                        label="Year"
                        v-model="selectYear"
                        :rules="SelectYearRules"
                        :items="['2002', '2001', '2000', '1999', '1998', '1997','1996','1995','1994','1993','1992','1991','1990']"
                        variant="outlined"
                        ></v-select>
                    </v-col>
                    
                    <v-col cols="12" >
                        <v-autocomplete
                            label="Religion"
                            v-model="Religion"
                            :rules="ReligionRules"
                            :items="['Hindu', 'Muslim', 'Christian']"
                            variant="outlined"
                            
                            ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" >
                        <v-autocomplete
                            label="Mother Tongue"
                            v-model="MotherTongue"
                            :rules="MotherTongueRules"
                            :items="['Tamil', 'Hindi', 'Malayalam']"
                            variant="outlined"
                            ></v-autocomplete>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Mobile Number"
                        v-model="Phone"
                        :rules="PhoneRules"
                         variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Email" 
                        v-model="RegisterEmail"
                        :rules="RegisterEmailRules" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Password"
                        v-model="Registerpassword"
                        :rules="RegisterpasswordRules" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                    <v-card-actions>
                        <v-btn  :loading="loading" type="submit" class="text-white rounded-3xl" block variant="outlined" color="orange">Register Free</v-btn>
                    </v-card-actions>
            </v-card-text>
        </v-card>
        </v-form>
        
        <!------------------dialogue------------------------>
        <v-dialog v-model="show">
                   
                       
                        <div>
                            <v-form fast-fail @submit.prevent>
                            <v-card
                            class="mx-auto pa-12 pb-8"
                            elevation="8"
                            max-width="448"
                            rounded="lg"
                            >
                            <v-row   >
                            <v-col >
                                <h2>Matrimony</h2>
                            </v-col>
                            
                            <v-col>
                                <v-btn size="large"  @click="show=false"  class="text-orange"  color="white">Register Free</v-btn>
                            </v-col>
                        </v-row>
                            <h2>Login</h2>
                            <div class="text-subtitle-1 text-medium-emphasis text-gray-300 mt-5">Mobile No./E-Mail ID</div>

                            <v-text-field
                                density="compact"
                                variant="underlined"
                                v-model="Email"
                                
                                :rules="EmailRules"
                            ></v-text-field>

                            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                                Password

                                <a
                                class="text-caption text-decoration-none text-blue"
                                href="#"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                Forgot login password?</a>
                            </div>

                            <v-text-field
                                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'"
                                density="compact"
                                 variant="underlined"
                                @click:append-inner="visible = !visible"
                                v-model="password"
                                :rules="passwordRules"
                            ></v-text-field>
                            <v-btn
                                block
                                class="mb-8"
                                color="orange"
                                size="large"
                                type="submit"
                                
                            >
                                Log In
                            </v-btn>

                            <v-card-text class="text-center">
                                <a
                                class="text-black text-decoration-none"
                                href="#"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                               Not a member? Register Free 
                                </a>
                            </v-card-text>
                        </v-card>
                        </v-form>
                    </div>
                   
        </v-dialog>
        
        
    </v-container>
    
</template>
<script>
export default {
    data: () => ({
        show:false,
        login:false,
        firstName: '',
        select:null,
        selectDate:null,
        selectMonth:null,
        selectYear:null,
        Religion:null,
        Radio:null,
        MotherTongue:null,
        SelectRules: [
        value => {
          if (value) return true

          return 'Create Profile for .'
        },
      ],
      SelectDateRules: [
        value => {
          if (value) return true

          return 'Date is not selected .'
        },
      ],
      SelectMonthRules: [
        value => {
          if (value) return true

          return 'Month is not selected .'
        },
      ],
      SelectYearRules: [
        value => {
          if (value) return true

          return 'Year is not selected .'
        },
      ],
      RadioRules: [
        value => {
          if (value) return true

          return 'select genter .'
        },
      ],
      ReligionRules: [
        value => {
          if (value) return true

          return 'Religion is not selected .'
        },
      ],
      MotherTongueRules: [
        value => {
          if (value) return true

          return 'Mother Tongue is not selected .'
        },
      ],
        firstNameRules: [
            value => {
            if (value?.length > 3) return true

            return 'First name must be at least 3 characters.'
            },
        ],
        Email: '',
      EmailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
        password: '',
        passwordRules: [
        value => {
          if (value) return true

          return 'password is required.'
        },
        value => {
          if (value?.length >= 10) return true

          return 'password must be less than 10 characters.'
        },
      ],
        Registerpassword: '',
        RegisterpasswordRules: [
        value => {
          if (value) return true

          return 'password is required.'
        },
        value => {
          if (value?.length >= 10) return true

          return 'password must be less than 10 characters.'
        },
      ],
      RegisterEmail: '',
      RegisterEmailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
        password: '',
        passwordRules: [
        value => {
          if (value) return true

          return 'password is required.'
        },
        value => {
          if (value?.length >= 10) return true

          return 'password must be less than 10 characters.'
        },
      ],
      Phone: '',
        PhoneRules: [
        value => {
          if (value) return true

          return 'password is required.'
        },
        value => {
          if (value?.length >= 10) return true

          return 'password must be less than 10 characters.'
        },
      ],
        }),
  }

</script>