const recipeFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const directions = document.querySelector('#steps').value.trim();
    const category = document.querySelector('#category').value.trim;
  
    if (title && description && ingredients && directions && category) {
      const response = await fetch('/dashboard/new', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, directions, category }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to add a recipe');
      }
    }
  };


document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', recipeFormHandler);
  