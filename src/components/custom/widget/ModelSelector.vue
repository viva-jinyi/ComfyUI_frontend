<template>
  <BaseWidgetLayout>
    <template #leftPanel>
      <LeftSidePanel v-model="selectedNavItem" :nav-items="temp_navigation">
        <template #header-icon>
          <i-lucide:puzzle class="text-neutral" />
        </template>
        <template #header-title>
          <span class="text-neutral text-base">{{ t('g.title') }}</span>
        </template>
      </LeftSidePanel>
    </template>

    <template #header>
      <SearchBox v-model:="searchQuery" class="max-w-[384px]" />
    </template>

    <template #content>
      <div class="flex justify-between items-center px-6 pt-2 pb-4">
        <div class="flex gap-2">
          <MultiSelect
            v-model="selectedFrameworks"
            label="Select Frameworks"
            :options="frameworkOptions"
          />
          <MultiSelect
            v-model="selectedProjects"
            label="Select Projects"
            :options="projectOptions"
          />
        </div>
        <div>
          <SingleSelect v-model="selectedFilter" :options="filterOptions">
            <template #label-icon>
              <i-lucide:arrow-up-down class="text-neutral-400" />
            </template>
          </SingleSelect>
        </div>
      </div>
    </template>

    <template #rightPanel>
      <RightSidePanel></RightSidePanel>
    </template>
  </BaseWidgetLayout>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { NavGroupData, NavItemData } from '@/types/custom_components/navTypes'
import { OnCloseKey } from '@/types/custom_components/widgetTypes'

import MultiSelect from '../input/MultiSelect.vue'
import SearchBox from '../input/SearchBox.vue'
import SingleSelect from '../input/SingleSelect.vue'
import BaseWidgetLayout from './layout/BaseWidgetLayout.vue'
import LeftSidePanel from './panel/LeftSidePanel.vue'
import RightSidePanel from './panel/RightSidePanel.vue'

const frameworkOptions = ref([
  { name: 'Vue', value: 'vue' },
  { name: 'React', value: 'react' },
  { name: 'Angular', value: 'angular' },
  { name: 'Svelte', value: 'svelte' }
])

const projectOptions = ref([
  { name: 'Project A', value: 'proj-a' },
  { name: 'Project B', value: 'proj-b' },
  { name: 'Project C', value: 'proj-c' }
])

const filterOptions = ref([
  { name: 'Popular', value: 'popular' },
  { name: 'Newest', value: 'newest' },
  { name: 'Oldest', value: 'oldest' }
])

const temp_navigation = ref<(NavItemData | NavGroupData)[]>([
  { id: 'installed', label: 'Installed' },
  {
    title: 'TAGS',
    items: [
      { id: 'tag-sd15', label: 'SD 1.5' },
      { id: 'tag-sdxl', label: 'SDXL' },
      { id: 'tag-utility', label: 'Utility' }
    ]
  },
  {
    title: 'CATEGORIES',
    items: [
      { id: 'cat-models', label: 'Models' },
      { id: 'cat-nodes', label: 'Nodes' }
    ]
  }
])

const { t } = useI18n()

const { onClose } = defineProps<{
  onClose: () => void
}>()

provide(OnCloseKey, onClose)

const searchQuery = ref<string>('')
const selectedFrameworks = ref([])
const selectedProjects = ref([])
const selectedFilter = ref(filterOptions.value[0])

const selectedNavItem = ref<string | null>('installed')
</script>
