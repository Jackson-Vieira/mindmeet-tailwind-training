<template>
  <!-- # START Navbar -->
  <header>
    <Container>
      <nav class="flex items-start py-4">
        <div class="py-1"><LogoBookMark /></div>
        <ul
          class="hidden flex-1 items-center justify-end gap-x-8 text-xs uppercase sm:flex"
        >
          <li v-for="link in navLinks" :key="link.name" class="cursor-pointer">
            <a :href="link.to">{{ link.name }}</a>
          </li>
          <button class="rounded-md bg-red-400 px-7 py-2 uppercase text-white">
            login
          </button>
        </ul>
      </nav>
    </Container>
  </header>
  <!-- # END Navbar -->
  <main>
    <!-- START HERO -->
    <section class="relative">
      <Container
        class="mt-14 flex flex-col-reverse items-center gap-12 lg:flex-row"
      >
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1
            class="mb-4 text-left text-3xl font-semibold tracking-tight text-gray-800 md:text-4xl lg:text-5xl"
          >
            A simple Bookmark Manager
          </h1>
          <p class="mb-6 text-left text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae ipsa officiis esse libero, molestiae blanditiis, modi,
            suscipit id voluptatem nam accusantium nulla aspernatur.
          </p>
          <div class="flex flex-wrap gap-6">
            <button class="btn bg-blue-500 text-white">Get it on Chrome</button>
            <button class="btn bg-gray-100 text-gray-700 shadow-md">
              Get it on Firefox
            </button>
          </div>
        </div>
        <!-- Image -->
        <div class="z-10 mb-10 flex flex-1 justify-center md:mb-16 lg:mb-0">
          <img
            class="h-5/6 w-5/6 sm:h-3/4 sm:w-3/4 md:h-full md:w-full"
            src="./images/illustration-hero.svg"
            alt=""
          />
        </div>
      </Container>
    </section>
    <!-- ENDHERO -->

    <!-- START FEATURES SECTION -->
    <section class="mt-8 py-20 lg:mt-16">
      <!-- FEATURE HEADING -->
      <div class="mx-auto px-2 sm:w-3/4 lg:w-5/12">
        <h1 class="text-center text-3xl">Features</h1>
        <p class="mt-4 text-center text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptate sed soluta, praesentium repellat perspiciatis.
        </p>
      </div>

      <!-- TABS -->
      <div class="mt-8 flex justify-center">
        <ul
          class="-mb-px flex flex-wrap justify-center border-b border-gray-200"
        >
          <li v-for="tab in tabs" :key="tab.name" class="flex-shrink-0">
            <button
              class="inline-block rounded-t-lg border-b-4 border-transparent p-4 hover:border-gray-200"
            >
              {{ tab.name }}
            </button>
          </li>
        </ul>
      </div>

      <!-- TAB CONTENT -->
      <div class="relative mt-8 lg:mt-12">
        <Container class="flex flex-col items-center gap-12 lg:flex-row">
          <div class="z-10 mb-10 flex flex-1 justify-center md:mb-16 lg:mb-0">
            <img
              src="./images/illustration-features-tab-1.svg"
              class="z-10 mb-10 flex flex-1 justify-center md:mb-16 lg:mb-0"
              alt=""
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-3xl font-semibold">Bookmark in one click</h2>
            <p class="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              laboriosam nihil consequatur minus sequi rerum odit quas nulla
              perferendis voluptatum asperiores velit reiciendis, fugit corporis
              quasi minima non provident doloremque!
            </p>
            <button class="btn mt-4 bg-blue-500 text-sm text-white">
              More info
            </button>
          </div>
        </Container>
      </div>
    </section>

    <!-- START BROWSERS -->
    <section class="mt-8 lg:mt-16">
      <!-- FEATURE BROWSERS -->
      <div class="mx-auto px-2 sm:w-3/4 lg:w-5/12">
        <h1 class="text-center text-3xl">Download the extension</h1>
        <p class="mt-4 text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          deserunt. Commodi, fugiat!
        </p>
      </div>

      <!-- CARDS -->
      <div class="relative mt-8 lg:mt-12">
        <div class="flex flex-wrap items-start justify-center gap-12">
          <!-- CARD CHROME -->
          <div
            class="flex flex-col items-center space-y-8 rounded-md p-6 text-center shadow-lg"
          >
            <img
              class="h-32 w-32 rounded-full"
              src="./images/logo-chrome.svg"
              alt="logo chrome"
            />
            <div>
              <h5 class="text-xl font-semibold">Add to chrome</h5>
              <p class="text-sm text-gray-700">Minimum version 62</p>
            </div>
            <div>
              <button class="btn bg-blue-500 capitalize text-white">
                add & install extension
              </button>
            </div>
          </div>
          <!-- CARD CHROME -->
          <div
            class="flex flex-col items-center space-y-8 rounded-md p-6 text-center shadow-lg lg:mt-4"
          >
            <img
              class="h-32 w-32 rounded-full"
              src="./images/logo-chrome.svg"
              alt="logo chrome"
            />
            <div>
              <h5 class="text-xl font-semibold">Add to chrome</h5>
              <p class="text-sm text-gray-700">Minimum version 62</p>
            </div>
            <div>
              <button class="btn bg-blue-500 capitalize text-white">
                add & install extension
              </button>
            </div>
          </div>
          <!-- CARD CHROME -->
          <div
            class="flex flex-col items-center space-y-8 rounded-md p-6 text-center shadow-lg lg:mt-8"
          >
            <img
              class="h-32 w-32 rounded-full"
              src="./images/logo-chrome.svg"
              alt="logo chrome"
            />
            <div>
              <h5 class="text-xl font-semibold">Add to chrome</h5>
              <p class="text-sm text-gray-700">Minimum version 62</p>
            </div>
            <div>
              <button class="btn bg-blue-500 capitalize text-white">
                add & install extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- START FAQ  -->
    <section class="mt-8 lg:mt-16">
      <!-- FAQ Heading -->
      <Container class="mx-auto flex flex-col items-center">
        <div>
          <h1 class="text-center text-3xl">Frequently Asked Questions</h1>
          <p class="mt-4 text-center text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            deserunt. Commodi, fugiat!
          </p>
        </div>
        <!-- Faq Accordion -->
        <div class="relative mt-8 sm:w-3/4 lg:mt-12 lg:w-8/12">
          <ul class="">
            <li
              class="flex cursor-pointer flex-col border-b border-gray-200 py-4 first:border-t"
              v-for="(item, index) in faq"
              :key="index"
              @click="toggleFaq(index)"
            >
              <h3 class="flex gap-2 text-xl font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                  :class="{
                    'rotate-90': activeFaq === index
                  }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>

                {{ item.question }}
              </h3>
              <Transition name="slide-fade">
                <p
                  class="mt-2 p-2 text-gray-700"
                  v-show="activeFaq === index"
                  v-html="item.answer"
                ></p>
              </Transition>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <!-- Contact -->
    <section class="mt-8 bg-blue-600 py-8 text-white lg:mt-16">
      <Container
        class="relative flex flex-col items-center justify-center space-y-12"
      >
        <div class="mx-auto px-2 text-center sm:w-3/4 lg:w-5/12">
          <p class="mb-4 text-xs uppercase tracking-[0.2rem] antialiased">
            35.000 + Already joined
          </p>
          <h1 class="mx-auto max-w-md text-3xl">
            Stay up-to-date with what we're doing
          </h1>
        </div>

        <div>
          <form class="flex items-center space-x-4">
            <input
              type="email"
              id="email"
              required
              class="block w-80 rounded-md py-3 pl-3 text-gray-500 placeholder:text-sm placeholder:text-gray-500"
              placeholder="Enter your email address"
              autocomplete="off"
            />
            <button
              type="submit"
              class="rounded-lg bg-red-400 px-5 py-3 text-sm"
            >
              Stay up
            </button>
          </form>
        </div>
      </Container>
    </section>
    <footer>
      <Container>
        <nav>
          <div>
            <ul>
              <LogoBookMark />
              <li>Features</li>
              <li>Contact</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Link1</li>
              <li>Link2</li>
            </ul>
          </div>
        </nav>
      </Container>
    </footer>
  </main>
