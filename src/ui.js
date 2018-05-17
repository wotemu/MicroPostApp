class UI {
  constructor(){
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';

  }

  //show all posts
  showPosts(posts){
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class = "card mb-3">
          <div class = "card-body">
            <h4 class = "card-title">${post.title}</h4>
            <p class = "card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div> 
      `;   
      
    });
   this.post.innerHTML = output;
    
  }

  //show alert message
  showAlert(message, className){
    this.clearAlert();

    //create div
    const div = document.createElement('div');

    //add classes
    div.className = className;

    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.postsContainer');

    //Get posts
    const posts = document.querySelector('#posts');

    //insert alert
    container.insertBefore(div, posts);

    //Timeout
    setTimeout(()=>{
      this.clearAlert();
    }, 3000);
  }

  //clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
  //clear fields
  clearFields(){
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  //Fill form to edit
  fillForm(data){
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  //clear ID hidden value
  clearIdInput(){
     this.idInput.value = '';
  }

  //Change form state
  changeFormState(type){
    if(type === 'edit'){
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      //create cancel button

      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel edit'));

      //get parent
      const cardForm = document.querySelector('.card-form');
      //Get element to insert before span
      const formEnd = document.querySelector('.form-end');
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';

      //Remove cancel button if it is there
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove();
      }
      //clear ID from hidden field
      this.clearIdInput();
      //clear text
      this.clearFields();
    }
  }
}


export const ui = new UI();