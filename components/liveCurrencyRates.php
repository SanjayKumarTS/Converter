<?php
  include './heading.php';
  $servername = "localhost";
  $username = "root";
  $password = "";
  $db = "currency_rates";
  // Create connection
  $conn = new mysqli($servername, $username, $password, $db);
  $sql = "select date from currency";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $date[] = explode(", ", $row['date']);
    }
  }
  $sql = "select inr from currency";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_array(MYSQLI_NUM)) {
    $inr[] = $row[0];
    }
  }
  $sql = "select gbp from currency";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row
    while($row = $result->fetch_array(MYSQLI_NUM)) {
      $gbp[] = $row[0];
    }
  }
  $sql = "select jpy from currency";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_array(MYSQLI_NUM)) {
    $jyp[] = $row[0];
    }
  }
  $sql = "select eur from currency";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_array(MYSQLI_NUM)) {
    $eur[] = $row[0];
    }
  }
  $sql = "select kwd from currency";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_array(MYSQLI_NUM)) {
    $kwd[] = $row[0];
    }
  }
?>
  <div id="main">
    <h2>Live Currency Rates</h2>
      <div class="left">
         <div class="graph">
                <canvas id="INR" width="600" height="400"></canvas>
                <canvas id="JYP" width="600" height="400"></canvas>
                <canvas id="KWD" width="600" height="400"></canvas>
        </div>
      </div>
      <div class="right">
        <div class="graph">
                <canvas id="GBP" width="600" height="400"></canvas>
                <canvas id="EUR" width="600" height="400"></canvas>
        </div>
      </div>
  </div>

  <script>
    let inr = document.getElementById('INR').getContext('2d');
    let jyp = document.getElementById('JYP').getContext('2d');
    let kwd = document.getElementById('KWD').getContext('2d');
    let gbp = document.getElementById('GBP').getContext('2d');
    let eur = document.getElementById('EUR').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = 'white';
      var array = <?php echo json_encode($date); ?>;
      var inrRate = <?php echo json_encode($inr); ?>;
      var jypRate = <?php echo json_encode($jyp); ?>;
      var kwdRate = <?php echo json_encode($kwd); ?>;
      var gbpRate = <?php echo json_encode($gbp); ?>;
      var eurRate = <?php echo json_encode($eur); ?>;
    let massPopChart = new Chart(inr, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:array,
        datasets:[{
          label:'USD to INR',
          data:inrRate,
          //backgroundColor:'green',
          backgroundColor:[
            // 'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(0, 0, 0, 0)',
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'USD to INR',
          fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    let massPopChart1 = new Chart(jyp, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:array,
        datasets:[{
          label:'Calories(Kcal)',
          data:jypRate,
          //backgroundColor:'green',
          backgroundColor:[
            // 'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(0, 0, 0, 0)',
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'USD to JPY',
          fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    let massPopChart2 = new Chart(gbp, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:array,
        datasets:[{
          label:'Calories(Kcal)',
          data:gbpRate,
          //backgroundColor:'green',
          backgroundColor:[
            // 'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(0, 0, 0, 0)',
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'USD to GBP',
          fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    let massPopChart3 = new Chart(eur, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:array,
        datasets:[{
          label:'Calories(Kcal)',
          data:eurRate,
          //backgroundColor:'green',
          backgroundColor:[
            // 'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(0, 0, 0, 0)',
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'USD to EUR',
          fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    let massPopChart4 = new Chart(kwd, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:array,
        datasets:[{
          label:'Calories(Kcal)',
          data:kwdRate,
          //backgroundColor:'green',
          backgroundColor:[
            // 'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(0, 0, 0, 0)',
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'USD to KWD',
          fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
  </script>
</body>
</html>
