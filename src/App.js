import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import useSound from 'use-sound'
import music from './music/music.mp3'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date(''));
  const [clock, setClock] = React.useState(new Date())
  const [playmusic] = useSound(music)

  const handleDateChange = (date) => {
    setSelectedDate(date);

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    let time = ((hours * 3600) + (minutes*60) + seconds)*1000
  
    let hours1 = date.getHours()
    let minutes1 = date.getMinutes()

    let time1 = ((hours1 * 3600) + (minutes1*60))*1000

    let timeOut = time1-time
    console.log(timeOut)

    setTimeout(()=>{
      alert('TIME')
      playmusic()
    },timeOut)
//если поставим 5000 вместо timeOut он выведет алерт через 5 сек

  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <button
        onClick='stopFunc()'
        >TURN OFF</button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
