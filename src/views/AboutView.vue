<script setup>
import { onMounted, ref } from "vue";
import axios from "../api";

let chatGptMsg = ref("");

function getData() {
  const url = "https://api.openai-hk.com/v1/chat/completions";
  const headers = {
    Authorization: "Bearer hk-itygio100000847948fa705f83dda7e440b3f64fb97467d2",
  };
  const data = {
    max_tokens: 1200,
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    top_p: 1,
    presence_penalty: 1,
    messages: [
      //   {
      //     role: "system",
      //     content: "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.",
      //   },
      {
        role: "user",
        content: "给我介绍下你自己吧",
      },
    ],
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      const result = response.data;
      chatGptMsg.value = result.choices[0].message.content;
    })
    .catch((error) => {
      console.error(error);
    });
}
function submit() {
  getData();
}
onMounted(() => {
    // 将AI返回信息 存入local本地，刷新即渲染
});
</script>

<template>
  <div class="test333">
    <button @click="submit">发送</button>
    <p>{{ chatGptMsg }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
