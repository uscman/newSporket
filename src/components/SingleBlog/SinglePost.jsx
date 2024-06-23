/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10">
    <polygon fillRule="evenodd" points="104.988 9.2 109.488 9.2 109.488 13.7 107.76 11.972 103.062 16.688 100.074 13.7 95.574 18.2 94.512 17.138 100.074 11.594 103.062 14.582 106.716 10.928" transform="translate(-94 -9)"></polygon>
  </svg>
)

const SinglePost = ({ blog }) => {
  const {title,author} = blog?.fields;
  return (
    <div className="col-lg-4">
      <div className="item box-shadow crv mb-30">
        <div className="img">
          <img src="" alt="" />
          <div className="tags">
            <Link href="/blog-grid-clean" className="tag"><Icon /></Link>
          </div>
        </div>
        <div className="cont">
          <div className="info">
            <div className="author">
              <span>{ author }</span>
            </div>
            <div className="date">
              <span>day</span>
            </div>
          </div>
          <div className="title">
            <h5>
              <Link href="/blog-post">{ title }</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost;