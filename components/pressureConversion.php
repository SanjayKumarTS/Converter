<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Pressure Conversion</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit">
          <option value="pa">Pascal</option>
          <option value="atm">Atmosphere</option>
          <option value="bar">Bar</option>
          <option value="torr">Torr</option>
        </select>
      </div>
      <table id="outputTable" style="display:none;">
        <tr>
          <td id="pa"></td>
          <td>Pascal(Pa)</td>
        </tr>
        <tr>
          <td id="atm"></td>
          <td>Atmosphere(Atm)</td>
        </tr>
        <tr>
          <td id="bar"></td>
          <td>Bar(bar)</td>
        </tr>
        <tr>
            <td id="torr"></td>
            <td>Torr(torr)</td>
        </tr>
       </table>
    </div>
    </div>
    <script src="pressureConversion.js"></script>
  </body>
</html>
