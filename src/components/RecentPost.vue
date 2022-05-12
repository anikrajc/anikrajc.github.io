<template>
  <v-col cols="12">
    <base-card :link="item.link">
      <v-card-text>
        <div>{{ getTimeAgo(item.pubDate) }}</div>
        <p class="text-h5 text--primary">{{ item.title }}</p>

        <div class="text--primary">
          {{ item["content:encodedSnippet"].substring(0, 200) }}
        </div>

        <div class="mt-4">
          <v-chip
            class="mr-2"
            outlined
            v-for="(tag, index) in item.categories"
            :key="index"
            disabled
          >
            {{ tag }}
          </v-chip>
        </div>
      </v-card-text>
    </base-card>
  </v-col>
</template>
<script>
import BaseCard from "@/components/base/BaseCard.vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

relativeTime;
export default {
  components: { BaseCard },
  props: ["item"],
  methods: {
    getTimeAgo(time) {
      return dayjs(time).fromNow();
    },
  },
};
</script>
