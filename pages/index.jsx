
import Header from '../components/Header'
import List from '../components/List'
import { BASE_URL } from '../constants/common'
export default function Home({posts = []}) {
  console.log(posts)
  return (
    <div>
      <Header showMainSection={true}/>
      <List posts={posts}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const posts = await fetch(`${BASE_URL}api/articles`).then(res => res.json())
  return {
    props: {
      posts
    }
  }
}