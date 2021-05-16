<template>
  <div class="loaded-photo-container" >
    <div class="loaded-photo" :style ="setPhoto">
          <div class="closet" @click=removeEmitPhoto >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16663 1.16669L12.6571 12.6572M12.9857 1.16669L1.4952 12.6572" stroke="white" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <p class="description-photo">Главная фотография (обложка мероприятия)</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'LoadedPhoto',
  props: {
  },
  computed:{
    ...mapGetters("photoEvent", ["getPhotoEvent"]),
    setPhoto(){
      return {
        "background-image": `url(${this.getPhotoEvent})`,
        "background-size": "cover"
              };
    }
  },
  methods:{
    removeEmitPhoto(){
      this.$emit("removePhoto");
    }
  },
}
</script>

<style scoped>

.loaded-photo{
  position: relative;
  width: 126px;
  height: 126px;
  border-radius: 4px;
  border: 4px solid #000;
}

.description-photo{
    width: 126px;
    margin-top: 17px;
    margin-bottom: 0px;
    font-size: 10px;
    line-height: 14px;
    color: #211536;
    opacity: 0.7;
}

  .closet{
    position: absolute;
    top: -15px;
    right: -16px;
    width: 30px;
    height: 30px;
    background: #351767;
    border-radius: 50%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .loaded-photo-container{
    margin-left: 20px;
  }
</style>