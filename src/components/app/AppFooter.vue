<template>
  <template>
    <div>
      <Teleport to="body">
        <div
          v-if="state.isActive"
          class="bg-black fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-opacity-50"
          @click="handleModalToogle({ status: false })"
        >
          <div class="fixed mx-10" :class="state.width" @click.stop>
            <div
              class="animate__animated animate__fadeInRight animate__faster flex flex-col overflow-hidden rounded-lg bg-white"
            >
              <div class="flex flex-col bg-white px-12 py-10">
                <component
                  :is="state.component"
                  :props="state.props"
                  :width="state.width"
                />
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </template>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue'

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

const state = reactive({
  component: null,
  isActive: false,
  props: {},
  width: DEFAULT_WIDTH
})

const modal = {
  listen: (_callback: Function) => {},
  off: (_callback: Function) => {}
}

onMounted(() => {
  modal.listen(handleModalToogle)
})

onBeforeUnmount(() => {
  modal.off(handleModalToogle)
})

const handleModalToogle = (payload) => {
  state.isActive = payload.status
  if (payload.status) {
    state.component = payload.component
    state.props = payload.props
    state.width = payload.width || DEFAULT_WIDTH
  } else {
    state.component = null
    state.props = {}
    state.width = DEFAULT_WIDTH
  }
}
</script>

<style scoped></style>
