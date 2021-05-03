 const checkApi = (req, res) => {
   res.send({
     message: 'Api is working'
   })
 }

 const checkPostApi = (req, res) => {
   res.send({
     message: 'Api post is working'
   })
 }

 module.exports = {
   checkApi,
   checkPostApi
 }