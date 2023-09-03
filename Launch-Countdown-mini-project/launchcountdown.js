(function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
                      //Countdown date & time
        const countDown = new Date("Aug 14,2023 10:00:00 Am").getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              // document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                // document.getElementById("countdown").style.display = "none",
                document.getElementById("days").innerText = "000",
                document.getElementById("hours").innerText = "00",
                document.getElementById("minutes").innerText = "00", 
                document.getElementById("seconds").innerText = "00";
      
                document.getElementById("image").style.display = "none",
                document.getElementById("live").style.display = "inline",
                document.getElementById("headline").innerText = "is Now Live!",
               setTimeout(() => {
                      // loaction to navigate user
                  // window.location.href="https://pandumaharaj.netlify.app/";

               }, 1000);
                clearInterval(x);
                
              }
              //seconds
            }, 1000)

        }());
        
