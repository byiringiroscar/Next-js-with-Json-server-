const ArticleListByCategory = ({ articles, category }) => {
    return (
        <>
            <h1>Showing news for category <span><b>{category}</b></span></h1>
            {articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default ArticleListByCategory


export const getServerSideProps = async(context) => {
    const { params, req, res, query } = context;
    console.log(query);
    const { category } = params;
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Vishwas'])
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    console.log(`Pre-remdering NewsArticleList ${category}`)
    return {
        props: {
            articles: data,
            category
        }
    }
}