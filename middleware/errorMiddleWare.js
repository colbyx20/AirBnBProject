const errorHandler = (err,req,res,next) =>{
    // 500 is server erorr
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode);

    res.json({
        message:err.message,
        stack:err.stack,
    })
}

module.exports = {
    errorHandler
}