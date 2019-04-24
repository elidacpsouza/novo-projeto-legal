<template>
  <q-page class="container q-pa-xs">
    <div class="row q-pa-md row items-start q-gutter-md">
      <div class="col-md-3 col-sm-12" v-for="(post,index) in posts" :key="index">
        <q-card class="my-card">
          <q-img :src="post.better_featured_image.source_url"></q-img>
          <div class="q-pa-sm q-gutter-sm">
            <div class="text-h6">{{post.title.rendered}}</div>
          </div>
          <q-card-actions>
            <q-btn
              outline
              style="color: goldenrod;"
              class="full-width"
              label="Detalhes"
              @click="detalhar(post.id)"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'Posts',
  mounted () {
    this.CLEAR_ARTIGO();
    this.setPosts();
  },
  computed: {
    ...mapState('posts', ['posts'])
  },
  methods: {
    ...mapActions('posts', ['setPosts']),
    ...mapMutations('posts', ['CLEAR_ARTIGO']),
    detalhar (id) {
      console.log('rota para id: ', id);
      this.$router.push(`artigo/${id}`);
    }
  }
};
</script>

<style>
</style>
