<template>
  <div class="main-container">
    <!-- Organizator -->
    <div class="organizator-container">
      <span class ="header-text">Информация об организаторе</span>
      <form class="form-organizator" @submit="onSubmit">
        <label class="header-organizator">Организатор</label>
        <input class="input-organizator" type="text" 
        id="nameOrganizator"
        v-model="form.nameOrganizator" 
        placeholder="Введите организатора"
        >
      </form>
    </div>
    <!-- Organizators contact-->
    <div class="contacts-container">
      <span class ="header-text">Контактные данные</span>
      <form class="form-contacts" @submit="onSubmit">
        <div class="contacts">
          <label class="header-input">Телефон</label>
          <input class="input-phone" type="tel" 
          id="phoneOrganizator"
          v-model="form.phoneOrganizator" 
          placeholder="+7 (999) 555-33-22"
          pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
          >
        </div>
        <div class="contacts">
          <label class="header-input">Email</label>
          <input class="input-email" type="email" 
          id="emailOrganizator"
          v-model="form.emailOrganizator" 
          placeholder="ivanov@mail.ru">
        </div>
        <div class="contacts">
          <label class="header-input">Город организатора</label>
          <input class="input-city" type="text" 
          id="cityOrganizator"
          v-model="form.cityOrganizator" 
          placeholder="Казань">
        </div>
      </form>
    </div>
    <!-- Event-->
    <div class="event-header-container">
      <span class ="header-text">Общая информация</span>
      <form class="form-event-header" @submit="onSubmit">
        <label class="header-input">Название</label>
        <input class="input-event-header" type="text" 
        id="eventHeader"
        v-model="form.eventHeader" 
        placeholder="">
      </form>
    </div>
    <!-- Event photo-->
    <div class="event-photo-container">
      <span class ="header-text">Фотография</span>
      <div class="photo-container">
        <div class="loading-photo-container">
          <label for="photo-input">
          <div class="load-photo">
          <input id="photo-input" type="file" method="post" name="photo" accept="image/*,image/jpeg" @change = onLoadPhoto>
            <svg width="47" height="41" viewBox="0 0 47 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.0107 8.33337L33.6584 7.33064L31.6431 1.59554C31.6431 1.59533 31.643 1.59512 31.6429 1.59491C31.6224 1.53705 31.5944 1.50993 31.5823 1.50091C31.5819 1.50058 31.5815 1.50028 31.5811 1.5H15.4188C15.4185 1.50022 15.4182 1.50045 15.4179 1.50069C15.4062 1.50944 15.3784 1.5363 15.3579 1.59427L34.0107 8.33337ZM34.0107 8.33337H35.0735H44.389C44.8808 8.33337 45.5 8.81416 45.5 9.68046V9.68054V38.1528C45.5 39.0192 44.8807 39.5 44.3889 39.5H2.61108C2.11938 39.5 1.5 39.0192 1.5 38.1527V9.68054C1.5 8.81417 2.11935 8.33337 2.61108 8.33337H11.926H12.9887L13.3411 7.33086L15.3577 1.59466L34.0107 8.33337Z" stroke="#9B63F8" stroke-width="3"/>
            <path d="M13.9799 22.5487C13.9799 16.6273 18.3708 12.0334 23.4988 12.0334C28.6268 12.0334 33.0178 16.6268 33.0178 22.5487C33.0178 28.4707 28.6268 33.0645 23.4988 33.0645C18.3708 33.0645 13.9799 28.4707 13.9799 22.5487Z" stroke="#9B63F8" stroke-width="3"/>
            <path d="M22.1603 16.6711H24.9893V29.1744H22.1603V16.6711Z" fill="#9B63F8"/>
            <path d="M17.9169 24.4856V21.3598H29.2328V24.4856H17.9169Z" fill="#9B63F8"/>
            </svg>
          </div>
          </label>
          <p class="description-photo">Главная фотография (обложка мероприятия)</p>
        </div>
        <template v-if="isHasPhoto">
        <LoadedPhoto @removePhoto="onRemovePhoto" />
        </template>
      </div>
    </div>
    <!-- Event description-->
    <div class="event-description-container">
      <form class="form-event-description" @submit="onSubmit">
        <label class="header-event-descriprion">Подробное описание</label>
        <textarea class="input-event-description" cols="30" rows="10"  
        id="eventDescription" v-model="form.eventDescription"
        ></textarea>
      </form>
    </div>
    <!-- Event date-->
    <div class="event-date-container">
      <template v-if="isHasDate">
        <div class="setted-date-event-container" v-for="date in getDateEvent" v-bind:key="date.id">
          <DateEvent :date=date
          @removeDateEvent="onRemoveDateEvent" />
        </div>
      </template>
      <div class ="setting-event-date-container">
        <form class="form-setting-event-date" @submit="onSubmit">
          <div class="date">
            <label class="header-input">Дата начала</label>
            <input class="input-setting-event-date" type="date" 
            id="eventDateStart"
            v-model="form.eventDate.dateStart"
            date-format:mm.dd.yyyy>
          </div>
          <div class="date">
            <label class="header-input">Время начала</label>
            <input class="input-setting-event-time" type="time" 
            id="eventTimeStart"
            v-model="form.eventDate.timeStart">
          </div>
          <div class = "line">
          </div>
          <div class="date">
            <label class="header-input">Дата окончания</label>
            <input class="input-setting-event-date" type="date" 
            id="eventDateEnd"
            v-model="form.eventDate.dateEnd">
          </div>
          <div class="date">
            <label class="header-input">Время окончания</label>
            <input class="input-setting-event-time" type="time" 
            id="eventTimeEnd"
            v-model="form.eventDate.timeEnd">
          </div>
       </form>
      <button class="add-data-button" @click="onAddDateEvent"> + Добавить дату</button>
      </div>
    </div>
    <!-- Event raiting&address-->
    <div class="event-info-container">
      <form class="form-event-info" @submit="onSubmit">
        <div class="event-info">
          <label class="header-input">Рейтинг мероприятия</label>
          <select size="1" class="input-event-raiting" id="eventRaiting"
          v-model="form.eventRaiting">
          <option v-for="raiting in getRaitings" v-bind:key="raiting.id">{{raiting.title}}</option>
          </select>
        </div>
        <div class="event-info">
          <label class="header-input">Адрес мероприятия</label>
          <input class="input-event-address" type="text" 
          id="eventAddress"
          v-model="form.eventAddress"
          autocomplete="off" >
        </div>
      </form>
    </div>
    <!-- Validate -->
    <div class="validate-container" v-if="Object.keys(errors).length">
      <ul>
        <li v-for="(error,key) of errors" :key="key">{{ error }}</li>
      </ul>
    </div>
    <!-- Buttons-->
    <div class="buttons-container">
      <button class="cancel-button" @click=onReset>Отменить</button>
      <button class="continue-button" @click=onContinue>Далее</button>
    </div>
  </div>
