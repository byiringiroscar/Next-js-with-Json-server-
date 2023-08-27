const NewsArticleList = ({articles}) => {
  return (
    <>
        <h1>list of News Articles</h1>
        {articles.map(article => {
            return (
                <div key={article.id}>
                    <h2>{article.id} {article.title} | {article.category}</h2>
                </div>
            )
        })}
    </>
  )
}

export default NewsArticleList


export const getServerSideProps = async() => {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    return {
        props: {
            articles: data
            }
            }
    
}