</template>

<script setup lang="ts">
import Container from '@/components/app/Container.vue'
import LogoBookMark from '@/components/app/LogoBookMark.vue'
import { ref } from 'vue'

const navLinks = [
  {
    name: 'Features',
    to: '#features'
  },
  {
    name: 'Princing',
    to: '#princing'
  },
  {
    name: 'Contact',
    to: '#Contact'
  }
]

const tabs = [
  {
    name: 'Simple Bookmarking',
    component: {}
  },
  {
    name: 'Speedy Searching',
    component: {}
  },
  {
    name: 'Easy Sharing',
    component: {}
  }
]

const activeFaq = ref(0)

const toggleFaq = (index: number) => {
  if (activeFaq.value === index) {
    activeFaq.value = -1
  } else {
    activeFaq.value = index
  }
}

const faq = [
  {
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam nihil consequatur minus sequi rerum odit quas nulla perferendis voluptatum asperiores velit reiciendis, fugit corporis quasi minima non provident doloremque!'
  },
  {
    question: 'How can I request a new?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam nihil consequatur minus sequi rerum odit quas nulla perferendis voluptatum asperiores velit reiciendis, fugit corporis quasi minima non provident doloremque!'
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam nihil consequatur minus sequi rerum odit quas nulla perferendis voluptatum asperiores velit reiciendis, fugit corporis quasi minima non provident doloremque!'
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam nihil consequatur minus sequi rerum odit quas nulla perferendis voluptatum asperiores velit reiciendis, fugit corporis quasi minima non provident doloremque!'
  }
]
</script>

<style scoped lang="postcss">
.btn {
  @apply rounded-md px-6 py-3 shadow-md transition duration-300;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
