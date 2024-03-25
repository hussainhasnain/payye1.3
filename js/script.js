/*------------------------------  No data Functionality  --------------------------- */
// const mainEl = document.querySelector('.main');
// const nodataEl = document.querySelector('.no-data');
// const hamburgerEl = document.querySelector('.hamburger');


/* ============ Preloader event =============== */
// window.addEventListener('load', function() {
//   const preloader = document.querySelector('.preloader');
//    setTimeout(function() {
//      preloader.style.display = 'none'; // Hide the preloader
// }, 500); // 0.5 seconds delay
// });




  /*=======================Toggle sidebar for mobile devices ========================== */

  function openNav() {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const sideNavEl = document.querySelector(".sidenav");
    if (screenWidth > 600) {
      document.getElementById("mySidenav").style.width = "22.757575rem";
      document.getElementById("main").style.marginLeft = "22.757575rem";
    } else if (screenWidth < 600){
      document.getElementById("mySidenav").style.width = "22.757575rem";
      // document.getElementById("main").style.marginLeft = "150px";
    }
  }
    
  function closeNav() {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (screenWidth > 600) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    } else if(screenWidth < 600) {
      document.getElementById("mySidenav").style.width = "0";
      // document.getElementById("main").style.marginLeft = "0";
    }
  }
  
  function toggleSidebar() {
    const sideNavEl = document.querySelector(".sidenav");
    const sideNavWidth = sideNavEl.offsetWidth;
    
    if (sideNavWidth > 0) {
      closeNav();
    } else {
      openNav();
    }
  }


  
/*======================= Sidebar drop down script Starts========================== */
// const dropdown1 = document.querySelector(".sidenav__list--item-account");
// const dropdown2 = document.querySelector(".sidenav__list--item-users");
// const dropdown3 = document.querySelector(".sidenav__list--item-tracking");
// const list1 = document.querySelector(".sidenav__list--item-list1");
// const list2 = document.querySelector(".sidenav__list--item-list2");
// const list3 = document.querySelector(".sidenav__list--item-list3");
// const iconCaret1El1 = document.querySelector(".icon__caret1");
// const iconCaret1El2 = document.querySelector(".icon__caret2");
// const iconCaret1El3 = document.querySelector(".icon__caret3");


// dropdown1.addEventListener("click", function() {
//   list1.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list1.classList.contains("toggled")) {
//     iconCaret1El1.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El1.setAttribute("name", "chevron-up-outline");
//   }
// });

// dropdown2.addEventListener("click", function() {
//   list2.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list2.classList.contains("toggled")) {
//     iconCaret1El2.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El2.setAttribute("name", "chevron-up-outline");
//   }
// });

// dropdown3.addEventListener("click", function() {
//   list3.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list3.classList.contains("toggled")) {
//     iconCaret1El3.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El3.setAttribute("name", "chevron-up-outline");
//   }
// });

/*======================= Sidebar drop down script Ends ========================== */


/*------------------------------  Date Range Picker --------------------------- */

