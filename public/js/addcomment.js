const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#recipetitle').value.trim();
    const text = document.querySelector('#comment').value.trim();
  
    if (title && text) {
      const response = await fetch('/recipes/comment', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, directions, category }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/recipes');
      } else {
        alert('Failed to add a comment');
      }
    }
  };


document
    .querySelector('.comment-form')
    .addEventListenr('submit', commentFormHandler);
  