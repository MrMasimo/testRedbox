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
          required
          @input="onMaskPhone"
          @focus="onMaskPhone"
          @keypress="onMaskPhone"
          @blur="onMaskPhone"
          >
        </div>
        <div class="contacts">
          <label class="header-input">Email</label>
          <input class="input-email" type="email" 
          id="emailOrganizator"
          v-model="form.emailOrganizator" 
          placeholder="ivanov@mail.ru"
          >
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
      <div class="validate-container" v-if= errorsPhoto>{{ errorsPhoto }}</div>
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
            id="dateStart"
            v-model="form.eventDate.dateStart"
            @focus="onMaskDate"
            @input="onMaskDate"
            @keypress="onMaskDate"
            @blur="onMaskDate">
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
            id="dateEnd"
            v-model="form.eventDate.dateEnd"
            @focus="onMaskDate"
            @input="onMaskDate"
            @keypress="onMaskDate"
            @blur="onMaskDate">
          </div>
          <div class="date">
            <label class="header-input">Время окончания</label>
            <input class="input-setting-event-time" type="time" 
            id="eventTimeEnd"
            v-model="form.eventDate.timeEnd">
          </div>
       </form>

      <button class="add-data-button" @click="onAddDateEvent"> + Добавить дату</button>
      <div class="validate-container" v-if="Object.keys(errorsDate).length">
        <p v-for="(error,key) of errorsDate" :key="key">{{ error }}</p>
      </div>
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
    errorsDate: [],
    errorsPhoto: "",
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
      if (!this.onCheckForm())
      return false; 
      
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
      this.onRemovePhoto();
      this.onRemoveDateEvent();
    },
    onLoadPhoto(){
      this.errorsPhoto = "";
      let typeImage = ["image/jpg", "image/png", "image/jpeg"];
      let photo = document.getElementById('photo-input');

      if (photo.files[0]) {
        if (typeImage.includes(photo.files[0].type))
          this.loadPhotoEvent(photo.files[0]);
        else 
          this.errorsPhoto = "Не верный тип файла. Файл не является изображением";
      }

    },
    onRemovePhoto(){
      this.removePhotoEvent();
    },
    onAddDateEvent(){
      if(!this.onCheckDate()) return false;
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
      } else if (this.form.phoneOrganizator.length != 18){
        this.errors.push('Укажите корректный телефон организатора');
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
    onCheckDate(){
      this.errorsDate = [];

      let empty = Object.values(this.form.eventDate).some((value)=> value === "");

      if (Object.values(this.form.eventDate).length !=4 || empty ) {
        this.errorsDate.push('Установите дату и время мероприятия');
      } 

      if (!this.errorsDate.length)
        return true;
      else 
        return false;
        
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    onMaskDate(event) {
      let dateInput = document.getElementById(event.target.id);
      let dateValue = event.target.value;
      if(event.type == "focus" &&  dateInput.classList.contains("invalid")){
        dateInput.classList.remove("invalid");
      }
      if(dateValue){
        /*исправление года не более 4х символов */
        if (dateValue.indexOf("-") == 5){
        this.form.eventDate[dateInput.id] = dateValue.slice(0, 4) + dateValue.slice(5);
        }
      }

      this.errorsDate = [];
      if(event.type == "blur" && event.target.validationMessage){
        dateInput.classList.add("invalid");
        this.errorsDate.push(event.target.validationMessage);
      }

    },
    onMaskPhone(event) {
      let phoneInput = document.getElementById("phoneOrganizator");
      let matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = phoneInput.value.replace(/\D/g, "");

      if (def.length >= val.length) val = def;
      phoneInput.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });

      if (event.type == "blur") {
          if (phoneInput.value.length == 2) phoneInput.value = ""
      } else this.setCursorPosition(phoneInput.value.length, phoneInput)
    },
    setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) 
        elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
        }
    },
  }
}
</script>