</template>

<script>
import LoadedPhoto from './LoadedPhoto'
import DateEvent from './DateEvent'
import  { mapGetters, mapActions} from 'vuex';

export default {
  name: 'Step1',
  components: {
    LoadedPhoto,
    DateEvent,
  },
  data: () => ({
    errors: [],
    form: {
      nameOrganizator: "",
      phoneOrganizator: "",
      emailOrganizator: "",
      cityOrganizator: "",
      eventHeader: "",
      eventPhoto: "",
      eventDescription: "",
      eventDate: {},
      eventRaiting:"",
      eventAddress: "",
    },
  }),
    computed:{
    ...mapGetters("raitings", ["getRaitings"]),
    ...mapGetters("photoEvent", ["isHasPhoto"]),
    ...mapGetters("dateEvent", ["getDateEvent", "isHasDate"]),
    },
  methods: {
    ...mapActions("photoEvent", ["loadPhotoEvent", "removePhotoEvent"]),
    ...mapActions("dateEvent", ["addDateEvent", "removeDateEvent" ]),
    ...mapActions("infoEvent", ["createEvent"]),
    onSubmit(event){
      event.preventDefault();
    },
    onContinue(){
/*       if (!this.onCheckForm())
        return false; */
      
      let event = JSON.parse(JSON.stringify(this.form));
      this.createEvent(event);
    },
    onReset(event){
      event.preventDefault();
      this.form.nameOrganizator = "";
      this.form.phoneOrganizator = "";
      this.form.emailOrganizator = "";
      this.form.cityOrganizator = "";
      this.form.eventHeader = "";
      this.form.eventPhoto = "";
      this.form.eventDescription = "";
      this.form.eventDate = {};
      this.form.eventRaiting ="";
      this.form.eventAddress = "";
    },
    onLoadPhoto(){
      let photo = document.getElementById('photo-input');
      this.loadPhotoEvent(photo.files[0]);
    },
    onRemovePhoto(){
      this.removePhotoEvent();
    },
    onAddDateEvent(){
      this.addDateEvent(this.form.eventDate);
    },
    onRemoveDateEvent(id){
      this.removeDateEvent(id);
    },
    onCheckForm(){
      this.errors = [];

      if (!this.form.nameOrganizator) {
        this.errors.push('Укажите организатора');
      }

      if (!this.form.phoneOrganizator) {
        this.errors.push('Укажите телефон организатора');
      }

      if (!this.form.cityOrganizator) {
        this.errors.push('Укажите город организатора');
      }

      if (!this.form.eventHeader) {
        this.errors.push('Укажите название мероприятия ');
      }

      if (!this.form.eventDescription) {
        this.errors.push('Укажите описание мероприятия');
      }

      if (!this.form.eventRaiting) {
        this.errors.push('Укажите рейтинг мероприятия');
      }

      if (!this.form.eventAddress) {
        this.errors.push('Укажите адрес проведения мероприятия');
      }

      if (!this.isHasPhoto) {
        this.errors.push('Загрузите фотографию мероприятия');
      }

      if (!this.isHasDate) {
        this.errors.push('Укажите даты мероприятия');
      }

      if (!this.form.emailOrganizator) {
        this.errors.push('Укажите электронную почту.');
      } else if (!this.validEmail(this.form.emailOrganizator)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }

      if (!this.errors.length) {
        return true;
      }
      else return false;
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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

  .organizator-container
  {
    margin: 55px 30px 40px 30px;
  }

  .contacts-container,
  .event-header-container,
  .event-photo-container,
  .event-description-container,
  .setting-event-date-container,
  .event-info-container,
  .buttons-container{
    margin: 0px 30px 40px 30px;
  }

  .form-contacts,
  .form-setting-event-date,
  .form-event-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: flex-end;
  }

  @media screen and (max-width: 685px) { 
    .form-contacts,
    .form-setting-event-date,
    .form-event-info{
    flex-direction: column;  }
  }

  .contacts{
    width :367px;
  }

  .date{
    width: 254px;
  }

  .event-info{
    width: 560px;
  }

  .header-text{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #211536;
  }

  .header-organizator
  {
    margin: 30px 30px 10px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    -webkit-text-stroke: 3.6px #211536;
    -webkit-text-fill-color: transparent;
  }

  .header-input{
    margin: 30px 30px 10px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  .header-event-descriprion{
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  .input-organizator,
  .input-phone,
  .input-city,
  .input-email,
  .input-event-header,
  .input-setting-event-date,
  .input-event-raiting,
  .input-event-address{
    padding: 18px 16px 20px 25px;
    border: 1px solid #CDB1FB;
    border-radius: 4px;
    width: 100%;
  }

  .input-setting-event-time{
    padding: 18px 16px 20px 25px;
    border: 1px solid #CDB1FB;
    border-radius: 4px;
    width: 100%;
    text-align: end;
  }
  
  .input-event-description{
    padding: 18px 30px 20px 25px;
    border: 1px solid #CDB1FB;
    border-radius: 4px;
    width: 100%;
    height: 193px;
    resize: none;
  }

  .input-organizator::placeholder,
  .input-phone::placeholder,
  .input-city::placeholder,
  .input-email::placeholder,
  .input-event-header::placeholder,
  .input-event-description::placeholder{
  font-size: 16px;
  line-height: 20px;
  color: #211536;
  }

  input:focus{
    border-radius: 4px;
    border: 1px solid #CDB1FB;
    box-shadow: none;
   }

  .load-photo{
    width: 126px;
    height: 126px;
    margin-top: 30px;
    background: #F8F8FE;
    border: 4px solid #CDB1FB;
    box-sizing: border-box;
    border-radius: 4px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
;}

  .description-photo{
    width: 126px;
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 10px;
    line-height: 14px;
    color: #211536;
    opacity: 0.7;
  }

 .load-photo input[type=file] {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	position: absolute;
	z-index: -10;
}

.photo-container{
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  align-items: flex-end;
}

.line{
  width: 55px;
  height: 2px;
  background:  #CDB1FB;
  border-radius: 5px;
  margin-bottom: 30px;
}

.add-data-button{
  width: 182px;
  height: 58px;
  margin-top: 35px ;
  border: 1px solid #9B63F8;
  background-color:#ffffff;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
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

invalid{
  color: #9B63F8;
} 

.setted-date-event-container{
margin: 0px 30px 25px 30px;
  height: 145px;
}

.validate-container{
  margin: 0px 30px 10px 30px;
  color: #e04848;
}

</style>
