<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Temperature</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit" onchange="unitChange()">
          <option value="celcius">celcius</option>
          <option value="fahrenheit">fahrenheit</option>
          <option value="kelvin">kelvin</option>
        </select>
      </div>
      <table id="outputTable" style="display:none;">
        <tr>
          <td id="celcius"></td>
          <td>celcius</td>
        </tr>
        <tr>
          <td id="fahrenheit"></td>
          <td>fahrenheit</td>
        </tr>
        <tr>
          <td id="kelvin"></td>
          <td>kelvin</td>
        </tr>
       </table>
    </div>
    </div>
    <script src="temperatureConversion.js"></script>
  </body>
</html>
