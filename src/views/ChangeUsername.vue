<template>
  <div class="background-container">
    <div v-if="!showMessage" class="change-username-form">
      <h1>Change Username</h1>
      <BForm>
        <BFormFloatingLabel
          label="Old Username"
          label-for="floatingOldUsername"
          class="my-2"
        >
          <BFormInput
            v-model="oldUsername"
            id="floatingOldUsername"
            type="text"
            placeholder="Old username"
            :state="validationOldUsername"
          />
          <BFormInvalidFeedback :state="validationOldUsername">
            Your old username is required.
          </BFormInvalidFeedback>
        </BFormFloatingLabel>
        <BFormFloatingLabel
          label="New Username"
          label-for="floatingNewUsername"
          class="my-2"
        >
          <BFormInput
            v-model="newUsername"
            id="floatingNewUsername"
            type="text"
            placeholder="Username"
            :state="validationNewUsername"
          />
          <BFormInvalidFeedback :state="validationNewUsername">
            Username is required.
          </BFormInvalidFeedback>
        </BFormFloatingLabel>

        <p v-if="submitted && checkUsername">
          You have the same old & new username. Try again.
        </p>
      </BForm>

      <BButton
        class="change-button"
        pill
        variant="primary"
        @click="changeUsername"
        >Change</BButton
      >
    </div>
    <div v-if="showMessage" class="message">
      <h1>{{ message }}</h1>
      <BButton @click="home" class="button" pill>Return Home</BButton>
    </div>
    <VideoBeach />
  </div>
</template>

<script setup lang="ts">
import { UserStore } from '@/store/user'
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const oldUsername = ref('')
const newUsername = ref('')
const validationNewUsername = computed(() => newUsername.value.length > 0)
const validationOldUsername = computed(() => oldUsername.value.length > 0)
const checkUsername = computed(() => newUsername.value === oldUsername.value)
const showMessage = ref(false)
const submitted = ref(false)

const message = ref('')
const userStore = UserStore()

const changeUsername = () => {
  userStore.username = newUsername.value
  submitted.value = true

  if (checkUsername.value) {
    showMessage.value = false
  } else if (!checkUsername.value) {
    showMessage.value = true
  }
}

watch(
  () => userStore.username,
  (newUsername, oldUsername) => {
    if (newUsername !== oldUsername) {
      message.value = `Your username has been changed from ${oldUsername} to ${newUsername}`
    }
  }
)

const router = useRouter()
const home = () => {
  router.push('/')
}
</script>

<style scoped>
.background-container {
  height: 100vh;
}
.change-username-form {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#floatingOldUsername,
#floatingNewUsername {
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
