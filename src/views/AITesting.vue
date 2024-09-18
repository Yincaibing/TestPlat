<!-- src/views/AITesting.vue -->
<template>
  <div class="ai-testing">
    <h2>AI 代码分析</h2>
    <el-form :model="form" label-width="120px" class="project-form">
      <el-form-item label="项目路径" class="project-path-item">
        <el-input v-model="form.projectPath" placeholder="输入项目路径"></el-input>
      </el-form-item>
      <el-form-item label="是否脱敏">
        <el-switch v-model="form.desensitize" active-text="是" inactive-text="否"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="initializeSystem" :loading="initializing">初始化系统</el-button>
      </el-form-item>
    </el-form>

    <div v-if="initialized" class="chat-container">
      <div class="chat-history" ref="chatHistoryRef">
        <div v-for="(message, index) in chatHistory" :key="index" :class="['message', message.type]">
          <strong>{{ message.type === 'user' ? '你：' : 'AI：' }}</strong>
          <p>{{ message.content }}</p>
        </div>
      </div>

      <el-form :model="questionForm" label-width="120px">
        <el-form-item label="问题">
          <el-input 
            v-model="questionForm.question" 
            type="textarea" 
            :rows="4" 
            placeholder="输入你的问题"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="askQuestion" :loading="analyzing">提问</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted, watch } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const form = reactive({
  projectPath: localStorage.getItem('projectPath') || '',
  desensitize: localStorage.getItem('desensitize') === 'true' || true, // 默认为true

});

const questionForm = reactive({
  question: '',
});

const chatHistory = ref(JSON.parse(localStorage.getItem('chatHistory')) || []);
const initializing = ref(false);
const analyzing = ref(false);
const initialized = ref(localStorage.getItem('initialized') === 'true');
const chatHistoryRef = ref(null);

// 监听 projectPath 和 desensitize 的变化并保存到 localStorage
watch(() => form.projectPath, (newPath) => {
  localStorage.setItem('projectPath', newPath);
});

watch(() => form.desensitize, (newValue) => {
  localStorage.setItem('desensitize', newValue);
});

// 监听 chatHistory 的变化并保存到 localStorage
watch(chatHistory, (newHistory) => {
  localStorage.setItem('chatHistory', JSON.stringify(newHistory));
}, { deep: true });

// 监听 initialized 的变化并保存到 localStorage
watch(initialized, (newValue) => {
  localStorage.setItem('initialized', newValue);
});

const initializeSystem = async () => {
  if (!form.projectPath) {
    ElMessage.warning('请输入项目路径');
    return;
  }
  initializing.value = true;
  try {
    await axios.post('http://localhost:5000/initialize', { projectPath: form.projectPath });
    ElMessage.success('系统初始化成功');
    initialized.value = true;
  } catch (error) {
    console.error('初始化失败:', error);
    ElMessage.error('系统初始化失败，请稍后再试');
  } finally {
    initializing.value = false;
  }
};

const askQuestion = async () => {
  if (!questionForm.question) {
    ElMessage.warning('请输入问题');
    return;
  }
  analyzing.value = true;
  chatHistory.value.push({ type: 'user', content: questionForm.question });
  try {
    const response = await axios.post('http://localhost:5000/analyze', { question: questionForm.question });
    chatHistory.value.push({ type: 'ai', content: response.data.answer });
    questionForm.question = ''; // 清空输入框
    await nextTick();
    scrollToBottom();
  } catch (error) {
    console.error('分析失败:', error);
    ElMessage.error('获取答案失败，请稍后再试');
  } finally {
    analyzing.value = false;
  }
};

const scrollToBottom = () => {
  if (chatHistoryRef.value) {
    chatHistoryRef.value.scrollTop = chatHistoryRef.value.scrollHeight;
  }
};

// 在组件挂载时，如果系统已初始化，则重新初始化
onMounted(async () => {
  if (initialized.value) {
    try {
      await initializeSystem();
    } catch (error) {
      console.error('重新初始化失败:', error);
      ElMessage.error('重新初始化失败，请手动初始化系统');
      initialized.value = false;
    }
  }
});
</script>

<style scoped>
.ai-testing {
  padding: 20px;
}
.project-form {
  max-width: 600px;
  margin: 0 auto;
}
.project-path-item {
  margin-bottom: 20px;
}
.project-path-item :deep(.el-form-item__content) {
  justify-content: flex-start;
}
.chat-container {
  margin-top: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  overflow: hidden;
}
.chat-history {
  height: 400px;
  overflow-y: auto;
  padding: 15px;
  background-color: #f9f9f9;
}
.message {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
}
.message.user {
  background-color: #e6f7ff;
}
.message.ai {
  background-color: #f0f9eb;
}
</style>