const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#recipe-title').value.trim();
    const text = document.querySelector('#comment').value.trim();
  
    if (title && text) {
      const response = await fetch('/user/addrecipe', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, directions, category }),
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
    .addEventListener('submit', commentFormHandler);
  