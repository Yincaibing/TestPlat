<!-- src/views/AITesting.vue -->
<template>
  <div class="ai-testing-container">
    <h2>AI 代码分析工具</h2>
    <p>自动分析Go项目并生成技术设计文档</p>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="control-panel">
          <h3>项目配置</h3>
          <el-form :model="form" label-width="120px">
            <el-form-item label="项目路径">
              <el-input v-model="form.projectPath" placeholder="输入Go项目路径"></el-input>
            </el-form-item>
            <el-form-item label="分析深度">
              <el-slider v-model="form.analysisDepth" :min="1" :max="5" :step="1" show-stops></el-slider>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="startAnalysis" :loading="analyzing">开始分析</el-button>
            </el-form-item>
          </el-form>

          <el-progress v-if="analyzing" :percentage="analysisProgress" :format="progressFormat"></el-progress>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card class="result-panel" v-loading="analyzing">
          <template #header>
            <div class="card-header">
              <span>分析结果</span>
              <el-button v-if="analysisComplete" type="primary" size="small" @click="exportDocument">导出文档</el-button>
            </div>
          </template>
          <div v-if="analysisComplete">
            <el-collapse v-model="activeNames">
              <el-collapse-item v-for="(section, index) in documentSections" :key="index" :title="section.title" :name="index">
                <div v-html="section.content"></div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div v-else-if="!analyzing">
            <el-empty description="尚未开始分析"></el-empty>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog v-model="exportDialogVisible" title="导出文档" width="30%">
      <el-form :model="exportForm">
        <el-form-item label="导出格式">
          <el-select v-model="exportForm.format">
            <el-option label="Markdown" value="md"></el-option>
            <el-option label="PDF" value="pdf"></el-option>
            <el-option label="HTML" value="html"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="exportDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmExport">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';

export default {
  name: 'AITesting',
  setup() {
    const form = reactive({
      projectPath: '',
      analysisDepth: 3,
    });

    const analyzing = ref(false);
    const analysisProgress = ref(0);
    const analysisComplete = ref(false);
    const activeNames = ref([0]);
    const documentSections = ref([]);
    const exportDialogVisible = ref(false);
    const exportForm = reactive({
      format: 'md'
    });

    const startAnalysis = () => {
      if (!form.projectPath) {
        ElMessage.warning('请输入项目路径');
        return;
      }
      analyzing.value = true;
      analysisProgress.value = 0;
      analysisComplete.value = false;
      documentSections.value = [];

      // 模拟分析过程
      const interval = setInterval(() => {
        analysisProgress.value += 10;
        if (analysisProgress.value >= 100) {
          clearInterval(interval);
          analyzing.value = false;
          analysisComplete.value = true;
          generateMockResults();
        }
      }, 500);
    };

    const progressFormat = (percentage) => {
      return percentage === 100 ? '完成' : `${percentage}%`;
    };

    const generateMockResults = () => {
      documentSections.value = [
        { title: '1. 系统概览', content: '<p>这是系统概览的内容...</p>' },
        { title: '2. 保单提交流程', content: '<p>这是保单提交流程的内容...</p>' },
        { title: '3. 保单签发', content: '<p>这是保单签发的内容...</p>' },
        { title: '4. 理赔处理', content: '<p>这是理赔处理的内容...</p>' },
        { title: '5. 报销工作流', content: '<p>这是报销工作流的内容...</p>' },
      ];
    };

    const exportDocument = () => {
      exportDialogVisible.value = true;
    };

    const confirmExport = () => {
      ElMessage.success(`文档已导出为 ${exportForm.format.toUpperCase()} 格式`);
      exportDialogVisible.value = false;
    };

    return {
      form,
      analyzing,
      analysisProgress,
      analysisComplete,
      activeNames,
      documentSections,
      exportDialogVisible,
      exportForm,
      startAnalysis,
      progressFormat,
      exportDocument,
      confirmExport,
    };
  },
};
</script>

<style scoped>
.ai-testing-container {
  padding: 20px;
}
.control-panel, .result-panel {
  margin-bottom: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>