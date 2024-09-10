<template>
    <div>
      <h2>TraceID to Plum Diagram</h2>
      <el-input v-model="traceID" placeholder="Enter TraceID"></el-input>
      <el-button @click="generatePlum">Generate</el-button>
      <div v-if="plumDiagram" v-html="plumDiagram"></div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  
  export default {
    name: 'TraceIDtoPlum',
    setup() {
      const traceID = ref('');
      const plumDiagram = ref('');
  
      const generatePlum = async () => {
        if (!traceID.value) {
          ElMessage.warning('Please enter a TraceID');
          return;
        }
  
        try {
          // This is a placeholder for the actual API call
          // You would replace this with your actual API endpoint
          const response = await fetch('/api/generate-plum', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ traceID: traceID.value }),
          });
  
          if (!response.ok) {
            throw new Error('Failed to generate Plum diagram');
          }
  
          const data = await response.json();
          plumDiagram.value = data.plumDiagram;
        } catch (error) {
          console.error('Error generating Plum diagram:', error);
          ElMessage.error('Failed to generate Plum diagram');
        }
      };
  
      return {
        traceID,
        plumDiagram,
        generatePlum,
      };
    },
  };
  </script>

<style scoped>
/* 你可以在这里添加组件特定的样式 */
</style>