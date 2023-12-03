<script setup>
import { onMounted, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance(); // 获取全局 this对象

onMounted(() => {});

// 网易云API 调用测试
function getMusicApi() {
  proxy.$axios
    .get("/user/account")
    .then((res) => {
      console.log(res.data);
    })
    .catch((rej) => {
      proxy.$message.error(rej.response.data.msg ?? "请求失败");
    });
}
</script>

<template>
  <div class="musicCls">
    网易云API测试页面
    <el-button @click="getMusicApi" type="primary">接口测试</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
