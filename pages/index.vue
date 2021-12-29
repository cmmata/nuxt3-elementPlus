<template>
  <el-main>
    <el-row>
      <el-col :span="4">
      </el-col>
      <el-col :span="16">
        <div class="main-content">
          <Articles />
        </div>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import Articles from '../components/Articles'
export default {
  name: 'PortalIndex',
  components: { Articles }
}
</script>

<style scoped>

</style>
