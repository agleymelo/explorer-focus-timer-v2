import { element } from './elements.js'
import { events } from './events.js'

const {
  buttonPlay,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
  buttonJungle,
  buttonRain,
  buttonCoffee,
  buttonFire,
} = element

const event = events({
  buttonPlay,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
  buttonJungle,
  buttonRain,
  buttonCoffee,
  buttonFire,
})


event.play()
event.stop()
event.increment()
event.decrement()
event.jungle()
event.rain()
event.coffee()
event.fire()
