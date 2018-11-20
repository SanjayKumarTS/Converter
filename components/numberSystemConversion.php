<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Number System Conversion</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit" onchange="unitChange()">
          <option value="binary">Binary</option>
          <option value="octal">Octal</option>
          <option value="decimal">Decimal</option>
          <option value="hexadecimal">Hexadecimal</option>

        </select>
      </div>
      <table id="outputTable" style="display: none;">
        <tr>
          <td id="binary"></td>
          <td>binary(base 2)</td>
        </tr>
        <tr>
          <td id="octal"></td>
          <td>octal(base 8)</td>
        </tr>
        <tr>
          <td id="decimal"></td>
          <td>decimal(base 10)</td>
        </tr>
        <tr>
            <td id="hexadecimal"></td>
            <td>hexadecimal(base 16)</td>
          </tr>
       </table>
    </div>
    </div>
    <script src="numberSystemConversion.js"></script>
  </body>
</html>
