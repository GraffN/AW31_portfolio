//the following line of code is probly a little different then expected because i experimented with giving it diferent directions. ass writen now it will just go one direction but if some variables are changed it will move back and forth. 
        var context;
        var text = new Date();
        var textDirection ="";
        

        $(function()
        {
            context = document.getElementById("cvs").getContext("2d");            
            setInterval("animate()", 100);

            textDirection ="right";
            textXpos = -600;  
        });  

        function animate() {            
            // Clear screen
            context.clearRect(0, 0, 500, 500);
            context.globalAlpha = 1;
            context.fillStyle = '#fff';
            context.fillRect(0, 0, 500, 500);    

            var metrics = context.measureText(text);
            var textWidth = metrics.width;

            if (textDirection == "right") {
                textXpos += 10;

                if (textXpos > 1100 - textWidth) {
                    textXpos = -600;
                }
            }
            else {
                textXpos -= 10;

                if (textXpos < 10) {
                    textDirection = "right"; //changing text direction "right" to "left" will make the direction of the object to change isted of making it reset at the start.
                }                    
            }

            context.font = '20px _verdana';
            context.fillStyle = '#52ce90';
            context.textBaseline = 'center';
            context.fillText  ( text, textXpos, 100);    
          }    
          