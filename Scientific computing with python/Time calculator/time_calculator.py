def mins_to_hrs(mins):
  hrs = int(mins/60)
  if mins % 60 > 0:
    min_left = mins%60
    if min_left < 10:
      min_left = f"0{min_left}"
    return f"{hrs}:{min_left}"
  else:
    return f"{hrs}:00"
hrs_to_min = lambda hrs: hrs*60
days_in_hrs = lambda hrs: int(hrs/24)
def week_day(day):
  week_days = {
        "sunday": 1,
        "monday": 2,
        "tuesday": 3,
        "wednesday": 4,
        "thursday": 5,
        "friday": 6,
        "saturday": 7,
    }
  return week_days[day]
def week_count(count):
    week_days = {
        1:"sunday",
        2:"monday",
        3:"tuesday",
        4:"wednesday",
        5:"thursday",
        6:"friday",
        7:"saturday",
    }
    if count > 7:
      count -= 7
      return week_count(count)
    return week_days[count]

def time_str_to_min(time_str):
  time, meridiem = None, None
  if len(time_str.split()) > 1:
    time, meridiem =time_str.split()
  else:
    time = time_str
  hr, min = time.split(":")
  
  if meridiem == "AM":
    if hr == "12":
      hr = "0"
    return (int(hr) * 60) + int(min)
  elif meridiem == "PM":
    real_hr = int(hr) + 12
    return (real_hr * 60) + int(min)
  else:
    return (int(hr) * 60) + int(min)
def min_to_time_str(mins):
  time = mins_to_hrs(mins)
  hrs, mins = time.split(":")
  if int(hrs) < 12:
    if hrs == "0":
      hrs = "12"
    return f"{hrs}:{mins} AM"
  if int(hrs) == 12:
    return f"{time} PM"
  if int(hrs) >= 12 and int(hrs) < 24:
    hrs = int(hrs) - 12
    return f"{hrs}:{mins} PM"
  if int(hrs) >= 24:
    days = days_in_hrs(int(hrs))
    rem_hrs = int(hrs)%24
    rem_mins = hrs_to_min(rem_hrs) + int(mins)
    time_str = min_to_time_str(rem_mins)
    return f"{time_str} {days}d"
def day_return_str(count):
  if count == 0:
    return
  elif count == 1:
    return "(next day)"
  else:
    return f"({count} days later)"

def add_time(start, duration, day_arg=None):
  start_in_min = time_str_to_min(start)
  duration_in_min = time_str_to_min(duration)

  total_min = start_in_min + duration_in_min
  time_str = min_to_time_str(total_min)
  day_count = 0
  day = None
  if "d" in time_str:
    time, meridiem, num_of_days = time_str.split()
    day_count = int(num_of_days.replace("d", ""))
    day_str_return = day_return_str(day_count)
    if day_arg is not None:
      day_arg = day_arg.lower()
      get_day_num = week_day(day_arg)
      total_day_count = get_day_num + day_count
      day_after_add = week_count(total_day_count).capitalize()
      return f"{time} {meridiem}, {day_after_add} {day_str_return}"
    else:
      return f"{time} {meridiem} {day_str_return}"
  if day_arg is not None:
    formated_day = day_arg.capitalize()
    return f"{time_str}, {formated_day}"
  
  return time_str


