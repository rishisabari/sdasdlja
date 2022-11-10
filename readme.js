<!DOCTYPE html>
<html>
  
<head>
    <title>
        JavaScript RegExp i Modifier
    </title>
</head>
  
<body style="text-align:center">
    <h1 style="color:green">
        GeeksforGeeks
    </h1>
      
    <h2>RegExp i Modifier</h2>
      
    <p>
        Geeksforgeeks is the computer 
        science portal for geeks.
    </p>
      
    <button onclick="geek()">
        Click it!
    </button>
      
    <p id="app"></p>
    <script>
    function geek() {
        var str1 = "Geeksforgeeks is the computer "
                + "science portal for geeks.";
        var regex4 = /geek/gi;
        var match4 = str1.match(regex4);
  
        document.getElementById("app").innerHTML = 
                    "Found " + match4.length
      
      
      
      
      
      
      
      
      
      
      <!DOCTYPE html>
<html>
  
<head>
    <title>
        JavaScript RegExp i Modifier
    </title>
</head>
  
<body style="text-align:center">
    <h1 style="color:green">
        GeeksforGeeks
    </h1>
      
    <h2>RegExp i Modifier</h2>
      
    <p>
        Geeksforgeeks is the computer 
        science portal for geeks.
    </p>
      
    <button onclick="geek()">
        Click it!
    </button>
      
    <p id="app"></p>
    <script>
    function geek() {
        var str1 = "Geeksforgeeks is the computer "
                + "science portal for geeks.";
        var regex4 = /geek/gi;
        var match4 = str1.match(regex4);
  
        document.getElementById("app").innerHTML = 
                    "Found " + match4.length
                    + " matches: " + match4;
    }
    </script>
</body>
  
</html>                    
Output:
Before Clicking the button:
i
After Clicking the button:
i

Example 2: This example matches the word “geeks” or “Geeks” (case insensitive) and replaces it with “GEEKS”.

<!DOCTYPE html>
<html>
  
<head>
    <title>
        JavaScript RegExp i Modifier
    </title>
</head>
  
<body style="text-align:center">
    <h1 style="color:green">
        GeeksforGeeks
    </h1>
      
    <h2>RegExp i Modifier</h2>
      
    <p>
        String: GEEKsforgeeks is the computer
        science portal for geeks.
    </p>
      
    <button onclick="geek()">
        Click it!
    </button>
      
    <p id="app"></p>
      
    <script>
        function geek() {
            var str1 = "GEEKsforgeeks is the computer "
                    + "science portal for geeks.";     
            var regex4 = new RegExp("geeks", "ig");         
            var replace = "GEEKS";
            var match4 = str1.replace(regex4, replace);
            document.getElementById("app").innerHTML = 
            " New string: " + match4;
        }
    </script>
</body>
  
</html>        
                    + " matches: " + match4;
    }
    </script>
</body>
  
</html>                    
Output:
Before Clicking the button:
i
After Clicking the button:
i

Example 2: This example matches the word “geeks” or “Geeks” (case insensitive) and replaces it with “GEEKS”.

<!DOCTYPE html>
<html>
  
<head>
    <title>
        JavaScript RegExp i Modifier
    </title>
</head>
  
<body style="text-align:center">
    <h1 style="color:green">
        GeeksforGeeks
    </h1>
      
    <h2>RegExp i Modifier</h2>
      
    <p>
        String: GEEKsforgeeks is the computer
        science portal for geeks.
    </p>
      
    <button onclick="geek()">
        Click it!
    </button>
      
    <p id="app"></p>
      
    <script>
        function geek() {
            var str1 = "GEEKsforgeeks is the computer "
                    + "science portal for geeks.";     
            var regex4 = new RegExp("geeks", "ig");         
            var replace = "GEEKS";
            var match4 = str1.replace(regex4, replace);
            document.getElementById("app").innerHTML = 
            " New string: " + match4;
        }
    </script>
</body>
  
</html>        
