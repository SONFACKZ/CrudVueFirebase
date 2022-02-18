<template>
    <div class="row justify-content-center">
        <div class="col-md-4 mt-4 container mt-5 p-5 border shadow p-3 mb-5 bg-white rounded bg-light">
            <h3 class="text-center">Add Contact</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="user.name" id = "name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="user.email" id = "email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="number" v-model="user.phone" id = "phone" class="form-control" required>
                </div>
                <div class="form-group mt-4">
                    <button class="btn btn-primary btn-block">Add Contact</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb';
// import { required, email } from "vuelidate/lib/validators";
    export default {
        // name: 'AddContact',
        data() {
            return {
                user: {
                   name: '',
                   email: '',
                   phone: ''
                },
                // isSubmitted: false
            }
        },
        // validations: {
        //     user: {
        //         name: {
        //             required
        //         },
        //         email: {
        //             required,
        //             email
        //         },
        //         mobile: {
        //             required
        //         },
        //     }
        // },
        methods: {
            onFormSubmit(event) { 
            // //    alert(JSON.stringify(this.user)) 
            //      this.isSubmitted = true;
            //     this.$v.$touch();
            //     if (this.$v.$invalid) {
            //         return;
            //     }
            //     alert("SUCCESS!" + JSON.stringify(this.user));
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("User successfully created!");
                    this.user.name = ''
                    this.user.email = ''
                    this.user.phone = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>