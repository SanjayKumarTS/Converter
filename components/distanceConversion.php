<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Distance</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit" onchange="unitChange()">
          <option value="meter">meter(m)</option>
          <option value="centimeter">centimeter(cm)</option>
          <option value="kilometer">kilometer(km)</option>
          <option value="milimeter">milimeter(mm)</option>
          <option value="inch">inch</option>
          <option value="yard">yard</option>
          <option value="feet">feet(ft)</option>
          <option value="mile">mile(mi)</option>
        </select>
      </div>
      <table id="outputTable" style="display: none;">
        <tr>
          <td id="meter"></td>
          <td>meter(m)</td>
        </tr>
        <tr>
          <td id="centimeter"></td>
          <td>centimeter(cm)</td>
        </tr>
        <tr>
          <td id="milimeter"></td>
          <td>milimeter(mm)</td>
        </tr>
        <tr>
          <td id="kilometer"></td>
          <td>kilometer(km)</td>
        </tr>
        <tr>
          <td id="inch"></td>
          <td>inch(in)</td>
        </tr>
        <tr>
          <td id="yard"></td>
          <td>yard(yd)</td>
        </tr>
        <tr>
          <td id="feet"></td>
          <td>feet(ft)</td>
        </tr>
        <tr>
          <td id="mile"></td>
          <td>mile(mi)</td>
        </tr>
      </table>
    </div>
    </div>
    <script src="distanceConversion.js"></script>
  </body>
</html>
