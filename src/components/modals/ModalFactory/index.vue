<script setup lang="ts">
import { defineAsyncComponent, onBeforeUnmount, onMounted, reactive } from 'vue'

const components = {
  settings: defineAsyncComponent(() => import('../ModalSettings/index.vue'))
}

interface ModalFactoryState {
  active: boolean
  component?: keyof typeof components | null
  props?: {}
}

// extends ModalFactoryState
const state = reactive<ModalFactoryState>({
  active: true,
  component: 'settings',
  props: {}
})

// TODO: Create a composable useModal.ts (generics) andfor type safety
const modal = {
  listen: (callback: any) => callback(state),
  off: (callback: any) => callback(state)
}

onMounted(() => {
  modal.listen(handleModalToogle)
})

onBeforeUnmount(() => {
  modal.off(handleModalToogle)
})

const handleModalToogle = (payload: ModalFactoryState) => {
  state.active = payload.active
  if (payload.active) {
    state.component = payload.component
    state.props = payload.props
  } else {
    state.component = null
    state.props = {}
  }
}
</script>

<template>
  <div>
    <Teleport to="body">
      <div
        v-if="state.active"
        class="bg-black fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-opacity-50"
        @click="handleModalToogle({ active: false })"
      >
        <div class="fixed mx-10 w-3/4 lg:w-1/3" @click.stop>
          <div class="flex flex-col overflow-hidden rounded-lg bg-white">
            <div class="flex flex-col bg-white px-12 py-10">
              <component
                :is="components[state.component as keyof typeof components]"
              />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
