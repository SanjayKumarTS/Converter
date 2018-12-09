<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Converter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="../style.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="main.js"></script>
  </head>
  <header>
    <!-- <img src="./mainimage.jpg" alt="" class="background-image" /> -->
    <a href="index.html"><h1>Converter</h1></a>
    <div class="searchbar">
      <div class="searchbtn"><i class="fa fa-search"></i></div>
      <input
        type="text"
        placeholder="Search..."
        id="searchInput"
        oninput="search()"
      />
      <div class="drop-down-content"><ul id="list"></ul></div>
    </div>
  </header>