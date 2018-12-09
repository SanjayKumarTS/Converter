<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Currency</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit" onchange="unitChange()">
          <option value="USD">US Dollar</option>
          <option value="INR">Indian Rupee</option>
          <option value="EUR">Euro</option>
          <option value="JPY">Japan Yen</option>
          <option value="GBP">Great Britain Pound</option>
          <option value="KWD">Kuwait Dinar</option>

        </select>
      </div>
      <table id="outputTable" style="display: none;">
        <tr>
          <td id="USD"></td>
          <td>US Dollar</td>
        </tr>
        <tr>
          <td id="INR"></td>
          <td>Indian Rupee</td>
        </tr>
        <tr>
          <td id="EUR"></td>
          <td>Euro</td>
        </tr>
        <tr>
            <td id="JPY"></td>
            <td>Japan Yen</td>
        </tr>
        <tr>
            <td id="GBP"></td>
            <td>Great Britain Pound</td>
        </tr>
        <tr>
            <td id="KWD"></td>
            <td>Kuwait Dinar</td>
        </tr>
       </table>
    </div>
    </div>
    <script src="currencyConversion.js"></script>
  </body>
</html>
