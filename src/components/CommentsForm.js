import React from 'react'

const CommentsForm = class extends React.Component {

  render() {
    return (
      <div>
        <form
          method="POST"
          action="https://api.staticman.net/v2/entry/dsubject/dani-subject-blog/master"
        >
          <input
            name="options[redirect]"
            type="hidden"
            value="https://changingthesubject.ca/"
          />
          <input
            name="options[slug]"
            type="hidden"
            value="{{ page.slug }}"
          />
          <label><input name="fields[name]" type="text" placeholder="Name" />Name</label>
          <label><input name="fields[email]" type="email" placeholder="Email" />Email</label>
          <label><textarea name="fields[message]" placeholder="Comment"></textarea>Message</label>
          <button type="submit">Submit Comment</button>
        </form>
      </div>

   )}
 }

 export default CommentsForm;