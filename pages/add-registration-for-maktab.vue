<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Maktab Registration</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Maktab Registration</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Contact Start -->
    <div class="container-fluid contact py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
          <h1 class="display-3">Maktab Registration</h1>
<!--          <p class="mb-0">Please enter your contact information to receive emails with important news and updates from BAIS.</p>-->
        </div>
        <form @submit.prevent="store()" @keydown="form.onKeydown($event)">
          <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="col-sm-6">
              <label >Full Name <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Full Name" name="name" v-model="form.name">
              <div class="error" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
            </div>
            <div class="col-sm-3">
              <label >Age <span style="color: red">*</span></label>
              <input type="number" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('age') }" placeholder="Your Age" v-model="form.age">
              <div class="error" v-if="form.errors.has('age')" v-html="form.errors.get('age')" />
            </div>
            <div class="col-sm-3">
              <label >Gender <span style="color: red">*</span></label>
              <select name="gender" id="gender" v-model="form.gender" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('gender') }">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div class="error" v-if="form.errors.has('gender')" v-html="form.errors.get('gender')" />
            </div>
            <div class="col-sm-3">
              <label >Date of Birth <span style="color: red">*</span></label>
              <input type="date" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('date_of_birth') }" placeholder="Your Date of Birth" v-model="form.date_of_birth">
              <div class="error" v-if="form.errors.has('date_of_birth')" v-html="form.errors.get('date_of_birth')" />
            </div>
            <div class="col-sm-3">
              <label >Previous Islamic Education <span style="color: red">*</span></label>
              <select name="previous_education" id="previous_education" v-model="form.previous_education" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('previous_education') }">
                <option value="">Select</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              <div class="error" v-if="form.errors.has('previous_education')" v-html="form.errors.get('previous_education')" />
            </div>
            <div class="col-sm-6">
              <label >If yes, please provide details(Name, location, and contact number of institution)</label>
              <input type="text" class="form-control bg-transparent p-3"  placeholder="Enter" v-model="form.previous_education_details">
            </div>
            <div class="col-sm-12">
              <hr>
            <p style="margin: 0;background: #559f5b;color: white;padding: 10px;width: 30%">Additional Info</p>
            </div>
            <div class="col-sm-6">
              <label >Father’s Name <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('father_name') }" placeholder="Your Father’s Name" v-model="form.father_name">
              <div class="error" v-if="form.errors.has('father_name')" v-html="form.errors.get('father_name')" />
            </div>
            <div class="col-sm-6">
              <label >Mother’s Name <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('mother_name') }" placeholder="Your Mother’s Email" v-model="form.mother_name">
              <div class="error" v-if="form.errors.has('mother_name')" v-html="form.errors.get('mother_name')" />
            </div>
            <div class="col-sm-6">
              <label >Address <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Your Address" v-model="form.address">
              <div class="error" v-if="form.errors.has('address')" v-html="form.errors.get('address')" />
            </div>
            <div class="col-sm-6">
              <label >Email <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('father_email') }" placeholder="Email Email" v-model="form.father_email">
              <div class="error" v-if="form.errors.has('father_email')" v-html="form.errors.get('father_email')" />
            </div>
            <div class="col-sm-6">
              <label >Father’s Phone Number <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('father_phone') }" placeholder="Your Father’s Phone" v-model="form.father_phone">
              <div class="error" v-if="form.errors.has('father_phone')" v-html="form.errors.get('father_phone')" />
            </div>
            <div class="col-sm-6">
              <label >Mother’s Phone Number <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('mother_phone') }" placeholder="Your Mother’s Phone" v-model="form.mother_phone">
              <div class="error" v-if="form.errors.has('mother_phone')" v-html="form.errors.get('mother_phone')" />
            </div>
            <div class="col-sm-6">
              <label >Allergies/Medical Conditions <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('medical_condition') }" placeholder="Allergies/Medical Conditions" v-model="form.medical_condition">
              <div class="error" v-if="form.errors.has('medical_condition')" v-html="form.errors.get('medical_condition')" />
            </div>
            <div class="col-sm-12">
              <hr>
              <p style="margin: 0;background: #559f5b;color: white;padding: 10px;width: 30%">Emergency Contact</p>
            </div>
            <div class="col-sm-4">
              <label >Name <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('emergency_contact_name') }" placeholder="Emergency Contact Name" v-model="form.emergency_contact_name">
              <div class="error" v-if="form.errors.has('emergency_contact_name')" v-html="form.errors.get('emergency_contact_name')" />
            </div>
            <div class="col-sm-4">
              <label >Contact Number <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('emergency_contact_number') }" placeholder="Emergency Contact Number" v-model="form.emergency_contact_number">
              <div class="error" v-if="form.errors.has('emergency_contact_number')" v-html="form.errors.get('emergency_contact_number')" />
            </div>
            <div class="col-sm-4">
              <label >Relationship with Student(s) <span style="color: red">*</span></label>
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('relation_to_student') }" placeholder="Relationship with Student(s)" v-model="form.relation_to_student">
              <div class="error" v-if="form.errors.has('relation_to_student')" v-html="form.errors.get('relation_to_student')" />
            </div>
            <div class="col-sm-12">
              <hr>
              <p style="margin: 0;background: #559f5b;color: white;padding: 10px;width: 30%">Agreement</p>
            </div>
            <div class="col-sm-12">
              <p> I certify that the information on this form is complete and accurate. As
                parent/guardian of the child(ren) registered above, I release Baitul Aman Islamic
                Society and individuals, from liability in the event of personal injury or accident
                caused to the child(ren) while he/she is at any excursion or after the teaching
                hours. Students will not be permitted to leave early or arrive late without a written
                and signed note from the parent/guardian. I (we) agree to see that my enrolled
                child(ren) are punctually brought and picked up on time. I (we) agree to inform the
                management, in writing, of any changes in the mailing address or the contact
                number(s). I (we) agree to contact the Madrasa Principal (Sh. Rizwan Shariff) for
                any other queries or issues related to the madrasa. I/we have read, understood
                and will abide by the rules and regulations of the madrasa.</p>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="form.apply">
              <label class="form-check-label" for="flexCheckDefault">Tick all that apply</label>
              <div class="error" v-if="form.errors.has('apply')" v-html="form.errors.get('apply')" />
            </div>
            <div class="col-12 text-center">
              <button class="btn btn-primary border-0 py-3 px-5" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="app" v-if="isLoader">
      <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
import Form from 'vform'
import {base_url} from "~/plugins/base_url";

export default {
  name: "mailing-list.vue",
  auth:false,
  head() {
    return {
      title: "Maktab Registration | Baitul Aman"
    };
  },
  data(){
    return {
      form: new Form({
        name:'',
        gender:'',
        age:'',
        date_of_birth:'',
        previous_education:'',
        previous_education_details:'',
        father_name:'',
        mother_name:'',
        address:'',
        father_email:'',
        father_phone:'',
        mother_phone:'',
        medical_condition:'',
        emergency_contact_name:'',
        emergency_contact_number:'',
        relation_to_student:'',
        apply:'',
      }),
      isLoader: false
    }
  },
  methods: {
    store(){
      this.form.post( base_url + 'api/store-maktab-registration').then((response)=>{
        if (response.data.status === 'success'){
          this.$router.go(this.$router.currentRoute)
          this.$toaster.success("Successfully Inserted");
        }
      }).catch((error)=>{
        //
      })
    },
  }
}
</script>

<style scoped>
.error{
  color: red;
  font-size: 12px;
}
</style>
