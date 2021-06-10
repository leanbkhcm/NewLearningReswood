// web/src/Routes.js

import { Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
// web/src/Routes.js

<Router>
  <Set wrap={BlogLayout}>
  // web/src/Routes.js

    <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
    <Route path="/about" page={AboutPage} name="about" />
    <Route path="/" page={HomePage} name="home" />
  </Set>
  <Route notfound page={NotFoundPage} />
</Router>
  )
}

export default Routes