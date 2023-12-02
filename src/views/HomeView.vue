<script setup>
import { onMounted, ref, onUnmounted } from "vue";

/**
 * 表格懒加载 demo
 */
let metaData = ref([]);
let tableData = ref([]);
let pageIndex = ref(0);
let pageSize = ref(100);
let demo = [];
let loading = ref(false)
async function setData() {
  loading.value = true;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < 10000; i++) {
        metaData.value[i] = {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          index: i + 1,
        };
      }
      resolve(metaData);
    }, 1000);
  }).then(() => {
    getPageList();
  });
}

// 前端分页截断数据
function getPageList() {
  loading.value = true;

  setTimeout(() => {
    pageIndex.value++;
    let data = false ? filterData : metaData;
    let arr = data.value.slice((pageIndex.value - 1) * pageSize.value, pageIndex.value * pageSize.value);
    demo.push(arr);

    tableData.value = demo.flat();
    loading.value = false;
  }, 500);
}
// 表格懒加载
function lazyloading() {
  let dom = document.querySelector(".el-scrollbar__wrap");
  dom.addEventListener("scroll", (v) => {
    const scrollDistance = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
    console.log("鼠标滑动-scrollDistance", scrollDistance.toFixed(0));
    if (scrollDistance <= 2) {
      // 快要到底端触发，加载下一页数据
      getPageList();
    }
  });
}

onMounted(() => {
  setData();
  lazyloading();
});

onUnmounted(() => {});
</script>

<template>
  <div class="content">
    <el-table v-loading="loading" height="300" :data="tableData" style="width: 100%">
      <el-table-column prop="index" label="index" width="180" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<style></style>
