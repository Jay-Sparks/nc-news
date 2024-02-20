const { selectArticles, selectArticleById } = require('../models/articles.model')

exports.getArticles = ( req, res, next ) => {
    selectArticles()
        .then((articles) => {
            res.status(200).send({ articles: articles })
        })
        .catch((err) => {
            next(err)
        })
}

exports.getArticleById = (req, res, next) => {
    const articleId = req.params.article_id
    selectArticleById(articleId)
        .then((article) => {
            res.status(200).send({ article: article[0] })
        })
        .catch((err) => {
            next(err)
        })
}