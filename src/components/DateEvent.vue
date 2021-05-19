<template>
    <div class="setted-date-container">
        <form class="form-setted-event-date">
          <div class="date">
            <label class="header-input">Дата начала</label>
            <input class="input-setted-event-date" type="date"
            readonly
            v-model="date.dateStart">
          </div>
          <div class="date">
            <label class="header-input">Время начала</label>
            <input class="input-setted-event-time" type="time"
            readonly
            v-model="date.timeStart">
          </div>
          <div class = "line">
          </div>
          <div class="date">
            <label class="header-input">Дата окончания</label>
            <input class="input-setted-event-date" type="date"
            readonly
            v-model="date.dateEnd">
          </div>
          <div class="date">
            <label class="header-input">Время окончания</label>
            <input class="input-setted-event-time" type="time"
            readonly
            v-model="date.timeEnd">
          </div>
       </form>

      <div class="closet" @click="removeEmitDateEvent">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16663 1.16669L12.6571 12.6572M12.9857 1.16669L1.4952 12.6572" stroke="white" stroke-width="2"/>
        </svg>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DateEvent',
  props: {
    date:{
      type:Object,
      required: true
    }
  },
  methods: {
    removeEmitDateEvent(){
      this.$emit("removeDateEvent" ,  this.date.id);
    }
  },
}
</script>

<style scoped>

  .setted-date-container{
    position: relative;
    margin-top:40px;
    background-color: #FAF7FE;
    padding-left: 30px ;
    padding-right: 25px ;
  }

  .form-setted-event-date{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: flex-end;
  }

  @media screen and (max-width: 685px) { 
      .form-setted-event-date{
      flex-direction: column;  }
  }

  .date{
    width: 254px;
  }

  .header-input{
    margin: 30px 30px 10px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  .input-setted-event-date{
    margin-bottom: 22px;
    padding: 18px 16px 20px 25px;
    border: 1px solid #CDB1FB;
    border-radius: 4px;
    width: 100%;
  }

  .input-setted-event-time{
    margin-bottom: 22px;
    padding: 18px 16px 20px 25px;
    border: 1px solid #CDB1FB;
    border-radius: 4px;
    width: 100%;
    text-align: end;
  }

  .line{
  width: 22px;
  height: 2px;
  background:  #CDB1FB;
  border-radius: 5px;
  margin-bottom: 52px;
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


</style>