<style scoped>
  .main-container{
    background-color: #ffffff ;
    max-width: 1200px;
    margin: auto;
  }

  .organizator-container{
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

  .header-organizator {
    position: relative;
    margin: 30px 30px 10px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    -webkit-text-stroke:  5.6px #211536;
  }

  .header-organizator::before { /* второй слой */
    content: "Организатор";
    position: absolute; /* в том же месте той же ширины */
    left: 0;
    right: 0;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.35px #F8F8FE; 
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
  .input-event-description::placeholder,
  .input-setting-event-time::placeholder,
  .input-setting-event-date::placeholder{
  font-size: 16px;
  line-height: 20px;
  color: #211536;
  opacity: 0.5;
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

input[type=date]::-webkit-calendar-picker-indicator{
    color: #9B63F8;
    opacity: 1;
    display: inline-block;
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.54011 1.15324H11.0769C11.3715 1.15324 11.6661 1.38388 11.6661 1.72986V2.01817C11.6661 2.30647 11.4305 2.59478 11.0769 2.59478H6.54011C6.24551 2.59478 5.95091 2.36414 5.95091 2.01817V1.72986C6.00983 1.38388 6.24551 1.15324 6.54011 1.15324ZM5.47955 11.1287H6.06875C6.36335 11.1287 6.65795 11.3594 6.65795 11.7054V11.8207C6.65795 12.109 6.42227 12.3973 6.06875 12.3973H5.47955C5.18496 12.3973 4.89036 12.1667 4.89036 11.8207V11.7054C4.89036 11.4171 5.18496 11.1287 5.47955 11.1287ZM8.54339 11.1287H9.13259C9.42719 11.1287 9.72179 11.3594 9.72179 11.7054V11.8207C9.72179 12.109 9.48611 12.3973 9.13259 12.3973H8.54339C8.24879 12.3973 7.95419 12.1667 7.95419 11.8207V11.7054C7.95419 11.4171 8.24879 11.1287 8.54339 11.1287ZM11.6072 11.1287H12.1964C12.491 11.1287 12.7856 11.3594 12.7856 11.7054V11.8207C12.7856 12.109 12.5499 12.3973 12.1964 12.3973H11.6072C11.3126 12.3973 11.018 12.1667 11.018 11.8207V11.7054C11.018 11.4171 11.3126 11.1287 11.6072 11.1287ZM2.41572 1.78752V2.07583C2.41572 2.30647 2.29788 2.53712 2.0622 2.59478C1.70868 2.71011 1.473 3.05608 1.473 3.45971V13.8389C1.473 14.0695 1.59084 14.3001 1.7676 14.4731C1.94436 14.6461 2.18004 14.7614 2.41572 14.7614H15.3192C15.8495 14.7614 16.2619 14.3578 16.2619 13.8389V3.45971C16.2619 3.22906 16.1441 2.99842 15.9673 2.82543C15.9084 2.76777 15.7905 2.65245 15.6727 2.59478C15.437 2.53712 15.3192 2.30647 15.3192 2.07583V1.78752C15.3192 1.61453 15.3781 1.44155 15.5549 1.32622C15.7316 1.2109 15.9084 1.2109 16.0851 1.26856C16.4387 1.38389 16.7333 1.55687 17.0279 1.84518C17.4403 2.24881 17.676 2.82543 17.676 3.45971V13.8389C17.676 15.1651 16.2619 16.203 15.0246 16.203H2.41572C1.7676 16.203 1.1784 15.9147 0.707039 15.511C0.2946 15.0497 0 14.4731 0 13.8389V3.45971C0 2.4218 0.707039 1.55687 1.64976 1.26856C1.82652 1.2109 2.00328 1.2109 2.18004 1.32622C2.29788 1.44155 2.41572 1.61453 2.41572 1.78752ZM8.54339 8.7646H9.13259C9.42719 8.7646 9.72179 8.99525 9.72179 9.34122V9.45655C9.72179 9.74486 9.48611 10.0332 9.13259 10.0332H8.54339C8.24879 10.0332 7.95419 9.80252 7.95419 9.45655V9.34122C7.95419 8.99525 8.24879 8.7646 8.54339 8.7646ZM11.6072 8.7646H12.1964C12.491 8.7646 12.7856 8.99525 12.7856 9.34122V9.45655C12.7856 9.74486 12.5499 10.0332 12.1964 10.0332H11.6072C11.3126 10.0332 11.018 9.80252 11.018 9.45655V9.34122C11.018 8.99525 11.3126 8.7646 11.6072 8.7646ZM5.47955 8.7646H6.06875C6.36335 8.7646 6.65795 8.99525 6.65795 9.34122V9.45655C6.65795 9.74486 6.42227 10.0332 6.06875 10.0332H5.47955C5.18496 10.0332 4.89036 9.80252 4.89036 9.45655V9.34122C4.89036 8.99525 5.18496 8.7646 5.47955 8.7646ZM5.47955 6.34281H6.06875C6.36335 6.34281 6.65795 6.57345 6.65795 6.91943V7.03475C6.65795 7.32306 6.42227 7.61137 6.06875 7.61137H5.47955C5.18496 7.61137 4.89036 7.38072 4.89036 7.03475V6.91943C4.89036 6.63112 5.18496 6.34281 5.47955 6.34281ZM8.54339 6.34281H9.13259C9.42719 6.34281 9.72179 6.57345 9.72179 6.91943V7.03475C9.72179 7.32306 9.48611 7.61137 9.13259 7.61137H8.54339C8.24879 7.61137 7.95419 7.38072 7.95419 7.03475V6.91943C7.95419 6.63112 8.24879 6.34281 8.54339 6.34281ZM11.6072 6.34281H12.1964C12.491 6.34281 12.7856 6.57345 12.7856 6.91943V7.03475C12.7856 7.32306 12.5499 7.61137 12.1964 7.61137H11.6072C11.3126 7.61137 11.018 7.38072 11.018 7.03475V6.91943C11.018 6.63112 11.3126 6.34281 11.6072 6.34281ZM14.1997 0.576619V3.6327C14.1997 3.92101 13.964 4.20932 13.6105 4.20932H13.3159C13.0213 4.20932 12.7267 3.97867 12.7267 3.6327V0.576619C12.7267 0.288309 12.9624 0 13.3159 0H13.6105C13.964 0 14.1997 0.230647 14.1997 0.576619ZM4.89036 0.576619V3.6327C4.89036 3.92101 4.65468 4.20932 4.30116 4.20932H4.06548C3.77088 4.20932 3.47628 3.97867 3.47628 3.6327V0.576619C3.47628 0.288309 3.71196 0 4.06548 0H4.36008C4.65468 0 4.89036 0.230647 4.89036 0.576619Z' fill='%239B63F8'/%3E%3C/svg%3E");
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

input[type=time]::-webkit-calendar-picker-indicator{
    color: #9B63F8;
    opacity: 1;
    display: inline-block;
    background-image: url("data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.498 4.86347C14.1624 5.02582 14.022 5.42964 14.1844 5.76506C14.6279 6.68133 14.8527 7.66896 14.8527 8.70159C14.8527 12.4242 11.8241 15.4528 8.10149 15.4528C4.37891 15.4528 1.35025 12.4242 1.35025 8.70159C1.35025 4.97901 4.37891 1.95035 8.10149 1.95035C9.64409 1.95035 11.0932 2.45405 12.2927 3.40691C12.5836 3.63915 13.009 3.59052 13.2412 3.29862C13.4735 3.00688 13.4249 2.58196 13.1328 2.35005C11.7128 1.22149 9.92594 0.600098 8.10149 0.600098C3.63456 0.600098 0 4.23466 0 8.70159C0 13.1685 3.63456 16.8031 8.10149 16.8031C12.5684 16.8031 16.203 13.1685 16.203 8.70159C16.203 7.46375 15.9327 6.2775 15.3996 5.17713C15.2376 4.84089 14.8325 4.70079 14.498 4.86347Z' fill='%239B63F8'/%3E%3Cpath d='M8.10139 3.30054C7.72872 3.30054 7.42627 3.60299 7.42627 3.97566V8.70153C7.42627 9.0742 7.72872 9.37666 8.10139 9.37666H11.477C11.8497 9.37666 12.1521 9.0742 12.1521 8.70153C12.1521 8.32886 11.8497 8.02641 11.477 8.02641H8.77652V3.97566C8.77652 3.60299 8.47406 3.30054 8.10139 3.30054Z' fill='%239B63F8'/%3E%3C/svg%3E");
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

.setted-date-event-container{
margin: 0px 30px 25px 30px;
  height: 145px;
}

.validate-container{
  margin: 0px 30px 10px 0px;
  color: #e04848;
}

.invalid{ 
  box-shadow: 0 0 10px #e04848;
}

</style>
