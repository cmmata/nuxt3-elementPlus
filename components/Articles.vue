<script setup>
const articles = [
  {
    'id': 1,
    'title': 'Example 1',
    'paragraph': 'Lorem ipsum dolor'
  },
  {
    'id': 2,
    'title': 'Example 2',
    'paragraph': 'Lorem ipsum dolor'
  }
]
</script>
<template>
  <el-carousel
    :interval="5000"
    arrow="always"
  >
    <el-carousel-item v-for="article in articles" :key="article.id">
      <el-card
        shadow="always"
        :body-style="{ padding: '0px' }"
      >
        <div class="bottom">
          <h1>{{ article.title }}</h1>
          <p>{{ article.paragraph }}</p>
        </div>
      </el-card>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Articles'
}
</script>

<style scoped>

</style>
