<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2>Area Conversion</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit" onchange="unitChange()">
          <option value="inch2">Square Inch</option>
          <option value="m2">Square Meter</option>
          <option value="ft2">Square Feet</option>
          <option value="km2">Square Kilometer</option>
          <option value="acre">Acre</option>
          <option value="hectare">hectare</option>

        </select>
      </div>
      <table id="outputTable" style="display:none;">
        <tr>
          <td id="inch2"></td>
          <td>Square Inch</td>
        </tr>
        <tr>
          <td id="m2"></td>
          <td>Square Meter</td>
        </tr>
        <tr>
          <td id="ft2"></td>
          <td>Square Feet</td>
        </tr>
        <tr>
            <td id="km2"></td>
            <td>Square Kilometer</td>
        </tr>
        <tr>
            <td id="acre"></td>
            <td>Acre</td>
        </tr>
        <tr>
            <td id="hectare"></td>
            <td>Hectare</td>
        </tr>
       </table>
    </div>
    </div>
    <script src="areaConversion.js"></script>
  </body>
</html>
