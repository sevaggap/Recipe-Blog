const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const recipeid = document.querySelector('#recipeid');
    const text = document.querySelector('#comment').value.trim();
  
    console.log('hi');
    if (text) {
      const response = await fetch('/dashboard/comments', {
        method: 'POST',
        body: JSON.stringify({ recipeid, text}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert('Failed to add a recipe');
      }
    }
};


document
    .querySelector('#comment-form')
    .addEventListener('click', commentFormHandler);
  