/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
/*---------Homepage---------*/
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    var fileUrl = 'Resume.pdf';
    var fileName = 'Resume.pdf';

    // Create an anchor element
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the click event of the anchor
    link.click();

    // Clean up
    document.body.removeChild(link);
  });
});

/*---------Project---------*/
 var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1;
    spaceBetween: 30;
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    };
  });

/*---------Contact Me---------*/
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // You can add your logic here to handle the form submission
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Example: Outputting form data to console
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});