// $(document).ready(function() {
  // var start = moment().subtract(29, 'days');
  var start = moment().startOf('month'); // Get the first day of the current month
  var end = moment();
  // var selectedMonths = [];

  function cb(start, end) {
    $('#reportrange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
    printMonthWiseDates(start, end);
  }

  function initializeDateRangePicker() {
    const currentYear = moment().year();
    $('#reportrange').daterangepicker({
      startDate: start,
      endDate: end,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(60, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        // 'Last Month': [moment('2023-06-01', 'YYYY-MM-DD'), moment('2023-06-30', 'YYYY-MM-DD')],
        // 'Last Month': [moment().month(5).year(currentYear).startOf('month'), moment().month(5).year(currentYear).endOf('month')],
        'Custom Range': [start, end]
      },
      showCustomRangeLabel: false,
      maxDate: moment(),
    }, cb);

    // Add a class to the non-selectable options to make them disabled-looking
    $('.ranges li').slice(0, -2).addClass('disabled-option');

    // document.querySelector(".successMsg").classList.add("hidden");
    // Add a click event listener to the 'Last Month' option in the dropdown
    document.querySelectorAll('.ranges li').forEach(function(element) {
      element.addEventListener('click', function() {
        // if (element.textContent === 'Last Month') {
          // console.log('Last Month option clicked');

          // document.querySelector(".successMsg").classList.remove("hidden");
          // document.querySelector(".successMsg").style.marginBottom = "20px";
          // setTimeout(() => {
          //   document.querySelector(".successMsg").classList.add("hidden");
          // }, 3000);
        // }

        // if (jsonData === null) {
				// 	console.log('jsonData is null');
				// 	jQuery('is-msg').remove();
				// 	jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesnt have data for the selection</p></div>').insertAfter('.welcome__content');    
					
				// 	setTimeout(()=>{jQuery('.is-msg').remove();},3000);
				// 	return;
				// }
      });
    });

    // document.querySelector(".applyBtn").addEventListener("click", function(){
    //   if (jsonData === null) {
    //     console.log('jsonData is null');
    //     jQuery('is-msg').remove();
    //     jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesnt have data for the selection</p></div>').insertAfter('.welcome__content');    
        
    //     setTimeout(()=>{jQuery('.is-msg').remove();},3000);
    //     return;
    //   }
    // }); 
    // Show the date range picker container after initialization
    $('#reportrange').show();
  }
  /**================ Function to get the values of Months selected and print them on Console =============*/   

  function printMonthWiseDates(start, end) {
    let months = [];
    let year = [];
    let currentDate = start.clone();

  while (currentDate <= end) {
    months.push(currentDate.format('MMM'));
    year.push(currentDate.format('YYYY'));
    currentDate.add(1, 'month');
  }

  console.log(months);
  console.log(year);
  console.log(`Your selected month is ${months}`);
  console.log(`Your selected year is ${year}`);

  console.log("Selected Months: ", months);
  }

initializeDateRangePicker();
  cb(start, end);

/*============= Section Account chart starts here ===============*/

/*============= Area Chart starts here ===============*/

// Assuming you have an array of years
// const yearsArray = [2021, 2022, 2023 /* and so on... */];

// // Create variables to store each year

//   const year2021 = yearsArray[0];
//   const year2022 = yearsArray[1];
//   const year2023 = yearsArray[2]; 
  
//   console.log(year2021);
//   console.log(year2022);
//   console.log(year2023);

  


//  data array with values for each month
var data2021 = [5, 10 , 6, 10, 15, 10, 10, 15, 10, 25, 15, 18];
var data2022 = [35, 42, 15, 30, 25, 10, 5, 15, 10, 15, 15, 18];
var data2023 = [5, 10, 15, 20, 5, 10, 15,30, 20, 10, 5, 10];



  var options = {
    series: [
      // {
      //   name: '2021',
      //   data: data2021, 
      // },
      {
        name: '2023',
        data: data2022, 
      },
      {
        name: '2024',
        data: data2023, 
      },
    ],
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        }
      }
    },
    // colors: ['#008FFB', '#00E396', '#CED4DC'],
    colors: ['#008FFB', '#BBD2FF', '#CED4DC'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false 
      }
    },
    // xaxis: {
    //     type: 'datetime',        
    //   },
    xaxis: {
      type: 'category', // Use category type for x-axis
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
      yaxis: {
        labels: {
          show: false // Set show property to false to hide the labels
        }
      },
      grid: {
        row: {
          colors: ['transparent'], // Set transparent color for row
          opacity: 0 // Set opacity to 0 for row
        },
        borderColor: 'transparent', // Set transparent color for border
        show: false, // Hide grid lines
        padding: {
          left: 0,
          right: 0
         }
      },
    labels: {
        show: false // Set show property to false to hide the labels
      }
  };
  
  var charts = document.querySelectorAll(".area-chart");
  charts.forEach(function (chartElement) {
    var chart = new ApexCharts(chartElement, options);
    chart.render();
  });
  
/*============= Area Chart Ends here ===============*/




/*============= Cookies Pop Up ===============*/

// Function to check if the user has accepted the cookies
function hasAcceptedCookies() {
  return localStorage.getItem('cookiesAccepted') === 'true';
}

// Function to set the user's acceptance of cookies
function setCookiesAccepted() {
  localStorage.setItem('cookiesAccepted', 'true');
}

// Function to show the cookie popup after a delay
function showCookiePopupWithDelay() {
  if (!hasAcceptedCookies()) {
    setTimeout(function() {
      document.getElementById('cookie-popup').style.display = 'block';
    }, 1000); // 1-second delay
  }
}
  

// Function to hide the cookie popup and set the acceptance flag
function acceptCookies() {
  document.getElementById('cookie-popup').style.display = 'none';
  setCookiesAccepted();
}

// Event listener for accepting cookies
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);

// Show the cookie popup on page load with a delay
document.addEventListener('DOMContentLoaded', showCookiePopupWithDelay);



/*------------------------------  Plan Switch Functionality Starts --------------------------- */

// const accountGraphs = document.querySelector(".account__plan");
// const planEl = document.querySelector(".plan").textContent;
// console.log(planEl);


// if(planEl == 'Growth' || planEl == 'Enterprise'){
//   accountGraphs.classList.remove('hidden');
// }

// // Get all gallery items
// const galleryItems = document.querySelectorAll('.gallery__item');
// const galleryElement = document.querySelector('.gallery');

// // Loop through the gallery items
// galleryItems.forEach(item => {
//   // Get the figure class index
//   const figureClassIndex = parseInt(item.classList[1].split('--')[1]);
  
//   // Check the range of the figure class index
//   if (figureClassIndex >= 1 && figureClassIndex <= 7) {
    
//     galleryElement.style.gridTemplate = 'repeat(09, 5vw) / repeat(8, 1fr)';

//   } else if (figureClassIndex >= 1 && figureClassIndex <= 14) {
  
//     galleryElement.style.gridTemplate = 'repeat(18, 5vw) / repeat(8, 1fr)';
//     // Remove the style for figure class range 1-14
    
//   }
// });

/*------------------------------  Plan Switch Functionality Ends --------------------------- */







/*------------------------------  Gallery height Fix starts --------------------------- */


document.addEventListener('DOMContentLoaded', function() {

  function adjustGalleryLayout() {
    
    let galleryItems = document.querySelectorAll('.gallery__item');
    let numRows = 0;

    
    if (galleryItems.length > 0) {
      numRows = Math.ceil(galleryItems.length / 8);
    }

    // Adjust the grid template rows property dynamically
    document.querySelector('.gallery').style.gridTemplateRows = 'repeat(' + numRows + ', 5vw)';
  }

  adjustGalleryLayout();

  // Listen for window resize events to adjust the layout dynamically
  window.addEventListener('resize', adjustGalleryLayout);
});

/*------------------------------  Gallery height Fix Ends --------------------------- */






