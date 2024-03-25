/*------------------------------  Burger menu start Sidebar Functionality  --------------------------- */
function openNav() {
	let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const sideNavEl = document.querySelector(".sidenav");
	if (screenWidth > 600) {
		document.getElementById("mySidenav").style.width = "22.757575rem";
		document.getElementById("main").style.marginLeft = "22.757575rem";
	} else if (screenWidth < 600) {
		document.getElementById("mySidenav").style.width = "22.757575rem";
		// document.getElementById("main").style.marginLeft = "150px";
	}

}
function closeNav() {
	let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if (screenWidth > 600) {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
	} else if (screenWidth < 600) {
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
///////// Burger menu end /////////////////////////////////
/*
const dropdown1 = document.querySelector(".sidenav__list--item-account");
const dropdown2 = document.querySelector(".sidenav__list--item-users");
const dropdown3 = document.querySelector(".sidenav__list--item-tracking");
const list1 = document.querySelector(".sidenav__list--item-list1");
const list2 = document.querySelector(".sidenav__list--item-list2");
const list3 = document.querySelector(".sidenav__list--item-list3");
const iconCaret1El1 = document.querySelector(".icon__caret1");
const iconCaret1El2 = document.querySelector(".icon__caret2");
const iconCaret1El3 = document.querySelector(".icon__caret3");


dropdown1.addEventListener("click", function() {
	list1.classList.toggle("toggled");
	
	// Check if the list is toggled and update the icon accordingly
	if (list1.classList.contains("toggled")) {
		iconCaret1El1.setAttribute("name", "chevron-down-outline");
		} else {
		iconCaret1El1.setAttribute("name", "chevron-up-outline");
	}
});

dropdown2.addEventListener("click", function() {
	list2.classList.toggle("toggled");
	
	// Check if the list is toggled and update the icon accordingly
	if (list2.classList.contains("toggled")) {
		iconCaret1El2.setAttribute("name", "chevron-down-outline");
		} else {
		iconCaret1El2.setAttribute("name", "chevron-up-outline");
	}
});

dropdown3.addEventListener("click", function() {
	list3.classList.toggle("toggled");
	
	// Check if the list is toggled and update the icon accordingly
	if (list3.classList.contains("toggled")) {
		iconCaret1El3.setAttribute("name", "chevron-down-outline");
		} else {
		iconCaret1El3.setAttribute("name", "chevron-up-outline");
	}
});
*/
/*======================= Sidebar drop down script Ends ========================== */


/*------------------------------  No data Functionality  --------------------------- */
// const mainEl = document.querySelector('.main');
// const nodataEl = document.querySelector('.no-data');
// const hamburgerEl = document.querySelector('.hamburger');



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
	// document.querySelectorAll('.ranges li').forEach(function(element) {
	// 	element.addEventListener('click', function() {
	// 		if (element.textContent === 'Last Month') {
	// 			console.log('Last Month option clicked');

	// 			// document.querySelector(".successMsg").classList.remove("hidden");
	// 			// document.querySelector(".successMsg").style.marginBottom = "20px";
	// 			// setTimeout(() => {
	// 			//   document.querySelector(".successMsg").classList.add("hidden");
	// 			// }, 3000);
	// 		}
	// 	});
	// });
	// Show the date range picker container after initialization
	$('#reportrange').show();
}
/**================ Function to get the values of Months selected and print them on Console =============*/

function printMonthWiseDates(start, end) {
	let months = [];
	let year = [];
	let grouped = [];
	let currentDate = start.clone();

	/*	while (currentDate <= end) {*/
	while (currentDate.isSameOrBefore(end)) {

		months.push(currentDate.format('MMM'));
		year.push(currentDate.format('YYYY'));
		grouped.push(currentDate.format('MMM') + '-' + currentDate.format('YYYY'));
		currentDate.add(1, 'month');
	}
	const uniqueYears = [...new Set(year)];
	const uniqueCount = uniqueYears.length;
	console.log('Selected years are ' + year + ' years count is ' + uniqueCount);
	console.log('Grouped is ' + grouped);
	console.log(months);
	console.log(`Your selected month is ${months}`);
	console.log("Selected Months: ", months);

	var mon = months[months.length - 1];
	var yr = year[year.length - 1];
	console.log('months length is' + months.length);
	console.log('Converted month is ' + mon);
	console.log('Converted year is ' + yr);
	/******** start ********/
	if (months.length == 1) {
		// Create the AJAX call


		$.ajax({
			type: "POST",
			url: "/ajax/mstats",
			data: {
				months: mon,
				year: yr
			},
			success: function (response) {
				console.log('Output' + response);
				var data1 = JSON.parse(response);
				//console.log('abcdefg'+data1.clicks);
				// Assuming 'response' contains the JSON data you received from AJAX success callback
				///////////////////////////////Startcode//////////////////
				//var jsonData = JSON.parse(response);
				var jsonData;
				if (Array.isArray(JSON.parse(response)) && JSON.parse(response).length > 0) {
					console.log('Going in 1');
					jsonData = JSON.parse(response)[0];  // Access the first (and only) object in the array
				} else {
					console.log('Going in 2');
					jsonData = JSON.parse(response);

					console.log('printing in else////////////////////' + JSON.stringify(jsonData));
				}

				if (JSON.stringify(jsonData) === 'null') { console.log('-----------------> yes the json data is null'); }
				// /


				////////

				document.querySelectorAll('.ranges li').forEach(function (element) {
					element.addEventListener('click', function () {

						if (element.textContent === 'Last Month') {

							console.log("Last month is clicked");

							/*if(jdata)
							{
								console.log('json data is available'+jdata);
							}*/
							if (JSON.stringify(jsonData) === 'null') {
								console.log('jsonData is not available');
								jQuery('is-msg').remove();
								// jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system does not have data for this selection</p></div>').insertAfter('.welcome__content');    


								jQuery('<div class="dashboardValidation is-msg"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system does not have data for this selection</p></div>').insertBefore('.impressions');

								setTimeout(() => { jQuery('.is-msg').remove(); }, 3000);
								return;
							}
						}

					});
				});

				function applyButtonClickHandler() {
					console.log("apply btn is clicked");
					if (jsonData === null) {
						console.log('jsonData is null');
						jQuery('.is-msg').remove();
						// jQuery('<div class="successMsg is-msg" style="margin-top: 1rem; min-width: 100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesn\'t have data for the selection</p></div>').insertAfter('.welcome__content');

						jQuery('<div class="dashboardValidation is-msg"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system does not have data for this selection</p></div>').insertBefore('.impressions');

						setTimeout(() => {
							jQuery('.is-msg').remove();
						}, 3000);
					}
					// Remove the event listener after it has been executed
					document.querySelector(".applyBtn").removeEventListener("click", applyButtonClickHandler);
				}

				document.querySelector(".applyBtn").addEventListener("click", applyButtonClickHandler);

				// Assuming 'response' contains the JSON data you received from AJAX success callback
				//var jsonData = JSON.parse(response);
				/*	if (jsonData.hasOwnProperty('count') && jsonData.count === null) {
					console.log('The count is null. No data available.');
					jQuery('is-msg').remove();
					jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesnt have data for the selection</p></div>').insertAfter('.welcome__content');    
					
					setTimeout(()=>{jQuery('.is-msg').remove();},3000);
					return;    
				}*/
				////////////////////////////////Endcode/////////////////////
				// Access individual properties
				var impressions = jsonData.impressions;
				var clicks = jsonData.clicks;
				var video = jsonData.videoEngagements;
				var yearlyRevenue = jsonData.yearlyRevenue;
				var avgMonthlyRevenue = jsonData.avgMonthlyRevenue;
				var mobileClicks = jsonData.mobileClicks;
				var desktopClicks = jsonData.desktopClicks;
				var tabletClicks = jsonData.tabletClicks;
				// Calculate CTR
				var ctr = ((clicks / impressions) * 100).toFixed(2) + '%';
				// Format numbers with commas
				function numberWithCommas(x) {
					return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}

				var formattedImpressions = numberWithCommas(impressions);
				var formattedClicks = numberWithCommas(clicks);
				var yearlyConversion = numberWithCommas(yearlyRevenue);
				var yearlyConversionAvg = numberWithCommas(avgMonthlyRevenue);
				// ...and so on for other properties
				jQuery('.Impressions').text(formattedImpressions);
				jQuery('.clicks').text(formattedClicks);
				jQuery('.video').text(video);
				jQuery('.video').text(jQuery('.video').text().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
				console.log('one');
				jQuery('.ctr').text(ctr);
				jQuery('.yearlyConversion').text('Â£' + yearlyConversion);
				jQuery('.yearlyConversionAvg').text('Â£' + Number(Number(avgMonthlyRevenue).toFixed(2)).toLocaleString());
				jQuery('.mobileClicks').text('Mobile Phones / ' + mobileClicks);
				jQuery('.desktopClicks').text('Computers / ' + desktopClicks);
				jQuery('.tabletClicks').text('Tablets / ' + tabletClicks);


				jQuery('.res1, .res1symbol, .res2, .res2symbol, .res3, .res3symbol, .res4, .res4symbol').addClass('hidden');
				jQuery('.stats__box--text-txt').hide();
				// If you want to access the 'bestPerformingUrls' which is a comma-separated string, you can split it into an array
				//////////////////////////////////////////////////////////////////////
				//console.log('1 MONTH SELECTED / BEST PERFORMING URLS ============================= '+jsonData.bestPerformingUrls);	


				var bestPerformingUrls = jsonData.bestPerformingUrls.split(', ');

				var formattedUrlsHTML = '';


				for (var i = 0; i < 3; i++) {
					var trimmedURL = bestPerformingUrls[i].trim().substring(0, 33);
					formattedUrlsHTML += `<p class="quickBox__box--para-text"><a href="${bestPerformingUrls[i].trim()}" target="_blank" class="customers__content--box-url-text-link url">${trimmedURL}</a></p>`;
				}

				var containerDiv = document.createElement('div');
				containerDiv.classList.add('quickBox__box--para');
				containerDiv.innerHTML = formattedUrlsHTML;

				// you have an element with the class 'customers__content' where you want to append the created HTML
				var contentContainer = document.querySelector('.customers__content--box-4');
				jQuery('.customers__content--box-url-content').remove();
				jQuery('.customers__content--box-4').html('');
				contentContainer.appendChild(containerDiv);

				////////////////////////////////////////////////////////////////////////////
				var keywords = jsonData.keywords.split(', ');

				var formattedKeywordsHTML = '';
				var columnCount = 2; // Number of columns in the layout

				for (var i = 0; i < 3; i++) {
					if (i % columnCount === 0) {
						//formattedKeywordsHTML += '<div class="ads__devices--stats-content-item">';
					}

					formattedKeywordsHTML += `
					<p class="quickBox__box--para-keyword-txt">
					${keywords[i]}
					</p>
					`;

					if ((i + 1) % columnCount === 0 || i === keywords.length - 1) {
						//formattedKeywordsHTML += '</div>';
					}
				}

				var containerDiv = formattedKeywordsHTML;

				jQuery('.keyword-ppp').html('').append(containerDiv);

				////////////////////////
				//commas on devices
				var textContent = $('.mobileClicks').text().trim();
				var numericValue = parseFloat(textContent);
				if (!isNaN(numericValue)) {
					// Format the number with commas
					var formattedValue = numericValue.toLocaleString();

					// Update the element's text content with the formatted value
					$('.mobileClicks').text('Mobile Phones / ' + formattedValue);

				}

				// Process desktopClicks
				var desktopContent = $('.desktopClicks').text().trim();
				var desktopNumericValue = parseFloat(desktopContent);
				if (!isNaN(desktopNumericValue)) {
					var desktopFormattedValue = desktopNumericValue.toLocaleString();
					$('.desktopClicks').text(desktopFormattedValue);
				}

				// Process tabletClicks
				var tabletContent = $('.tabletClicks').text().trim();
				var tabletNumericValue = parseFloat(tabletContent);
				if (!isNaN(tabletNumericValue)) {
					var tabletFormattedValue = tabletNumericValue.toLocaleString();
					$('.tabletClicks').text(tabletFormattedValue);
				}


				////////////////////////////////////////////////////////////////////////////////
			},
			error: function (xhr, status, error) {
				console.error("Error:", error);
			}
		});

	}//end of if
	if ((months.length > 1) && (uniqueCount < 2)) {
		console.log('The multiple selected years are ' + yr);
		console.log('The multiple selected months are ' + months);
		// Create the AJAX call
		$.ajax({
			type: "POST",
			url: "/ajax/mstatz",
			data: {
				months: months,
				year: yr
			},
			success: function (response) {
				console.log('Output' + response);

				//var jsonData = JSON.parse(response);
				var jsonData;
				if (Array.isArray(JSON.parse(response)) && JSON.parse(response).length > 0) {
					jsonData = JSON.parse(response)[0];  // Access the first (and only) object in the array
				} else {
					jsonData = JSON.parse(response);
				}
				//console.log('abcdefg'+jsonData);
				console.log('abcdefg', JSON.stringify(jsonData));
				// Assuming 'response' contains the JSON data you received from AJAX success callback
				//var jsonData = JSON.parse(response);
				if (jsonData.hasOwnProperty('count') && jsonData.count === null) {
					console.log('The count is null. No data available.');
					jQuery('is-msg').remove();
					// jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesnt have data for the selection</p></div>').insertAfter('.welcome__content');  

					jQuery('<div class="dashboardValidation is-msg"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system does not have data for this selection</p></div>').insertBefore('.impressions');

					setTimeout(() => { jQuery('.is-msg').remove(); }, 3000);
					return;
				}

				// Access individual properties
				var impressions = jsonData.impressions;
				console.log('the total impressions are ' + impressions);

				if (impressions === null) {
					console.log('The count is null. No data available.');
					jQuery('is-msg').remove();
					// jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesnt have data for the selection</p></div>').insertAfter('.welcome__content'); 

					jQuery('<div class="dashboardValidation is-msg"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system does not have data for this selection</p></div>').insertBefore('.impressions');

					setTimeout(() => { jQuery('.is-msg').remove(); }, 3000);
					return;
				}
				var clicks = jsonData.clicks;
				var video = jsonData.videoEngagements;
				var yearlyRevenue = jsonData.yearlyRevenue;
				var avgMonthlyRevenue = jsonData.avgMonthlyRevenue;
				var mobileClicks = jsonData.mobileClicks;
				var desktopClicks = jsonData.desktopClicks;
				var tabletClicks = jsonData.tabletClicks;
				// Calculate CTR
				var ctr = ((clicks / impressions) * 100).toFixed(2) + '%';
				// Format numbers with commas
				function numberWithCommas(x) {
					return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}

				var formattedImpressions = numberWithCommas(impressions);
				var formattedClicks = numberWithCommas(clicks);
				var yearlyConversion = numberWithCommas(yearlyRevenue);
				var yearlyConversionAvg = numberWithCommas(avgMonthlyRevenue);
				// ...and so on for other properties
				jQuery('.Impressions').text(formattedImpressions);
				jQuery('.clicks').text(formattedClicks);
				jQuery('.video').text(video.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
				jQuery('.video').text(jQuery('.video').text().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
				console.log('ctr is ' + ctr);
				jQuery('.ctr').text(ctr);
				jQuery('.yearlyConversion').text('Â£' + yearlyConversion);
				jQuery('.yearlyConversionAvg').text('Â£' + Number(Number(avgMonthlyRevenue).toFixed(2)).toLocaleString());
				jQuery('.mobileClicks').text('Mobile Phones / ' + mobileClicks);
				jQuery('.desktopClicks').text('Computers / ' + desktopClicks);
				jQuery('.tabletClicks').text('Tablet / ' + tabletClicks);


				jQuery('.res1, .res1symbol, .res2, .res2symbol, .res3, .res3symbol, .res4, .res4symbol').addClass('hidden');
				jQuery('.stats__box--text-txt').hide();
				// If you want to access the 'bestPerformingUrls' which is a comma-separated string, you can split it into an array
				//////////////////////////////////////////////////////////////////////
				console.log('BEST PERFORMING URLS ============================= ' + jsonData.bestPerformingUrls.split(', ').slice(0, 3));

				var bestPerformingUrls = jsonData.bestPerformingUrls.split(', ').slice(0, 3);
				var formattedUrlsHTML = '';

				for (var i = 0; i < bestPerformingUrls.length; i++) {
					formattedUrlsHTML += '<p class="quickBox__box--para-text"><a href="${bestPerformingUrls[i].trim()}" target="_blank" class="customers__content--box-url-text-link url">' + bestPerformingUrls[i].trim() + '</a></p>';
				}
				///blockstart/////
				if (bestPerformingUrls.length > 0) {
					jQuery('.customers__content--box-4 > .quickBox__box--para:eq(0)').html('');
				}
				jQuery('.customers__content--box-4 > .quickBox__box--para:eq(0)').append(formattedUrlsHTML);

				////////////////////////////////////////////////////////////////////////////
				var keywords = jsonData.keywords.split(', ').slice(0, 3);

				var formattedKeywordsHTML = '';
				var columnCount = 2; // Number of columns in the layout

				for (var i = 0; i < keywords.length; i++) {
					formattedUrlsHTML += '<p class="quickBox__box--para-text"><a href="' + bestPerformingUrls[i].trim() + '" target="_blank" class="customers__content--box-url-text-link url">' + bestPerformingUrls[i].trim() + '</a></p>';
				}

				//Keywords start
				for (var i = 0; i < keywords.length; i++) {
					formattedKeywordsHTML += '<p class="quickBox__box--para-keyword-txt">' + keywords[i] + '</p>';
				}

				if (keywords.length > 0) {
					jQuery('.keyword-ppp:eq(0)').html('');
				}

				jQuery('.keyword-ppp:eq(0)').append(formattedKeywordsHTML);
				//Keywords end
				////////////////////////
				//commas on devices
				var textContent = $('.mobileClicks').text().trim();
				var numericValue = parseFloat(textContent);
				if (!isNaN(numericValue)) {
					// Format the number with commas
					var formattedValue = numericValue.toLocaleString();

					// Update the element's text content with the formatted value
					$('.mobileClicks').text('Mobile Phone / ' + formattedValue);
				}

				// Process desktopClicks
				var desktopContent = $('.desktopClicks').text().trim();
				var desktopNumericValue = parseFloat(desktopContent);
				if (!isNaN(desktopNumericValue)) {
					var desktopFormattedValue = desktopNumericValue.toLocaleString();
					$('.desktopClicks').text(desktopFormattedValue);
				}

				// Process tabletClicks
				var tabletContent = $('.tabletClicks').text().trim();
				var tabletNumericValue = parseFloat(tabletContent);
				if (!isNaN(tabletNumericValue)) {
					var tabletFormattedValue = tabletNumericValue.toLocaleString();
					$('.tabletClicks').text(tabletFormattedValue);
				}


				////////////////////////////////////////////////////////////////////////////////
			},
			error: function (xhr, status, error) {
				console.error("Error:", error);
			}
		});

	}//end of second if
	/*******  End ***********/
	if ((months.length > 1) && (uniqueCount > 1)) {
		///////////////////start///////////////////
		console.clear();
		console.log('Grouped is ' + grouped);

		// Create the AJAX call
		$.ajax({
			type: "POST",
			url: "/ajax/mstatzz",
			data: {
				grouped: grouped
			},
			success: function (response) {
				console.log('Output' + response);
				//return;
				//var jsonData = JSON.parse(response);
				var jsonData;
				if (Array.isArray(JSON.parse(response)) && JSON.parse(response).length > 0) {
					jsonData = JSON.parse(response)[0];  // Access the first (and only) object in the array
				} else {
					jsonData = JSON.parse(response);
				}
				//console.log('abcdefg'+jsonData);
				console.log('abcdefg', JSON.stringify(jsonData));
				// Assuming 'response' contains the JSON data you received from AJAX success callback
				//var jsonData = JSON.parse(response);
				if (jsonData.hasOwnProperty('count') && jsonData.count === null) {
					console.log('The count is null. No data available.');
					jQuery('is-msg').remove();
					// jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesnt have data for the selection</p></div>').insertAfter('.welcome__content');  

					jQuery('<div class="dashboardValidation is-msg"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system does not have data for this selection</p></div>').insertBefore('.impressions');

					setTimeout(() => { jQuery('.is-msg').remove(); }, 3000);
					return;
				}

				// Access individual properties
				var impressions = jsonData.impressions;
				console.log('the total impressions are ' + impressions);

				if (impressions === null) {
					console.log('The count is null. No data available.');
					jQuery('is-msg').remove();
					// jQuery('<div class="successMsg is-msg"  style="margin-top:1rem; min-width:100%"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system doesnt have data for the selection</p></div>').insertAfter('.welcome__content'); 

					jQuery('<div class="dashboardValidation is-msg"><div class="successMsg__icon"><i class="fa-solid fa-circle-check successMsg__icon--success"></i></div><p class="successMsg__text">The system does not have data for this selection</p></div>').insertBefore('.impressions');

					setTimeout(() => { jQuery('.is-msg').remove(); }, 3000);
					return;
				}
				var clicks = jsonData.clicks;
				var video = jsonData.videoEngagements;
				var yearlyRevenue = jsonData.yearlyRevenue;
				var avgMonthlyRevenue = jsonData.avgMonthlyRevenue;
				var mobileClicks = jsonData.mobileClicks;
				var desktopClicks = jsonData.desktopClicks;
				var tabletClicks = jsonData.tabletClicks;
				// Calculate CTR
				var ctr = ((clicks / impressions) * 100).toFixed(2) + '%';
				// Format numbers with commas
				function numberWithCommas(x) {
					return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}

				var formattedImpressions = numberWithCommas(impressions);
				var formattedClicks = numberWithCommas(clicks);
				var yearlyConversion = numberWithCommas(yearlyRevenue);
				var yearlyConversionAvg = numberWithCommas(avgMonthlyRevenue);
				// ...and so on for other properties
				jQuery('.Impressions').text(formattedImpressions);
				jQuery('.clicks').text(formattedClicks);
				jQuery('.video').text(video.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
				jQuery('.video').text(jQuery('.video').text().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
				console.log('ctr is ' + ctr);
				jQuery('.ctr').text(ctr);
				jQuery('.yearlyConversion').text('Â£' + yearlyConversion);
				jQuery('.yearlyConversionAvg').text('Â£' + Number(Number(avgMonthlyRevenue).toFixed(2)).toLocaleString());
				jQuery('.mobileClicks').text('Mobile Phones / ' + mobileClicks);
				jQuery('.desktopClicks').text('Computers / ' + desktopClicks);
				jQuery('.tabletClicks').text('Tablet / ' + tabletClicks);


				jQuery('.res1, .res1symbol, .res2, .res2symbol, .res3, .res3symbol, .res4, .res4symbol').addClass('hidden');
				jQuery('.stats__box--text-txt').hide();
				// If you want to access the 'bestPerformingUrls' which is a comma-separated string, you can split it into an array
				//////////////////////////////////////////////////////////////////////
				console.log('BEST PERFORMING URLS ============================= ' + jsonData.bestPerformingUrls.split(', ').slice(0, 3));

				var bestPerformingUrls = jsonData.bestPerformingUrls.split(', ').slice(0, 3);
				var formattedUrlsHTML = '';

				for (var i = 0; i < bestPerformingUrls.length; i++) {
					formattedUrlsHTML += '<p class="quickBox__box--para-text"><a href="${bestPerformingUrls[i].trim()}" target="_blank" class="customers__content--box-url-text-link url">' + bestPerformingUrls[i].trim() + '</a></p>';
				}
				///blockstart/////
				if (bestPerformingUrls.length > 0) {
					jQuery('.customers__content--box-4 > .quickBox__box--para:eq(0)').html('');
				}
				jQuery('.customers__content--box-4 > .quickBox__box--para:eq(0)').append(formattedUrlsHTML);

				////////////////////////////////////////////////////////////////////////////
				var keywords = jsonData.keywords.split(', ').slice(0, 3);

				var formattedKeywordsHTML = '';
				var columnCount = 2; // Number of columns in the layout

				for (var i = 0; i < keywords.length; i++) {
					formattedUrlsHTML += '<p class="quickBox__box--para-text"><a href="' + bestPerformingUrls[i].trim() + '" target="_blank" class="customers__content--box-url-text-link url">' + bestPerformingUrls[i].trim() + '</a></p>';
				}

				//Keywords start
				for (var i = 0; i < keywords.length; i++) {
					formattedKeywordsHTML += '<p class="quickBox__box--para-keyword-txt">' + keywords[i] + '</p>';
				}

				if (keywords.length > 0) {
					jQuery('.keyword-ppp:eq(0)').html('');
				}

				jQuery('.keyword-ppp:eq(0)').append(formattedKeywordsHTML);
				//Keywords end

				////////////////////////
				//commas on devices
				var textContent = $('.mobileClicks').text().trim();
				var numericValue = parseFloat(textContent);
				if (!isNaN(numericValue)) {
					// Format the number with commas
					var formattedValue = numericValue.toLocaleString();

					// Update the element's text content with the formatted value
					$('.mobileClicks').text('Mobile Phone / ' + formattedValue);
				}

				// Process desktopClicks
				var desktopContent = $('.desktopClicks').text().trim();
				var desktopNumericValue = parseFloat(desktopContent);
				if (!isNaN(desktopNumericValue)) {
					var desktopFormattedValue = desktopNumericValue.toLocaleString();
					$('.desktopClicks').text(desktopFormattedValue);
				}
				// Process tabletClicks
				var tabletContent = $('.tabletClicks').text().trim();
				var tabletNumericValue = parseFloat(tabletContent);
				if (!isNaN(tabletNumericValue)) {
					var tabletFormattedValue = tabletNumericValue.toLocaleString();
					$('.tabletClicks').text(tabletFormattedValue);
				}


				////////////////////////////////////////////////////////////////////////////////
			},
			error: function (xhr, status, error) {
				console.error("Error:", error);
			}
		});
		//////////////////end///////////////////////
	}//end of if

}

initializeDateRangePicker();
cb(start, end);


/*============= Section Account chart starts here ===============*/

/*============= Area Chart starts here ===============*/

var selectElement = $(".val1");
var reversedOptions = selectElement.find('option').toArray();
var valuesArray = []; //2024 or the latest year
$(reversedOptions).each(function () {
	// Get the value of each <option> and add it to the array
	var optionValue = $(this).val();
	if (optionValue !== undefined) {
		valuesArray.push(optionValue);
	}
});
console.log('2023 values in the array are' + valuesArray + ' The array length is ' + valuesArray.length);
// Check if valuesArray is empty, and assign default values if needed
if (valuesArray.length === 0) {
	valuesArray = [5, 10, 15, 20, 5, 10, 15, 30, 20, 10, 5, 10];
}
////////second start///////
var selectElement2 = $(".val2"); //2023 year before the latest year
var reversedOptions2 = selectElement2.find('option').toArray();
var valuesArray2 = [];
$(reversedOptions2).each(function () {
	// Get the value of each <option> and add it to the array
	var optionValue2 = $(this).val();
	if (optionValue2 !== undefined) {
		valuesArray2.push(optionValue2);
	}
});

// Check if valuesArray is empty, and assign default values if needed
if (valuesArray2.length === 0) {
	valuesArray2 = [35, 42, 15, 30, 25, 10, 5, 15, 10, 15, 15, 18];
}

///////////second end///////////////

//////////third start /////////////
var selectElement3 = $(".val3");
var reversedOptions3 = selectElement3.find('option').toArray();
var valuesArray3 = [];
$(reversedOptions3).each(function () {
	// Get the value of each <option> and add it to the array
	var optionValue3 = $(this).val();
	if (optionValue3 !== undefined) {
		valuesArray3.push(optionValue3);
	}
});

// Check if valuesArray is empty, and assign default values if needed
if (valuesArray3.length === 0) {
	valuesArray3 = [5, 10, 6, 10, 15, 10, 10, 15, 10, 25, 15, 18];
}

/////////third end ////////////
//////////third start /////////////
var selectElement3mon = $(".mons");
var reversedOptions3mon = selectElement3mon.find('option').toArray();
var valuesArray3mon = [];
$(reversedOptions3mon).each(function () {
	// Get the value of each <option> and add it to the array
	var optionValue3mon = $(this).val();
	if (optionValue3mon !== undefined) {
		valuesArray3mon.push(optionValue3mon);
	}
});

// Check if valuesArray is empty, and assign default values if needed
if (valuesArray3mon.length === 0) {
	valuesArray3mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
}

/////////third end ////////////
// Output the reversed values array or default values if empty (last item first)
console.log(valuesArray);
//var data2021 = [5, 10 , 6, 10, 15, 10, 10, 15, 10, 25, 15, 18];
//var data2022 = [35, 42, 15, 30, 25, 10, 5, 15, 10, 15, 15, 18];
//var data2023 = [5, 10, 15, 20, 5, 10, 15,30, 20, 10, 5, 10];
var datafirst = valuesArray;
var datasecond = valuesArray2;
var datathird = valuesArray3;
var y1 = jQuery('.yearsu > option:eq(2)').text(); //2022
var y2 = jQuery('.yearsu > option:eq(1)').text(); //2023
var y3 = jQuery('.yearsu > option:eq(0)').text(); //2024

console.clear();
console.log('year is ' + y3 + ' data is ' + datafirst);
console.log('year is ' + y2 + ' data is ' + datasecond);
console.log('year is ' + y1 + ' data is ' + datathird);

var options = {
	series: [
		{
			name: y3,
			data: datafirst,
		},
		{
			name: y2,
			data: datasecond,
		},
		{
			name: y1,
			data: datathird,
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
		setTimeout(function () {
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



/*------------------------------  Plan Switch Functionality  --------------------------- */
const accountGraphs = document.querySelector(".account__plan");
const planEl = document.querySelector(".plan").textContent;
console.log(planEl);


if (planEl == 'Growth' || planEl == 'Enterprise') {
	accountGraphs.classList.remove('hidden');
}

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

/*------------------------------  Gallery height Fix starts --------------------------- */


document.addEventListener('DOMContentLoaded', function () {

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