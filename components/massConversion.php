<?php 
  include './heading.php';
?>
    <div id="main1">
      <h2 id="pageHeading">Mass</h2>
      <div class="input1">
        <input type="text" id="inputValue" placeholder="Value" oninput="unitChange()"/>
        <select id="inputUnit">
          <option value="mg">MiliGram</option>
          <option value="g">Gram</option>
          <option value="kg">KiloGram</option>
          <option value="lb">Pound</option>
          <option value="t">Ton</option>
        </select>
      </div>
      <table id="outputTable" style="display: none;">
        <tr>
          <td id="mg"></td>
          <td>miligram(mg)</td>
        </tr>
        <tr>
          <td id="g"></td>
          <td>gram(g)</td>
        </tr>
        <tr>
          <td id="kg"></td>
          <td>kilogram(kg)</td>
        </tr>
        <tr>
            <td id="lb"></td>
            <td>pound(lb)</td>
        </tr>
        <tr>
            <td id="t"></td>
            <td>ton(t)</td>
        </tr>
       </table>
    </div>
    </div>
    <script src="massConversion.js"></script>
  </body>
</html>
