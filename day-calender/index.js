const calender = document.querySelector('.calender');

let alreadyMeetings =  [];

let data = [
  {
    startTime: "00:00",
    endTime: "01:30",
    color: "#f6be23",
    title: "#TeamDevkode",
  },
  {
    startTime: "03:30",
    endTime: "07:30",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "04:30",
    endTime: "08:30",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "06:30",
    endTime: "09:00",
    color: "#f6501e",
    title: "Demo",
  },
  {
    startTime: "11:00",
    endTime: "13:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "12:00",
    endTime: "13:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "09:30",
    endTime: "10:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "16:00",
    endTime: "17:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "15:00",
    endTime: "17:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "18:00",
    endTime: "19:00",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "20:30",
    endTime: "22:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "20:30",
    endTime: "22:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
]


function getKey(val) {
  return `${val}:00`;
}

function checkOverlapMettingCount(timeToCheck)
{
  let filterArray = alreadyMeetings.filter((item) => {
    let startTimeHour = Number(item.startTime.split(":")[0]);
    let startTimeMin = Number(item.startTime.split(":")[1]);

    let endTimeHour = Number(item.endTime.split(":")[0]);
    let endTimeMin = Number(item.endTime.split(":")[1]);

    let timeToCheckHour = Number(timeToCheck.split(":")[0]);
    let timeToCheckMin = Number(timeToCheck.split(":")[1]);

    if((timeToCheckHour >= startTimeHour && timeToCheckHour <= endTimeHour) && (timeToCheckMin >= startTimeMin && timeToCheckMin <= endTimeMin ))
    {
      return true;
    }
  });

  return filterArray.length;
}

function createCalender() {
  let iteration = 0;
  let val = 0;

  while (iteration !== 24) {
    if (val > 12) val = 1;
    let createDiv = document.createElement('div');
    createDiv.innerHTML = iteration > 0 ? (iteration < 12 ? `${val} A.M` : `${val} P.M`) : '';
    createDiv.classList.add('calender-row');
    createDiv.dataset.key = getKey(iteration);
    calender.appendChild(createDiv);
    val++;
    iteration++;
  }
}

function tConv24(time24) {
  let ts = time24;
  let H = +ts.substr(0, 2);
  let h = (H % 12) || 12;
  h = (h < 10) ? ("0" + h) : h;  // leading 0 at the left for 1 digit hours
  let ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};

function createMeetingDiv(item) {
  const meetingDiv = document.createElement('div');
  const meetingTitle = document.createElement('div');
  const meetingTime = document.createElement('div');

  const rowKey = item.startTime[0] == 0 ? `${item.startTime[1]}:00` : `${item.startTime.split(":")[0]}:00`;
  const calenderRow = document.querySelector(`[data-key="${rowKey}"]`);
  let getHeight = (Number(item.endTime.split(":")[0]) - Number(item.startTime.split(":")[0])) * 120 + (Number(item.endTime.split(":")[1]) - Number(item.startTime.split(":")[1])) * 2;

  let alreadyMeetingsCount = checkOverlapMettingCount(item.startTime);

  if(alreadyMeetingsCount > 0)
  {
    meetingDiv.style.top = `${alreadyMeetingsCount * 10}px`;
    meetingDiv.style.width = `calc(90% - ${ alreadyMeetingsCount * 50 }px)`;
  }

  meetingDiv.classList.add('meeting-row');
  meetingDiv.style.height = `${getHeight}px`;
  meetingDiv.dataset.key = rowKey;
  meetingDiv.style.backgroundColor = item.color;
  if (item.startTime.split(":")[1] > 0)
  {
    meetingDiv.style.top = `${Number(item.startTime.split(":")[1]) * 2}px`;
  }
  meetingTitle.innerHTML = item.title;
  meetingTime.innerHTML = `${tConv24(item.startTime)}-${tConv24(item.endTime)}`;
  meetingDiv.appendChild(meetingTitle);
  meetingDiv.appendChild(meetingTime);

  alreadyMeetings.push({ startTime: item.startTime, endTime: item.endTime})
  calenderRow.appendChild(meetingDiv);
}

function meetings() {
  let sortedData = sortData(data);
  sortedData.forEach((item) => {
    createMeetingDiv(item);
  })
}

function sortData(data)
{
  const compareFun = (firstItem , secondItem) => {
    let firstItemStartTimeHour = Number(firstItem.startTime.split(":")[0]);
    let firstItemStartTimeMin = Number(firstItem.startTime.split(":")[1]);

    let secondItemStartTimeHour = Number(secondItem.startTime.split(":")[0]);
    let secondItemStartTimeMin = Number(secondItem.startTime.split(":")[1]);

    if ((firstItemStartTimeHour > secondItemStartTimeHour) && (firstItemStartTimeMin >= secondItemStartTimeMin)) {
      return 1;
    }
    else if ((firstItemStartTimeHour < secondItemStartTimeHour) && (firstItemStartTimeMin <= secondItemStartTimeMin))
    {
      return -1;
    }
    else 
    {
      return 0;
    }
  }

  return data.sort(compareFun);
}


function main() {
  createCalender();
  meetings();
}

main();