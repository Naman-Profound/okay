// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference to your database
  var database = firebase.database();
  var dataRef = database.ref('/your-data-node');

  // Fetch data
  dataRef.once('value')
    .then(function(snapshot) {
      var data = snapshot.val();
      // Process data and update your bar graph
      updateBarGraph(data);
    })
    .catch(function(error) {
      console.error("Error fetching data:", error);
    });

  // Function to update the bar graph with data
  function updateBarGraph(data) {
    var labels = Object.keys(data);
    var values = Object.values(data);

    var ctx = document.getElementById('myBarChart').getContext('2d');
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
