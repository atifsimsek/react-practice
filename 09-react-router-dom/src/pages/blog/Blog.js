import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { url } from '../../utils'
const Blog = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const posts = [
    {
      id: 1,
      title: "post 1",
      url: "post-1"
    },
    {
      id: 2,
      title: "post 2",
      url: "post-2"
    },
    {
      id: 3,
      title: "post 3",
      url: "post-3"
    },
  ]

  useEffect(() => {

    searchParams.set("search",search)
    setSearchParams(Object.fromEntries([...searchParams]));


  }, [search])





  return (
    <div>Blog Page
      <br />
      <h4>Set Params</h4>

      <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" />


      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <Link to={url("home.blog.post", {
                id: post.id,
                url: post.url
              })}>{post.title}</Link>

            </li>
          ))
        }
      </ul>
      <br />
      <Link to={"categories"}>BlogCategories</Link>
      <br />
      <Link to={"post/:url"}>BlogPost</Link>


    </div>
  )
}

export default Blog