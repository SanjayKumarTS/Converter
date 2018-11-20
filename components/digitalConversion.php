<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Digital Conversion</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit" onchange="unitChange()">
          <option value="b">Bit</option>
          <option value="B">Byte</option>
          <option value="KB">KiloByte</option>
          <option value="MB">MegaByte</option>
          <option value="GB">GigaByte</option>
          <option value="TB">TeraByte</option>

        </select>
      </div>
      <table id="outputTable" style="display:none;">
        <tr>
          <td id="b"></td>
          <td>Bit(b)</td>
        </tr>
        <tr>
          <td id="B"></td>
          <td>Byte(B)</td>
        </tr>
        <tr>
          <td id="KB"></td>
          <td>KiloByte(KB)</td>
        </tr>
        <tr>
            <td id="MB"></td>
            <td>MegaByte(MB)</td>
        </tr>
        <tr>
            <td id="GB"></td>
            <td>GigaByte(GB)</td>
        </tr>
        <tr>
            <td id="TB"></td>
            <td>TeraByte(TB)</td>
        </tr>
       </table>
    </div>
    </div>
    <script src="digitalConversion.js"></script>
  </body>
</html>
