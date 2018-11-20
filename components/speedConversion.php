<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Speed</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit" onchange="unitChange()">
          <option value="mph">miles/hour</option>
          <option value="fps">foot/second</option>
          <option value="mps">meter/second</option>
          <option value="kmph">Kilometer/hour</option>
          <option value="knot">knot</option>
        </select>
      </div>
      <table id="outputTable" style="display:none;">
        <tr>
          <td id="mph"></td>
          <td>miles/hour</td>
        </tr>
        <tr>
          <td id="fps"></td>
          <td>foot/second</td>
        </tr>
        <tr>
          <td id="mps"></td>
          <td>meter/second</td>
        </tr>
        <tr>
            <td id="kmph"></td>
            <td>Kilometer/hour</td>
        </tr>
        <tr>
            <td id="knot"></td>
            <td>knot</td>
        </tr>
        </table>
    </div>
    </div>
    <script src="speedConversion.js"></script>
  </body>
</html>
