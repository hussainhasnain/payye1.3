
/**=================== Form Validation & AJAX =============== */

$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
      var $form = $(this);
  
      // Perform form validation
      var email = $('#email').val().trim();
      var hasError = false;
  
      // Check if the email field is empty
      if (email === '') {
        showError('emailError', 'Please fill in the email field');
        hasError = true;
      } else {
        hideError('emailError');
      }
  
      // Submit the form if there are no errors
      if (!hasError) {
        $form.ajaxSubmit({
          success: function(response) {
            // Display success message
            $('#formMessage').text('A reset Password link sent to your Email!').show();
  
            // Reset form fields
            $form.trigger('reset');
          },
          error: function() {
            alert('Error submitting form. Please try again.');
          }
        });
      }
    });
  
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function showError(elementId, errorMessage) {
      $('#' + elementId).text(errorMessage).show();
    }
  
    
    function hideError(elementId) {
      $('#' + elementId).text('').hide();
    }
  });

  

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
