<template>
  <el-main>
    <el-row>
      <el-col :span="4">
        <el-dropdown split-button type="primary" @click="handleClick">
          Dropdown List
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-col :span="16">
        <div class="main-content">
          <Articles />
        </div>
      </el-col>
      <el-col :span="4"> </el-col>
    </el-row>
  </el-main>
</template>

<script>
import Articles from "../components/Articles";
import { ArrowDown } from "@element-plus/icons-vue";

export default {
  name: "PortalIndex",
  components: { Articles, ArrowDown },
};
</script>

<style scoped></style>
