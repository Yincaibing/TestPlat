<template>
    <div class="parentComponment" title="这是main的父组件">
        <el-container>
            <p>这是父组件中的一段内容</p> 
            <div>
                <p>这是div里面的内容</p>
            </div>
        </el-container>
       <slot></slot>
    </div>
</template>


<script>
export default {
  name: 'parentComponment',
};
</script>

<style scoped>
/* 你的样式 */
</style>