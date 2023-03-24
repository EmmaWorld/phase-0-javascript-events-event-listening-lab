function addingEventListener() {
    input.addEventListener('click', function() {
      return "I was clicked"
    });
  }

const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});


