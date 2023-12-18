
  
// // // Add functionality to the volunteer page
// // const volunteerPage = document.querySelector('#volunteer-page');
// // const volunteerForm = document.querySelector('#volunteer-form');

// // volunteerForm.addEventListener('submit', (event) => {
// //   event.preventDefault();

// //   const formData = new FormData(volunteerForm);
// //   const email = formData.get('email');
// //   const name = formData.get('name');

// //   // Send email with volunteer information
// //   // ...

// //   // Clear form
// //   volunteerForm.reset();
// // });

// // // Add functionality to the events page
// // const eventsPage = document.querySelector('#events-page');
// // const eventGrid = document.querySelector('#event-grid');

// // eventGrid.addEventListener('click', (event) => {
// //   const eventTarget = event.target;

// //   if (eventTarget.tagName === 'IMG') {
// //     const eventId = eventTarget.dataset.eventId;

// //     // Open event page with id
// //     // ...
// //   }
// // });


// // Volunteer page:
// const volunteerForm = document.getElementById('volunteer-form');

// volunteerForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     const name = document.getElementById('name').value;

//     // Send email to your address here
//     console.log(`Email: ${email}, Name: ${name}`);
// });

// // Events page:
// const eventGrid = document.getElementById('event-grid');

// eventGrid.addEventListener('click', function(event) {
//     if (event.target.tagName === 'IMG') {
//         const eventId = event.target.getAttribute('data-id');
//         // Open event details page with event ID
//     }
// });
