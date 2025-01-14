import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

class CustomTimer {
  selectedDate = null;
  timerInterval = null;

  flatpickrOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: selectedDates => this.onCloseHandler(selectedDates),
  };

  iziToastErrorOptions = {
    title: 'Error',
    message: 'Please choose a date in the future!',
    position: 'topRight',
  };

  constructor({
    startButtonSelector,
    datePickerSelector,
    timeElementsSelectors,
  }) {
    this.startButton = document.querySelector(startButtonSelector);
    this.datePickerElement = document.querySelector(datePickerSelector);

    this.timeElements = {
      days: document.querySelector(timeElementsSelectors.days),
      hours: document.querySelector(timeElementsSelectors.hours),
      minutes: document.querySelector(timeElementsSelectors.minutes),
      seconds: document.querySelector(timeElementsSelectors.seconds),
    };

    flatpickr(this.datePickerElement, this.flatpickrOptions);

    this.startButton.disabled = true;

    this.#initEventListeners();
  }

  #initEventListeners() {
    this.startButton.addEventListener('click', () =>
      this.#startTimer(this.selectedDate)
    );
  }

  #startTimer(selectedDate) {
    this.startButton.disabled = true;
    this.datePickerElement.disabled = true;

    this.#renderTime(selectedDate - Date.now());

    this.timerInterval = setInterval(() => {
      const delta = selectedDate - Date.now();
      if (delta > 0) {
        this.#renderTime(delta);
      } else {
        this.#stopTimer();
      }
    }, 1000);
  }

  #stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    for (const key in this.timeElements) {
      this.timeElements[key].innerHTML = '00';
    }

    this.datePickerElement.disabled = false;
  }

  #convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
      days: Math.floor(ms / day),
      hours: Math.floor((ms % day) / hour),
      minutes: Math.floor(((ms % day) % hour) / minute),
      seconds: Math.floor((((ms % day) % hour) % minute) / second),
    };
  }

  #renderTime(timeDelta) {
    const units = this.#convertMs(timeDelta);
    for (const key in units) {
      this.timeElements[key].innerHTML = units[key]
        .toString()
        .padStart(2, '0');
    }
  }

  onCloseHandler(selectedDates) {
    if (selectedDates[0].getTime() > Date.now()) {
      this.startButton.disabled = false;
      this.selectedDate = selectedDates[0].getTime();
    } else {
      this.startButton.disabled = true;
      iziToast.error(this.iziToastErrorOptions);
    }
  }
}

const timer = new CustomTimer({
  startButtonSelector: '[data-start]',
  datePickerSelector: '#datetime-picker',
  timeElementsSelectors: {
    days: '[data-days]',
    hours: '[data-hours]',
    minutes: '[data-minutes]',
    seconds: '[data-seconds]',
  },
});