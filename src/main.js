import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css'; // 引入样式
import './main.css';
import router from './router/index'; // 引入路由
import { 
  ElContainer, ElHeader, ElFooter, ElMain, ElAside, ElImage, ElAffix, ElButton, 
  ElSubMenu, ElMenuItemGroup, ElIcon, ElScrollbar, ElMessage, ElDropdownMenu, 
  ElBreadcrumb, ElBreadcrumbItem, ElTable, ElTableColumn, ElLink, ElUpload, ElDialog,
  // 新增的组件
  ElInput, ElForm, ElFormItem, ElMention, ElDatePicker, ElTimePicker, ElCheckbox, ElCheckboxGroup,ElRadioGroup, ElRadio
} from 'element-plus'; // 引入部分组件
import defineComponent from './views/homeEcharts.vue' // 确保路径正确
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; //引入所有组件
const app = createApp(App);

// 注册原有的组件
[ElContainer, ElHeader, ElFooter, ElMain, ElAside, ElImage, ElAffix, ElButton, 
 ElSubMenu, ElMenuItemGroup, ElIcon, ElScrollbar, ElMessage, ElDropdownMenu, 
 ElBreadcrumb, ElBreadcrumbItem, ElTable, ElTableColumn, ElLink, ElUpload, ElDialog,
 // 新增的组件
 ElInput, ElForm, ElFormItem, ElMention, ElDatePicker, ElTimePicker, ElCheckbox, ElCheckboxGroup,ElRadioGroup, ElRadio
].forEach(component => app.component(component.name, component));

app.component(defineComponent.name, defineComponent);

// 注册全部图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 使用 Vue Router
app.use(router); // 注册路由

app.mount('#app');