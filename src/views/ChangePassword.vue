<template>
  <div class="background-container">
    <div v-if="!showMessage" class="change-password-form">
      <h1>Change Password</h1>
      <BForm>
        <BFormFloatingLabel
          label="Old Password"
          label-for="floatingOldPassword"
          class="my-2"
        >
          <BFormInput
            v-model="oldPassword"
            id="floatingOldPassword"
            type="password"
            placeholder="Old password"
            :state="validationOldPassword"
          />
          <BFormInvalidFeedback :state="validationOldPassword">
            Your old password is required.
          </BFormInvalidFeedback>
        </BFormFloatingLabel>
        <BFormFloatingLabel
          label="New Password"
          label-for="floatingNewPassword"
          class="my-2"
        >
          <BFormInput
            v-model="newPassword"
            id="floatingNewPassword"
            type="password"
            placeholder="Password"
            :state="validationNewPassword"
          />
          <BFormInvalidFeedback :state="validationNewPassword">
            Password is required.
          </BFormInvalidFeedback>
        </BFormFloatingLabel>

        <p v-if="submitted && checkPassword">
          You have the same old & new password. Try again.
        </p>
      </BForm>

      <BButton
        class="change-button"
        pill
        variant="primary"
        @click="changePassword"
        >Change</BButton
      >
    </div>
    <div v-if="showMessage" class="message">
      <h1>Your password has been changed.</h1>
      <BButton @click="home" class="button" pill>Return Home</BButton>
    </div>
    <VideoBeach />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const oldPassword = ref('')
const newPassword = ref('')
const validationNewPassword = computed(() => newPassword.value.length > 0)
const validationOldPassword = computed(() => oldPassword.value.length > 0)
const checkPassword = computed(() => newPassword.value === oldPassword.value)
const showMessage = ref(false)
const submitted = ref(false)

const changePassword = () => {
  submitted.value = true

  if (checkPassword.value) {
    showMessage.value = false
  } else if (!checkPassword.value) {
    showMessage.value = true
  }
}

const router = useRouter()
const home = () => {
  router.push('/')
}
</script>

<style scoped>
.background-container {
  height: 100vh;
}
.change-password-form {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#floatingOldPassword,
#floatingNewPassword {
  padding-left: 25px;
  width: 400px;
  border-radius: 25px;
}
h1 {
  font-size: 3rem;
  font-family: 'Poppins', serif;
  margin-bottom: 40px;
  font-weight: 700;
  color: white;
}
.change-button {
  padding: 7px 50px;
  margin-top: 30px;
}
.message {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.message > h1 {
  font-size: 2rem;
  font-family: 'Poppins', serif;
  margin-bottom: 40px;
  font-weight: 700;
  color: yellow;
}
.button {
  font-family: 'Poppins', serif;
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: black;
  font-weight: 400;
  z-index: 1;
  margin-left: 30px;
}
p {
  color: #dc3545;
  padding-left: 10px;
}
</style>
