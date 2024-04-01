const mychart=document.getElementById('mychart');
fetchData();
   async function fetchData() {
      const res = await fetch('data.json');
      const data = await res.json();
      console.log(data);
      length = data.length;
      console.log(length);
      labels = [];
      values = [];

      /*colors */
      const Softred ='hsl(10, 79%, 65%)';
      const Cyan ='hsl(186, 34%, 60%)';
      const Darkbrown='hsl(25, 47%, 15%)';
   
      for (i = 0; i < data.length; i++) {
         labels.push(data[i].day);
         values.push(data[i].amount);
        
      };
      /*I installed Chart.js */
      new Chart(mychart, {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [
               {
                  label:'',
                  backgroundColor: [
                    Softred,
                    Softred,
                    Cyan,
                    Softred,
                    Softred,
                    Softred,
                    Softred
                  ],
                  data: values,
                  borderWidth: 1,
                  borderRadius: 30,
                  minHeight: 10
                  
   
               }
       
            ],
            
         },
         
         options:{
            responsive:true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false,
                        drawBorder:false,
                        
                    }
                }],
                yAxes: [{
                    display:false,
                    //bars are longer
                    ticks: {
                     beginAtZero: true
                   }
                    
                       
                }]
            },
            
            legend:{               
                display:false     
            },
                        
            tooltips:{
               enabled: true, 
               backgroundColor: Darkbrown, 
               padding: 20,  
               displayColors: false,
               
      
               callbacks: {
                  title: function(tooltipItems, data) {
                     return '';
                   },
     /*from Chart js tutorial: adding '$' to label */
                  label: function(tooltipItems, data) {
                     return "$" + tooltipItems.yLabel;
               },
                
             }
               
            },
            hover:{
               onHover:function(e){
                  mychart.style.cursor=e[0] ? 'pointer' : 'default';
               }
            }

         }
      })
   }

   