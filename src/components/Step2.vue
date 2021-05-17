<template> 
  <div class="main-container">
      <!-- Warning-->
    <div class="warning-container">
      <div class="warning-icon-container">!</div>
      <p class="warning-message">Проверьте ваше мероприятие на наличие ошибок, если все в порядке - отправляйте на модерацию.</p>
    </div>
    <!-- Event-->
    <div class="event-info-container">
      <div class="event-raiting">
        {{getInfoEvent.eventRaiting}}
      </div>
      <div class="event-common-info">
        <div class="event-header">{{getInfoEvent.eventHeader}}</div>
        <div class="event-address">{{getInfoEvent.cityOrganizator}},{{getInfoEvent.eventAddress}}</div>
        <div class="event-date">{{getDateEvent.dateStart}}</div>
        <div class="event-time">{{getDateEvent.timeStart}}</div>
        <div class="text-contact">Контакты</div>
        <div class="event-phone">{{getInfoEvent.phoneOrganizator}}</div>
        <div class="event-email">{{getInfoEvent.emailOrganizator}}</div>
        <div class="event-organizator">{{getInfoEvent.nameOrganizator}}</div>
        <div class="text-organizator">Организатор мероприятия</div>
      </div>
      <div class="event-photo" :style="setPhoto">
      </div>
    </div>
    <div class="event-description">
      {{getInfoEvent.eventDescription}}
    </div>
    <!-- Buttons-->
    <div class="buttons-container">
      <button class="cancel-button" @click=onBack>Назад</button>
      <button class="continue-button">Отправить на модерацию</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Step2',
  computed:{
    ...mapGetters("dateEvent", ["getDateEvent"]),
    ...mapGetters("infoEvent", ["getInfoEvent"]),
    ...mapGetters("photoEvent", ["getPhotoEvent"]),
    setPhoto(){
      return {
        "background-image": `url(${this.getPhotoEvent})`,
        "background-size": "cover"
              };
    },
  },
  methods:{
    ...mapActions("infoEvent", ["removeEvent"]),
    onBack(){
      this.removeEvent();
    }
  }
}
</script>

<style scoped>
  .main-container{
    background-color: #ffffff ;
    max-width: 1200px;
    margin: auto;
  }

  .event-info-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: flex-start;
    margin: 60px 30px 30px 30px;
  }

  .event-raiting{
    width: 48px;
    height: 48px;
    text-align: center;
    background-color: #351767;
    color: #fff;
    padding-top: 14px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .event-common-info{
    text-align: left;
  }

  .event-address,
  .event-date,
  .event-time{
    margin-bottom: 14px;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #211536;
    opacity: 0.6;}

  .event-phone,
  .event-email{
    margin-bottom: 10px;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #211536;
    opacity: 0.6;
  }

  .event-organizator{
    margin-top: 25px;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #211536;
  }

  .text-contact{
    margin-top: 23px;
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #211536;
  }

  .text-organizator{
    margin-top: 0px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    align-items: center;
    color: #8E69CC;
  }

  .event-organizator{
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #211536;}

  .event-photo{
    width: 630px;
    height: 420px;
  }

  .event-description{
    margin: 0px 30px;
  }

  .buttons-container{
    margin: 35px 30px 40px 30px;
  }

  .warning-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 30px 40px 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.301);
    align-content: center;
  }

  .warning-icon-container{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #FF2998;
    margin: 24px;
    font-weight: bold;
    font-size: 32px;
    line-height: 24px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 11px;
  }


  .warning-message{
    margin: 35px 0px 34px 0px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #211536;
  }

  .cancel-button,
  .continue-button{
  width: 285px;
  height: 58px;
  margin-right:20px;
  border-color: #9B63F8;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.cancel-button{
  background-color: #ffffff;
  color: #211536;
}

.continue-button{
  background-color: #9B63F8;
  color: #fff;
}
</style>