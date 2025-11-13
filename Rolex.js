function updateAnalogClock() { 
    const now = new Date();
     const hours = now.getHours();
      const minutes = now.getMinutes(); const seconds = now.getSeconds();
        const secondsDegrees = seconds * 6; 
         const minutesDegrees = (minutes * 6) + (seconds * 0.1); 
          const hour12 = hours % 12 || 12; const hoursDegrees = (hour12 * 30) + (minutes * 0.5); 
           const hourHand = document.getElementById('hour-hand'); 
           const minuteHand=document.getElementById('minute-hand');
           const secondHand=document.getElementById('second-hand');

           hourHand.style.transform=`translate(-50%) rotate(${hoursDegrees}deg)`;
           minuteHand.style.transform=`translate(-50%) rotate(${minutesDegrees}deg)`;
           secondHand.style.transform=`translate(-50%) rotate(${secondsDegrees}deg)`;
}

updateAnalogClock();

setInterval(updateAnalogClock,1000);
