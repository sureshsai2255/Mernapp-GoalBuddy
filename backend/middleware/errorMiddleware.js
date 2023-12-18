const errorHandler = (err,req,res,next)=>{
   
    const statusCode  =res.statusCode ? res.statusCode : 5000
    res.json({
        message: err.message,
        stack: process.env.NODE === 'production' ? null : err.stack
    })
}

module.exports = {  
    errorHandler
}