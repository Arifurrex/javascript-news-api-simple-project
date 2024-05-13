# link https://timer-js-arifur.netlify.app/


![Screenshot 2024-05-13 130124](https://github.com/Arifurrex/javascript-simple-project-2024/assets/48369328/63fd9b40-aca8-42df-b949-f29451ff171f)

## Date()  
this will return a string of date 'Tue May 07 2024 20:32:27 GMT+0600 (Bangladesh Standard Time)'

## new Date()
Tue May 07 2024 20:32:12 GMT+0600 (Bangladesh Standard Time)

*Date()  এবং new Date() এর মদ্যে diffrent হচ্ছে  Date() string return করে আর new Date() string রিটার্ন করে না*

#### new Date().getTime()
এটা milisecond return করবে 1715092738338

## new Date().getTime()/1000
1000 দিয়ে ভাগ করলে milisecond থেকে second এ কনভার্ট হবে 

## date.setHours(currentHours + futureHours);
 if it's currently 10:30:00 and the user inputs 2 hours, 10 minutes, and 20 seconds, the resulting time would be 12:40:20.

 *date.setHours(currentHours + futureHours);
date.setMinutes(currentMinutes + futureMinutes);
date.setSeconds(currentSeconds + futureSeconds);*

explain it more :

1.setHours: This function sets the hour component of a Date object to a specific value. For example, if you have a Date object representing 3:45:12 PM and you use setHours(8), it will set the time to 8:45:12 PM.

2.setMinutes: Similar to setHours, setMinutes sets the minute component of a Date object to a specific value. For example, if you have a Date object representing 3:45:12 PM and you use setMinutes(30), it will set the time to 3:30:12 PM.

3.setSeconds: Again, similar to the previous two, setSeconds sets the second component of a Date object to a specific value. For example, if you have a Date object representing 3:45:12 PM and you use setSeconds(20), it will set the time to 3:45:20 PM.


#### new Date().getTime()
এটা milisecond return করবে