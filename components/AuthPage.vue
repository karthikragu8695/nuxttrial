<template>
    <v-container  >
        <v-form fast-fail @submit.prevent>
        <v-card>
            <v-card-text>
              <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-0">
              <!-- <v-app-bar> 
                <label for="menu-toggle"  class="cursor-pointer md:hidden block">
                </label>
                  <v-app-bar-title> MatriMony </v-app-bar-title>
                <div class="text-4xl">
                  <v-btn  v-model=show @click="show=true" size="large" class="text-orange px-3"  color="white">Login </v-btn>
                </div>
                </v-app-bar> -->
                </div>
                <v-row class="mt-5">
                    <v-col cols="12">
                        <v-text-field
                         label="Name"
                         v-model="firstName"
                         :rules="firstNameRules"
                         variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-radio-group inline   >
                            <v-radio label="Male"  class="border border-black pr-5"  value="one"></v-radio>
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
                    <v-col cols="12">
                        <v-select
                            label="Marital Status"
                            :items="['Never Married', 'Windower', 'Divorced', 'Awaiting Divorce']"
                            variant="outlined">
                        </v-select>
                    </v-col>
                    <v-col>
                    <v-select
                        label="Caste"
                        :items="['Intercaste', 'Irani', 'Others', 'Parsi','Dont wish to specify']"
                        variant="outlined">
                    </v-select>
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
                            label="Education"
                            :items="['UG', 'PG', 'SSLC','HSLC','Diplomo',]"
                            variant="outlined"
                            ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" >
                        <v-autocomplete
                            label="Profession"
                            v-model="Profession"
                            :rules="ProfessionRules"
                            :items="['DOCTOR', 'IT', 'NON IT','BUSSINESS','CIVIL','GOVERMENT JOB','OTHERS']"
                            variant="outlined"
                            ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Rashi"
                        v-model="Rashi"
                        :rules="RashiRules"
                         variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Nadchathiram"
                        v-model="Nadchathiram"
                        :rules="NadchathiramRules"
                         variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Thosam"
                        v-model="Thosam"
                        :rules="ThosamRules"
                         variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" class="mt-5 ml-5">
                      <v-row >
                       <h2 class="text-h6">siblings</h2>
                      </v-row>
                    </v-col>
                    <v-col cols="6"  class="mt-5">
                      <v-row  class=" mx-auto text-center">
                        <v-text-field label="Brother"
                         variant="outlined"></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="6"  class="mt-5">
                      <v-row class=" mx-auto text-center">
                        <v-text-field label="Sister"
                         variant="outlined"></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="6"  class="mt-5">
                      <v-row  class=" mx-auto text-center">
                        <v-text-field label="Father Name"
                         variant="outlined"></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="6"  class="mt-5">
                      <v-row class=" mx-auto text-center">
                        <v-text-field label="Occupation"
                         variant="outlined"></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="6"  class="mt-5">
                      <v-row  class=" mx-auto text-center">
                        <v-text-field label="Mother Name"
                         variant="outlined"></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="6"  class="mt-5">
                      <v-row class=" mx-auto text-center">
                        <v-text-field label="Occupation"
                         variant="outlined"></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Family God"
                         variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Annual income"
                         variant="outlined"></v-text-field>
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
                    <v-col>
                    <v-file-input  prepend-icon="mdi-camera"  variant="outlined" label="Photo Upload"></v-file-input>

                    </v-col>
                    <v-col>
                    <v-file-input    variant="outlined" label="Horoscope Upload"></v-file-input>

                    </v-col>
                </v-row>
                    <v-card-actions>
                        <v-btn   type="submit" @click="add()" class="text-white rounded-3xl" block variant="outlined" color="orange">Register Free</v-btn>
                    </v-card-actions>
            </v-card-text>
        </v-card>
        </v-form> 
    </v-container>
    
