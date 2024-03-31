import { useState } from 'react';
import {
  add,
  eachDayOfInterval,
  format,
  startOfMonth,
  endOfMonth,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  startOfToday,
} from 'date-fns';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/system';

interface SxPropsType {
  [key: string]: SxProps<Theme> | SxPropsType
}

const styles: SxPropsType = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  header: {
    textAlign: 'center',
  },
  month: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  day: {
    display: 'grid',
    textAlign: 'center',
    color: 'text.secondary',
    gridTemplateColumns: 'repeat(7, 1fr)',
  },
  calendar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    rowGap: 1,
  },
  isToday: {
    color: 'warning.light',
  },
  isSelected: {
    color: 'common.white',
    backgroundColor: 'primary.main',
  },
  isStart: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  isEnd: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  isWithin: {
    color: 'common.white',
    backgroundColor: 'primary.light',
    borderRadius: 0,
  },
  notSameMonth: {
    color: 'text.disabled',
  },
};

function App() {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState<{start?: Date, end?: Date}>({});
  const [currentMonth, setCurrentMonth] = useState<string>(format(today, 'yyyy-MMM'));

  const firstDayOfMonth = startOfMonth(currentMonth);
  
  const days = eachDayOfInterval({  
    start: add(firstDayOfMonth, { days: -getDay(firstDayOfMonth) }),
    end: add(endOfMonth(firstDayOfMonth), { days: 6 - getDay(endOfMonth(firstDayOfMonth)) }),
  });

  const onDateClick = (day: Date) => {
    setSelectedDate(prevSelected => {
      const {start, end} = prevSelected;
      if(!start) {
        return { start: day, end: undefined };
      }
      if(!end) {
        if(start <= day) {
          return { start, end: day };
        } else {
          return { start: day, end: undefined };
        } 
      }
      return { start: day, end: undefined};
    });
  };

  const handleMouthChange = (months: 1 | -1) => () => {
    setCurrentMonth(format(add(firstDayOfMonth, { months }), 'yyyy-MMM'))
  };

  const checkDateSx = (day: Date): SxProps<Theme> | undefined => {
    const sx = [];
    if (!isSameMonth(day, firstDayOfMonth)) {
      sx.push(styles.notSameMonth)
    }
    if (selectedDate.start && isEqual(day, selectedDate.start)) {
      sx.push(styles.isStart, styles.isSelected);
    }
    if (selectedDate.end && isEqual(day, selectedDate.end)) {
      sx.push(styles.isEnd, styles.isSelected);
    }
    if (selectedDate.start && selectedDate.end && day > selectedDate.start && day < selectedDate.end) {
      sx.push(styles.isWithin);
    }
    if (isToday(day)) {
      sx.push(styles.isToday);
    }
    return sx as SxProps<Theme> | undefined;
  };

  return (
    <Container sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant='h1' gutterBottom>Date Range Picker</Typography>
      </Box>
      <Box>
        <Box>
          <Box sx={styles.month}>
            <Button onClick={handleMouthChange(-1)}>{'<'}</Button>
            <Typography variant='h3' gutterBottom>{format(firstDayOfMonth, 'yyyy MMMM')}</Typography>
            <Button onClick={handleMouthChange(1)}>{'>'}</Button>
          </Box>

          <Box sx={styles.day}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <Typography key={day} variant='h5' gutterBottom>{day}</Typography>
            ))}
          </Box>
          
          <Box sx={styles.calendar}>
            {days.map((day) => (
              <Button
                key={day.toString()}
                onClick={() => onDateClick(day)}
                sx={checkDateSx(day)}
              >
                {format(day, 'd')}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App
