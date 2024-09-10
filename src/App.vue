<template>
  <div class="common-layout">
    <el-container class="el-container">

      <el-aside class="el-aside">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']" :router=true background-color="#409EFF">
          <el-sub-menu index="1">
            <template #title><el-icon><message /></el-icon><span class="custom-title">FE编程练习</span></template>
            <el-menu-item-group>
              <!-- <template #title><span class="custom-title">El-plus基础组件</span></template> -->
              <el-menu-item index="1-1" @click="navigateToOption('1-1')">buttonTest</el-menu-item>
              <el-menu-item index="1-2" @click="navigateToOption('1-2')">borderTest</el-menu-item>
              <el-menu-item index="1-3" @click="navigateToOption('1-3')">linkIcon</el-menu-item>
              <el-menu-item index="1-4" @click="navigateToOption('1-4')">formTest</el-menu-item>
            </el-menu-item-group>

        
            <!-- <el-sub-menu index="1-4">
              <template #title>
                <span class="custom-title">
                  Option4
                </span>
              </template> -->
              <!-- <el-menu-item index="1-4-1" @click="navigateToOption('1-4-1')">Option 4-1</el-menu-item> -->
            <!-- </el-sub-menu> -->
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title><el-icon><icon-menu /></el-icon>Igloo testPlatform</template>
            <el-menu-item-group>
              <!-- <template #title><span class="custom-title">testTool</span></template> -->
              <el-menu-item index="2-1" @click="navigateToOption('2-1')">searchTable</el-menu-item>
              <el-menu-item index="2-2" @click="navigateToOption('2-2')">AI测试</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group >
              <template #title>
                <span class="custom-title">
                  还没想好
                </span>
              </template> -->
              <!-- <el-menu-item index="2-3" @click="navigateToOption('2-3')">Option 3</el-menu-item> -->
            <!-- </el-menu-item-group> -->
            <!-- <el-sub-menu index="2-4"> -->
              <!-- <template #title>Option 4</template> -->
              <!-- <el-menu-item index="2-4-1" @click="navigateToOption('2-4-1')">Option 4-1</el-menu-item> -->
            <!-- </el-sub-menu> -->
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>Navigator Three
            </template>
            <el-menu-item-group>
              <!-- <template #title>Group 1</template> -->
              <!-- <el-menu-item index="3-1" @click="navigateToOption">Option 1</el-menu-item> -->
              <!-- <el-menu-item index="3-2" @click="navigateToOption">Option 2</el-menu-item> -->
            </el-menu-item-group>
            <!-- <el-menu-item-group title="Group 2"> -->
              <!-- <el-menu-item index="3-3" @click="navigateToOption">Option 3</el-menu-item> -->
            <!-- </el-menu-item-group> -->
            <!-- <el-sub-menu index="3-4"> -->
              <!-- <template #title>Option 4</template> -->
              <!-- <el-menu-item index="3-4-1" @click="navigateToOption">Option 4-1</el-menu-item> -->
            </el-sub-menu>
          <!-- </el-sub-menu> -->
        </el-menu>
      </el-scrollbar>
    </el-aside>

      <el-container>
        <el-header class="header">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px">
                <setting />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Nigulas.泰迪</span>
          </div>
        </el-header>

        <el-main>
          <el-scrollbar>
            <router-view></router-view> <!-- 添加这行 ，这是渲染路由的视图-->
            <!-- 替换为 homeEcharts 组件 -->
            <homeEchartsVue v-if="isTableVisible" />
            <el-table  v-if="isTableVisible" :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
            
          </el-scrollbar>
      </el-main>

        <el-footer class="footer">Igloo 出品! 有问题请联系caibing.yin@iglooinsure.com</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { ElMenu, ElSubMenu, ElMenuItem, ElDropdown, ElDropdownItem, ElScrollbar, ElIcon,  ElFooter, ElHeader, ElContainer,ElDropdownMenu, ElTable, ElTableColumn,
 } from 'element-plus';
import homeEchartsVue from './views/homeEcharts.vue';

export default {
  name: 'App',
  components:{
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElDropdown,
    ElDropdownItem,
    ElScrollbar,
    ElIcon,
    ElFooter,
    ElHeader,
    ElContainer,
    IconMenu,
    Message,
    Setting,
    ElDropdownMenu,
    ElTable,
    ElTableColumn,
    homeEchartsVue,
  },

  setup() {
    const router = useRouter(); // 获取 router 实例
    const item = {
      date: '2024-08-29',
      name: '尹才兵',
      address: 'No. 189, Grove St, Los Angeles',
    };
    const tableData = ref(Array.from({ length: 5 }).fill(item));
    const isTableVisible = ref(true); // 新增状态标志

    // 修改 navigateToOption 函数为 setup 的内部函数
    const navigateToOption = (option) => {
      isTableVisible.value = false; // 默认隐藏表格
      console.log('Navigating to option:', option);
      switch(option) {
        case '1-1':
          router.push({ path: '/buttonTest' });
          break;
        case '1-2':
          router.push({ path: '/borderTest' });
          break;
        case '1-3':
          router.push({ path: '/linkIcon' });
          break;
        case '1-4':
          router.push({ path: '/FormTest' });
          break;
        case '2-1':
          router.push({ path: '/searchTable' });
          break;
        default:
          isTableVisible.value = true; // 其他情况下显示表格
          break;
    }
  }

    return { tableData, navigateToOption,isTableVisible}; // 确保 tableData 被返回
  },

  
}

</script>




<style scoped>
 .custom-title {
  color: black;  /* 你可以根据需要修改颜色 */
   }

/* .el-menu .el-sub-menu.is-opened > .el-sub-menu__title {
  color: black;
} */
.el-container {
  height: 100%; /* 确保容器的高度为100% */
}
 .header{
  text-align: right; 
  font-size: 12px;
  background-color: #409EFF; /* 设置背景颜色为黑色 */
  color: white; /* 可选：设置文本颜色为白色以增强可读性 */
}
.common-layout {
  height: 100%; /* 确保 .common-layout 填满整个页面 */
}
  .footer {
  text-align:center; 
  font-size: 12px;
  font-style: italic;
  background-color: #409EFF; /*设置背景颜色为黑色*/
  color: white; /* 可选：设置文本颜色为白色以增强可读性 */

}
.el-aside {
  width: 200px; /* 去掉了引号 */
  color: rgba(14, 1, 1, 0); /* 字体颜色为白色 */
  background-color: #40a0ff; 
  padding: 15px; /* 增加内边距，使内容不紧贴边缘 */
  font-size: 16px; /* 设置字体大小 */
  display: flex;
  /* 可选样式 */
  border-right: 1px solid rgba(255, 255, 255, 0.1); /* 增加右边框以分隔 */
  
  /* 设定hover状态 */
  transition: background-color 0.3s; /* 添加过渡效果 */
}

.el-aside a {
  color: #120505; /* 链接颜色为白色 */
  text-decoration: none; /* 去掉链接的下划线 */
}

.el-aside a:hover {
  color: #9d2d47; /* 鼠标悬停时改变链接颜色 */
}
.el-sub-menu {
  width:"200px";
  color: #070200;
  /* background: #000000; */ 
  background-color:#40a0ff;;

}
.main {
  background-color:white; /* 设置 el-main 的背景颜色为白色或其他颜色 */
  padding: 0%;
}

/* 不要动*/
.el-container {
  height: 100%; /* 确保容器的高度为100% */
}
</style>