</template>
<script>
// import { firebase } from '@/plugins/firebase'
export default {
  
  
    data: () => ({
      Form2:false,
        show:false,
        login:false,
        firstName: '',
        select:null,
        selectDate:null,
        selectMonth:null,
        selectYear:null,
        MaritalStatus:null,
        caste:null,
        Religion:null,
        Education:null,
        Profession:null,
        Fathername:null,
        FamilyGod:null,
        mothername:null,
        Annualincome:null,
        Email: '',
        password: '',
        Registerpassword: '',
        RegisterEmail: '',
        password: '',
        Phone: '',
        Rashi: '',
        Nadchathiram: '',
        Thosam: '',
    //   SelectRules: {[
    //   value => {
    //     if (value) return true

    //     return 'Create Profile for .'
    //   },
    // ],
    // SelectDateRules: [
    //   value => {
    //     if (value) return true

    //     return 'Date is not selected .'
    //   },
    // ],
    // SelectMonthRules: [
    //   value => {
    //     if (value) return true

    //     return 'Month is not selected .'
    //   },
    // ],
    // SelectYearRules: [
    //   value => {
    //     if (value) return true

    //     return 'Year is not selected .'
    //   },
    // ],
    // ProfessionRules: [
    //   value => {
    //     if (value) return true

    //     return 'please select Occupation.'
    //   },
    // ],
    // ReligionRules: [
    //   value => {
    //     if (value) return true

    //     return 'Religion is not selected .'
    //   },
    // ],
    
    //   firstNameRules: [
    //       value => {
    //       if (value?.length > 3) return true

    //       return 'First name must be at least 3 characters.'
    //       },
    //   ],
      
    // EmailRules: [
    //   value => {
    //     if (value) return true

    //     return 'E-mail is requred.'
    //   },
    //   value => {
    //     if (/.+@.+\..+/.test(value)) return true

    //     return 'E-mail must be valid.'
    //   },
    // ],
      
    //   passwordRules: [
    //   value => {
    //     if (value) return true

    //     return 'password is required.'
    //   },
    //   value => {
    //     if (value?.length >= 10) return true

    //     return 'password must be less than 10 characters.'
    //   },
    // ],
      
    //   RegisterpasswordRules: [
    //   value => {
    //     if (value) return true

    //     return 'password is required.'
    //   },
    //   value => {
    //     if (value?.length >= 10) return true

    //     return 'password must be less than 10 characters.'
    //   },
    // ],
    
    // RegisterEmailRules: [
    //   value => {
    //     if (value) return true

    //     return 'E-mail is requred.'
    //   },
    //   value => {
    //     if (/.+@.+\..+/.test(value)) return true

    //     return 'E-mail must be valid.'
    //   },
    // ],
      
    //   passwordRules: [
    //   value => {
    //     if (value) return true

    //     return 'password is required.'
    //   },
    //   value => {
    //     if (value?.length >= 10) return true

    //     return 'password must be less than 10 characters.'
    //   },
    // ],
    
    //   PhoneRules: [
    //   value => {
    //     if (value) return true

    //     return 'password is required.'
    //   },
    //   value => {
    //     if (value?.length >= 10) return true

    //     return 'password must be less than 10 characters.'
    //   },
    // ],
    
    //   RashiRules: [
    //   value => {
    //     if (value) return true

    //     return 'Rashi is required.'
    //   },
    //   value => {
    //     if (value?.length >= 3) return true

    //     return 'Rashi must be less than 3 characters.'
    //   },
    // ],
    
    // NadchathiramRules: [
    //   value => {
    //     if (value) return true

    //     return 'Nadchathiram is required.'
    //   },
    //   value => {
    //     if (value?.length >= 4) return true

    //     return 'Nadchathiram must be less than 4 characters.'
    //   },
    // ],
    
    // ThosamRules: [
    //   value => {
    //     if (value) return true

    //     return 'Thosam is required.'
    //   },
    //   value => {
    //     if (value?.length >= 4) return true

    //     return 'Thosam must be less than 4 characters.'
    //   },
    // ],
    //   }
        }),
        methods:{
        async add(){
            const supabase = useSupabaseClient()
            const { data, error } = await supabase.auth.signUp({
              email: 'example@email.com',
              password: 'example-password',
            })
            if(data) {
                const profile={
                firstName:this.firstName,
                selectDate:this.selectDate,
                selectMonth:this.selectMonth,
                selectYear:this.selectYear,
                Religion:this.Religion,
                Profession:this.Profession
              } 
              const { data, error } = await supabase
              .from('profiles')
              .insert([
                profile,
              ])
  .select()
            }
          
          }
        },
        computed:{
          Profiles(){
            return this.$store.getters.loadedprofile
          }
        },
    }
</script>